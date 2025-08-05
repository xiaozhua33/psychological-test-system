'use client'

import Header from '@/components/Header'
import Link from 'next/link'

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              免責事項
            </h1>
            <p className="text-xl text-gray-600">
              当サイトの利用に関する免責事項をご確認ください
            </p>
          </div>

          <div className="card mb-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">1. テスト結果に関する免責事項</h2>
                <p className="text-gray-700">
                  当サイトの心理テスト、星座テスト、恋愛テスト等の結果は、あくまでも娯楽目的で提供されるものであり、専門的な心理診断や医学的アドバイスを目的としたものではありません。テスト結果は学術的な正確性を保証するものではなく、重要な判断や決断の根拠として使用することは避けてください。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">2. サービスの利用に関する免責事項</h2>
                <p className="text-gray-700">
                  当サイトは、サービスの完全性、正確性、有用性、特定の目的への適合性、及び継続的なサービス提供について一切の保証を行いません。サービスの利用は、ユーザーの皆様ご自身の責任において行っていただきます。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">3. やむを得ないサービスの中断・変更</h2>
                <p className="text-gray-700">
                  当サイトは、以下の理由により予告なくサービスの提供を一時中断、または変更、終了することがあります。これによってユーザーに生じた損害について、当サイトは一切の責任を負いません。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>システムの保守・点検・更新を行う場合</li>
                  <li>火災、停電、天災などの不可抗力によりサービスの提供が困難な場合</li>
                  <li>サーバーの障害やシステムトラブルが発生した場合</li>
                  <li>その他、当サイトがサービス提供の一時中断が必要と判断した場合</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">4. 情報の正確性</h2>
                <p className="text-gray-700">
                  当サイトは、提供する情報の正確性、最新性、有用性、完全性を保証するものではありません。情報の利用によって生じたいかなる損害についても、当サイトは責任を負いません。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">5. リンク先サイトに関する免責事項</h2>
                <p className="text-gray-700">
                  当サイトからリンクしている外部サイトの内容については、当サイトは一切の責任を負いません。リンク先のサイトの利用については、ユーザーの皆様ご自身の責任で行っていただくようお願いいたします。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">6. 利用規約との関係</h2>
                <p className="text-gray-700">
                  本免責事項は、<Link href="/terms" className="text-brand-600 hover:text-brand-700">利用規約</Link>の一部を構成します。当サイトを利用することにより、本免責事項に同意したものとみなされます。
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