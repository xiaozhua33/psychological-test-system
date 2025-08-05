'use client'

import Header from '@/components/Header'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              プライバシーポリシー
            </h1>
            <p className="text-xl text-gray-600">
              当サイトのプライバシーポリシーをご確認ください
            </p>
          </div>

          <div className="card mb-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">1. 個人情報の収集</h2>
                <p className="text-gray-700">
                  「ココロトリックスラボ」（以下、「当サイト」）では、ユーザー登録時にメールアドレスなどの個人情報を収集します。また、テスト結果や利用履歴などの情報も保存されます。これらの情報は、サービス提供のためにのみ使用され、ユーザーの明示的な同意なしに第三者に提供されることはありません。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">2. 情報の利用目的</h2>
                <p className="text-gray-700">
                  当サイトが収集した情報は、以下の目的で利用されます：
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>サービスの提供・維持・向上</li>
                  <li>ユーザー認証とアカウント管理</li>
                  <li>テスト結果の保存と表示</li>
                  <li>サービスに関するお知らせや更新情報の提供</li>
                  <li>サービスの利用状況の分析と改善</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">3. 情報の安全管理</h2>
                <p className="text-gray-700">
                  当サイトでは、収集した個人情報の安全管理のために、適切なセキュリティ対策を講じています。データはSupabaseのセキュアな環境で保管され、不正アクセス、紛失、破壊、改ざん、漏洩などを防止するための措置を講じています。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">4. Cookieの使用</h2>
                <p className="text-gray-700">
                  当サイトでは、ユーザーエクスペリエンスの向上のためにCookieを使用しています。Cookieは、ブラウザの設定から無効にすることも可能ですが、その場合、一部のサービス機能が利用できなくなる可能性があります。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">5. 第三者提供</h2>
                <p className="text-gray-700">
                  当サイトは、以下の場合を除き、収集した個人情報を第三者に提供することはありません：
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>ユーザーの同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために必要がある場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">6. 個人情報の開示・訂正・削除</h2>
                <p className="text-gray-700">
                  ユーザーは、当サイトに保存されている自分の個人情報について、開示・訂正・削除を求めることができます。具体的な手続きについては、お問い合わせフォームからご連絡ください。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">7. プライバシーポリシーの変更</h2>
                <p className="text-gray-700">
                  当サイトは、必要に応じてプライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">8. お問い合わせ</h2>
                <p className="text-gray-700">
                  プライバシーポリシーに関するお問い合わせは、<Link href="/contact" className="text-brand-600 hover:text-brand-700">お問い合わせフォーム</Link>からご連絡ください。
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-center">
            最終更新日：2025年7月23日
          </p>
        </div>
      </div>
    </div>
  )
}