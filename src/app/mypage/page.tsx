'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthProvider'
import { useTestLimit, TestLimitData } from '@/hooks/useTestLimit'
import Header from '@/components/Header'
import { User, Crown, Calendar, BarChart3, Clock, Star } from 'lucide-react'
import { supabase, UserTest } from '@/lib/supabase'
import Link from 'next/link'

export default function MyPage() {
  const { user, profile, loading: authLoading } = useAuth()
  const { checkDailyLimit } = useTestLimit()
  const [limitData, setLimitData] = useState<TestLimitData | null>(null)
  const [recentTests, setRecentTests] = useState<UserTest[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth/login')
      return
    }

    if (user) {
      loadPageData()
    }
  }, [user, authLoading])

  const loadPageData = async () => {
    setLoading(true)
    
    try {
      // Load daily limit data
      const limitResult = await checkDailyLimit()
      setLimitData(limitResult)

      // Load recent tests
      const { data: testsData, error: testsError } = await supabase
        .from('user_tests')
        .select('*')
        .eq('user_id', user!.id)
        .order('completed_at', { ascending: false })
        .limit(5)

      if (testsError) {
        console.error('Error loading tests:', testsError)
      } else {
        setRecentTests(testsData || [])
      }
    } catch (error) {
      console.error('Error loading page data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-2">マイページ</h1>
            <p className="text-gray-600">あなたのテスト結果や統計情報を確認できます</p>
          </div>

          {/* User Info Card */}
          <div className="card mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-accent-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {profile?.display_name || 'ユーザー'}
                </h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
              {profile?.subscription_status === 'unlimited' && (
                <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full">
                  <Crown className="w-4 h-4" />
                  <span className="text-sm font-medium">無制限メンバー</span>
                </div>
              )}
            </div>
            
            <div className="text-sm text-gray-500">
              登録日: {new Date(user.created_at!).toLocaleDateString('ja-JP')}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Daily Limit */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-800">今日の状況</h3>
              </div>
              {limitData ? (
                <div>
                  {limitData.isUnlimited ? (
                    <p className="text-green-600 font-medium">無制限で利用可能</p>
                  ) : (
                    <>
                      <p className="text-2xl font-bold text-gray-800 mb-1">
                        {limitData.remainingTests}回
                      </p>
                      <p className="text-sm text-gray-500">残りテスト回数</p>
                    </>
                  )}
                </div>
              ) : (
                <p className="text-gray-500">読み込み中...</p>
              )}
            </div>

            {/* Total Tests */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-800">総テスト数</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">
                {recentTests.length}回
              </p>
              <p className="text-sm text-gray-500">これまでの実施回数</p>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-800">最終アクティビティ</h3>
              </div>
              {recentTests.length > 0 ? (
                <>
                  <p className="text-sm text-gray-800 font-medium mb-1">
                    {new Date(recentTests[0].completed_at).toLocaleDateString('ja-JP')}
                  </p>
                  <p className="text-sm text-gray-500">テスト実施</p>
                </>
              ) : (
                <p className="text-sm text-gray-500">まだテストを実施していません</p>
              )}
            </div>
          </div>

          {/* Upgrade CTA - Show only for free users */}
          {profile?.subscription_status !== 'unlimited' && (
            <div className="card bg-gradient-to-br from-brand-50 to-accent-50 border-2 border-brand-200 mb-8">
              <div className="text-center">
                <Crown className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold gradient-text mb-2">
                  無制限プランでもっと楽しもう！
                </h3>
                <p className="text-gray-600 mb-4">
                  たった¥300で、すべてのテストを無制限で楽しめます。
                </p>
                <Link href="/pricing" className="btn-primary inline-block">
                  無制限プランを見る
                </Link>
              </div>
            </div>
          )}

          {/* Recent Tests */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Star className="w-6 h-6 text-brand-600 mr-2" />
              最近のテスト結果
            </h3>
            
            {recentTests.length > 0 ? (
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={test.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          テスト #{test.test_id}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {test.result_summary || '結果を確認してください'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(test.completed_at).toLocaleString('ja-JP')}
                        </p>
                      </div>
                      <Link 
                        href={`/result/${test.id}`}
                        className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                      >
                        結果を見る
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 mb-4">まだテストを実施していません</p>
                <Link href="/" className="btn-primary">
                  テストを始める
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}