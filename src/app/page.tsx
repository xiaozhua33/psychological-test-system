'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import Header from '@/components/Header'
import SocialBanner from '@/components/SocialBanner'
import CategoryCard from '@/components/CategoryCard'
import { TestLimitData, useTestLimit } from '@/hooks/useTestLimit'
import { AlertCircle, Crown } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    title: '心理テスト',
    description: 'あなたの性格や心理状態を深く理解し、新しい一面を発見しましょう。',
    icon: 'brain',
    emoji: '🧠',
    href: '/category/psychology',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    title: '星座テスト',
    description: 'あなたの星座が教える運勢や性格、今日のラッキーカラーをチェック！',
    icon: 'star',
    emoji: '⭐',
    href: '/category/zodiac',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    title: '恋愛テスト',
    description: 'あなたの恋愛スタイルや理想の相手、恋愛運を診断していきましょう。',
    icon: 'heart',
    emoji: '♥️',
    href: '/category/love',
    gradient: 'from-pink-400 to-red-500'
  }
]

export default function HomePage() {
  const { user, profile, loading } = useAuth()
  const { checkDailyLimit } = useTestLimit()
  const [limitData, setLimitData] = useState<TestLimitData | null>(null)
  const [limitLoading, setLimitLoading] = useState(false)

  useEffect(() => {
    if (user) {
      loadLimitData()
    }
  }, [user])

  const loadLimitData = async () => {
    setLimitLoading(true)
    const data = await checkDailyLimit()
    setLimitData(data)
    setLimitLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">あなたの未知の一面を</span>
            <br />
            <span className="text-gray-700">発見しよう</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            TikTokで話題の心理テストや診断が体験できる。
            <br />
            毎日新しい発見があなたを待っています。
          </p>
        </div>

        {/* Daily Limit Status - Show only for logged in users */}
        {user && !limitLoading && limitData && (
          <div className="mb-8">
            {limitData.isUnlimited ? (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-2xl text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Crown className="w-6 h-6" />
                  <span className="font-bold text-lg">無制限プラン有効</span>
                </div>
                <p>何回でもテストを楽しめます！</p>
              </div>
            ) : (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-800">
                    本日のテスト残り回数: {limitData.remainingTests}回
                  </span>
                </div>
                <p className="text-blue-600 text-sm">
                  限制を解除して無制限で楽しみませんか？
                  <Link href="/pricing" className="underline font-medium ml-1">
                    ¥300で無制限解放
                  </Link>
                </p>
              </div>
            )}
          </div>
        )}

        {/* Social Banner */}
        <div className="mb-12">
          <SocialBanner />
        </div>

        {/* Test Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            テストカテゴリ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {!user && (
          <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              さあ、あなたも始めてみませんか？
            </h3>
            <p className="text-gray-600 mb-6">
              無料でアカウント作成して、毎日7回までテストを楽しめます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="btn-primary">
                無料で始める
              </Link>
              <Link href="/auth/login" className="btn-secondary">
                ログイン
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}