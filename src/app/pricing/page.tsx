'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { useAuth } from '@/components/AuthProvider'
import Header from '@/components/Header'
import { Crown, Check, Zap } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function PricingPage() {
  const { user, profile } = useAuth()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubscribe = async (planType = 'unlimited', isSubscription = false) => {
    if (!user) {
      toast.error('ログインが必要です')
      router.push('/auth/login')
      return
    }

    if (profile?.subscription_status === 'unlimited' && !isSubscription) {
      toast.success('既に無制限プランをご利用中です')
      return
    }

    if (profile?.subscription_status === 'monthly' && isSubscription) {
      toast.success('既に月額プランをご利用中です')
      return
    }

    setLoading(true)

    try {
      // Create payment intent
      const { data, error } = await supabase.functions.invoke('create-subscription', {
        body: { 
          plan_type: planType,
          is_subscription: isSubscription 
        },
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        }
      })

      if (error) throw error

      const stripe = await stripePromise
      if (!stripe) throw new Error('Stripeの初期化に失敗しました')

      // Redirect to Stripe Checkout
      const { error: stripeError } = await stripe.confirmPayment({
        clientSecret: data.data.clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
        },
      })

      if (stripeError) {
        throw new Error(stripeError.message)
      }
    } catch (error: any) {
      console.error('Subscription error:', error)
      toast.error(error.message || '支払いの処理に失敗しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              プラン一覧
            </h1>
            <p className="text-xl text-gray-600">
              あなたに合ったプランをお選びください
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Free Plan */}
            <div className="card border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">無料プラン</h3>
                <div className="text-3xl font-bold text-gray-600 mb-2">¥0</div>
                <p className="text-gray-500">毎日利用できます</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>1日7回までテスト可能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>すべてのカテゴリ利用可能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>結果の保存と履歴</span>
                </li>
              </ul>

              <button 
                className="w-full btn-secondary"
                disabled
              >
                現在のプラン
              </button>
            </div>

            {/* Unlimited Plan */}
            <div className="card border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-accent-50 relative overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                おすすめ
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-2 flex items-center justify-center">
                  <Crown className="w-6 h-6 mr-2" />
                  無制限プラン
                </h3>
                <div className="text-4xl font-bold gradient-text mb-2">¥300</div>
                <p className="text-brand-700">一度のお支払いで無制限</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-brand-500 mr-2" />
                  <span className="font-medium">無制限でテスト可能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>すべてのカテゴリ利用可能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>結果の保存と履歴</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>新しいテストへの早期アクセス</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>特別な結果コンテンツ</span>
                </li>
              </ul>

              <button 
                onClick={() => handleSubscribe('unlimited')}
                disabled={loading || profile?.subscription_status === 'unlimited'}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    処理中...
                  </div>
                ) : profile?.subscription_status === 'unlimited' ? (
                  '現在のプラン'
                ) : (
                  '今すぐ始める'
                )}
              </button>
            </div>

            {/* Monthly Plan */}
            <div className="card border-2 border-accent-500 bg-gradient-to-br from-accent-50 to-blue-50 relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-400 to-accent-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                定期購読
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-2 flex items-center justify-center">
                  <Crown className="w-6 h-6 mr-2" />
                  月額プラン
                </h3>
                <div className="text-4xl font-bold text-accent-600 mb-2">¥480</div>
                <p className="text-accent-700">毎月自動更新</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-accent-500 mr-2" />
                  <span className="font-medium">無制限でテスト可能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>すべてのカテゴリ利用可能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>プレミアムテストにアクセス</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>パーソナルデータの分析</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>VIPサポート</span>
                </li>
              </ul>

              <button 
                onClick={() => handleSubscribe('monthly', true)}
                disabled={loading || profile?.subscription_status === 'monthly'}
                className="w-full btn-secondary bg-accent-500 hover:bg-accent-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    処理中...
                  </div>
                ) : profile?.subscription_status === 'monthly' ? (
                  '現在のプラン'
                ) : (
                  '月額プランで始める'
                )}
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div className="card">
            <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
              よくある質問
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Q: 支払いは一度だけですか？
                </h4>
                <p className="text-gray-600">
                  A: 無制限プランは一度のお支払いで永続的にご利用いただけます。月額プランは毎月自動更新されます。
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Q: テストの種類はどのくらいありますか？
                </h4>
                <p className="text-gray-600">
                  A: 心理テスト、星座テスト、恋愛テストの3カテゴリで、定期的に新しいテストを追加しています。
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Q: 無料プランでも十分楽しめますか？
                </h4>
                <p className="text-gray-600">
                  A: はい、1日7回までという制限はありますが、すべての基本機能をご利用いただけます。
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Q: 月額プランはいつでも解約できますか？
                </h4>
                <p className="text-gray-600">
                  A: はい、いつでも解約可能です。解約後は次回の更新日まで機能をご利用いただけます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}