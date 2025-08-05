'use client'

import Header from '@/components/Header'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              利用規約
            </h1>
            <p className="text-xl text-gray-600">
              当サイトのご利用にあたっての規約をご確認ください
            </p>
          </div>

          <div className="card mb-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">1. はじめに</h2>
                <p className="text-gray-700">
                  この利用規約（以下、「本規約」）は、「ココロトリックスラボ」（以下、「当サイト」）の提供するサービスの利用条件を定めるものです。ユーザーの皆様（以下、「ユーザー」）には、本規約に従って当サイトをご利用いただきます。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">2. 利用登録</h2>
                <p className="text-gray-700">
                  当サイトの一部のサービスでは、ユーザー登録が必要となります。ユーザーは、真実かつ正確な情報を提供して登録を行う必要があります。登録情報に変更があった場合は、速やかに更新してください。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">3. サービスの利用制限</h2>
                <p className="text-gray-700">
                  無料プランのユーザーは、1日7回までテストを利用できます。無制限プランへのアップグレードにより、この制限を解除することができます。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">4. 禁止事項</h2>
                <p className="text-gray-700">
                  ユーザーは、以下の行為を行ってはなりません：
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当サイトのサーバーやネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当サイトのサービスの運営を妨害する行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>他のユーザーに成りすます行為</li>
                  <li>当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>その他、当サイトが不適切と判断する行為</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">5. サービスの変更・停止</h2>
                <p className="text-gray-700">
                  当サイトは、ユーザーに通知することなく、サービスの内容を変更したり、提供を停止したりすることができます。これによりユーザーに損害が生じた場合でも、当サイトは一切の責任を負いません。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">6. 免責事項</h2>
                <p className="text-gray-700">
                  当サイトのテスト結果は娯楽目的で提供されており、専門的な診断や医学的アドバイスを目的としたものではありません。重要な決断や医療的判断には、適切な専門家にご相談ください。当サイトは、テスト結果の正確性や有用性について保証するものではなく、結果の利用によって生じるいかなる損害についても責任を負いません。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">7. 退会</h2>
                <p className="text-gray-700">
                  ユーザーは、いつでも当サイトの定める手続きに従って退会することができます。退会後は、ユーザーが当サイトで保存したデータにアクセスできなくなります。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">8. 著作権</h2>
                <p className="text-gray-700">
                  当サイトのコンテンツ（テキスト、画像、ロゴ、デザイン、コードなど）に関する著作権は、当サイトまたは正当な権利者に帰属します。無断での複製、転載、改変、販売等は禁止されています。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">9. 規約の変更</h2>
                <p className="text-gray-700">
                  当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">10. お問い合わせ</h2>
                <p className="text-gray-700">
                  本規約に関するお問い合わせは、<Link href="/contact" className="text-brand-600 hover:text-brand-700">お問い合わせフォーム</Link>からご連絡ください。
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