'use client'

import Header from '@/components/Header'

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              特定商取引法に基づく表記
            </h1>
            <p className="text-xl text-gray-600">
              電子商取引に関する重要事項を記載しています
            </p>
          </div>

          <div className="card mb-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">事業者の名称</h2>
                <p className="text-gray-700">
                  ココロトリックスラボ株式会社
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">代表者</h2>
                <p className="text-gray-700">
                  山田 拓也
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">所在地</h2>
                <p className="text-gray-700">
                  〒150-0002<br />
                  東京都渋谷区渋谷1-1-1
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">連絡先</h2>
                <p className="text-gray-700">
                  電話番号：03-1234-5678<br />
                  メール：info@kokorotricks-lab.jp
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">販売価格</h2>
                <p className="text-gray-700">
                  無制限プラン：300円（税込）<br />
                  利用制限：無料プランは1日7回までテスト利用可能
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">商品等の価格以外に必要な料金</h2>
                <p className="text-gray-700">
                  通信費、接続料金等はお客様のご負担となります。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">支払方法</h2>
                <p className="text-gray-700">
                  クレジットカード決済（VISA、MasterCard、American Express、JCB）
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">支払時期</h2>
                <p className="text-gray-700">
                  無制限プランのお支払いは、購入手続き完了時に行われます。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">商品の引渡し時期</h2>
                <p className="text-gray-700">
                  無制限プランの利用権は、支払い手続き完了後、即時に付与されます。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">返品・キャンセルについて</h2>
                <p className="text-gray-700">
                  デジタルコンテンツの性質上、購入後の返品・キャンセルは原則としてお受けできません。お客様の都合による返品・キャンセルについては、法令に基づきクーリングオフ制度の対象外とさせていただきます。
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