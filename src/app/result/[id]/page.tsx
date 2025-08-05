'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthProvider'
import Header from '@/components/Header'
import ShareButton from '@/components/ShareButton'
import { Calendar, ClipboardCopy, ExternalLink, ArrowLeft, Share2, RefreshCw, MessageCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import toast from 'react-hot-toast'

type UserTestResult = {
  id: number
  user_id: string
  test_id: number
  result_summary: string
  result_detail: string
  completed_at: string
  test: {
    title: string
    description: string
    category_id: number
  }
}

export default function ResultPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const [result, setResult] = useState<UserTestResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const resultId = parseInt(params.id as string)

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
      return
    }

    if (resultId) {
      loadResult()
    }
  }, [resultId, user])

  const loadResult = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const { data, error } = await supabase
        .from('user_tests')
        .select(`
          *,
          test:test_id (*)
        `)
        .eq('id', resultId)
        .eq('user_id', user!.id)
        .maybeSingle()

      if (error) {
        console.error('Supabase error:', error)
        setError('結果が取得できませんでした')
        return
      }
      
      if (!data) {
        setError('結果が見つかりませんでした')
        return
      }

      setResult(data as UserTestResult)
    } catch (error) {
      console.error('Error loading result:', error)
      setError('結果が取得できませんでした')
    } finally {
      setLoading(false)
    }
  }

  const getShareText = (): string => {
    if (!result) return ''
    const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
    return `「${result.test.title}」の結果: ${result.result_summary}\n\nあなたも試してみませんか？ #ココロトリックスラボ\n${currentUrl}`
  }

  const handleRetakeTest = () => {
    if (!result) return
    router.push(`/test/${result.test_id}`)
  }

  const handleLineShare = () => {
    const text = encodeURIComponent(getShareText())
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${text}`
    window.open(lineUrl, '_blank', 'width=600,height=600')
  }

  const handleXShare = () => {
    const text = encodeURIComponent(getShareText())
    const xUrl = `https://twitter.com/intent/tweet?text=${text}`
    window.location.href = xUrl
  }

  const getCategoryLink = (): string => {
    if (!result) return '/'
    
    switch (result.test.category_id) {
      case 1: return '/category/psychology'
      case 2: return '/category/zodiac'
      case 3: return '/category/love'
      default: return '/'
    }
  }

  if (loading) {
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

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card bg-red-50 border-red-200">
              <div className="text-red-600 mb-4">
                <ExternalLink className="w-12 h-12 mx-auto mb-4" />
              </div>
              <h2 className="text-xl font-bold text-red-800 mb-2">
                {error}
              </h2>
              <p className="text-red-600 mb-6">
                申し訳ございませんが、結果の表示でエラーが発生しました。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.reload()}
                  className="btn-primary"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  再読み込み
                </button>
                <Link href="/" className="btn-secondary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ホームに戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!result) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* 1. プロフィール画像エリア */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-400 to-accent-400 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">
                {user?.email?.charAt(0).toUpperCase() || '🧠'}
              </span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mb-1">
              {result.test.title}
            </h1>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(result.completed_at).toLocaleDateString('ja-JP')}
            </div>
          </div>

          {/* 2. 結果カード */}
          <div className="card bg-gradient-to-br from-brand-50 to-accent-50 border-2 border-brand-100 mb-6">
            <h2 className="text-xl font-bold text-center gradient-text mb-4">
              {result.result_summary}
            </h2>
            
            <p className="text-gray-700 leading-relaxed text-center">
              {result.result_detail}
            </p>
          </div>

          {/* 3. LINEボタン */}
          <button 
            onClick={handleLineShare}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl mb-3 flex items-center justify-center transition-colors"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            LINEでシェア
          </button>

          {/* 4. Xシェアボタン */}
          <button 
            onClick={handleXShare}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl mb-3 flex items-center justify-center transition-colors"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Xで診断をシェア
          </button>

          {/* 5. もう一度診断するボタン */}
          <button 
            onClick={handleRetakeTest}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-6 rounded-xl mb-6 flex items-center justify-center transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            もう一度診断する
          </button>

          {/* その他のテスト */}
          <div className="card">
            <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
              他のテストも試してみませんか？
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
              <Link href="/category/psychology" className="text-center p-3 rounded-lg border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors">
                <span className="text-2xl block mb-1">🧠</span>
                <span className="text-xs text-gray-600">心理</span>
              </Link>
              <Link href="/category/zodiac" className="text-center p-3 rounded-lg border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors">
                <span className="text-2xl block mb-1">⭐</span>
                <span className="text-xs text-gray-600">星座</span>
              </Link>
              <Link href="/category/love" className="text-center p-3 rounded-lg border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors">
                <span className="text-2xl block mb-1">♥️</span>
                <span className="text-xs text-gray-600">恋愛</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}