'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthProvider'
import Header from '@/components/Header'
import { CheckCircle, Crown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function PaymentSuccessPage() {
  const router = useRouter()
  const { user, profile } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
      return
    }

    // Set a timeout to simulate profile update
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [user])

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

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <div className="card bg-gradient-to-br from-brand-50 to-accent-50 border-2 border-brand-200 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold gradient-text mb-4">
                お支払いが完了しました！
              </h1>
              
              <p className="text-xl text-gray-700 mb-6">
                無制限プランへのアップグレードありがとうございます
              </p>
              
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Crown className="w-8 h-8 text-brand-600" />
                  <h2 className="text-2xl font-bold gradient-text">無制限プラン有効</h2>
                </div>
                
                <ul className="space-y-3 text-left max-w-md mx-auto mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>すべてのテストに無制限でアクセス可能</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>制限なしでテストを何度でも楽しめます</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>新しいテストへの早期アクセス</span>
                  </li>
                </ul>
                
                <p className="text-sm text-gray-600">
                  もう日々のテスト制限を気にする必要はありません！
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary flex items-center justify-center">
                <span>テストを始める</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              
              <Link href="/mypage" className="btn-secondary">
                マイページへ
              </Link>
            </div>
          </div>
          
          {/* Support Section */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-4">サポートが必要ですか？</h3>
            <p className="text-gray-600 mb-4">
              お支払いや無制限プランについて質問がある場合は、お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="text-brand-600 hover:text-brand-700 font-medium">
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}