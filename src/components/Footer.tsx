import Link from 'next/link'
import { Brain, Lock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">ココロトリックスラボ</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/category/psychology" className="text-gray-600 hover:text-brand-600">
              心理テスト
            </Link>
            <Link href="/category/zodiac" className="text-gray-600 hover:text-brand-600">
              星座テスト
            </Link>
            <Link href="/category/love" className="text-gray-600 hover:text-brand-600">
              恋愛テスト
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">カテゴリ</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/category/psychology" className="text-gray-600 hover:text-brand-600">
                    心理テスト
                  </Link>
                </li>
                <li>
                  <Link href="/category/zodiac" className="text-gray-600 hover:text-brand-600">
                    星座テスト
                  </Link>
                </li>
                <li>
                  <Link href="/category/love" className="text-gray-600 hover:text-brand-600">
                    恋愛テスト
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">アカウント</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/auth/login" className="text-gray-600 hover:text-brand-600">
                    ログイン
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signup" className="text-gray-600 hover:text-brand-600">
                    新規登録
                  </Link>
                </li>
                <li>
                  <Link href="/mypage" className="text-gray-600 hover:text-brand-600">
                    マイページ
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-brand-600">
                    無制限プラン
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">サポート</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-brand-600">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-brand-600">
                    私たちについて
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">法的情報</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-brand-600">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-brand-600">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-gray-600 hover:text-brand-600">
                    特定商取引法
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-gray-600 hover:text-brand-600">
                    免責事項
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; 2025 ココロトリックスラボ All Rights Reserved.
          </p>
          <div className="flex items-center text-gray-600 text-sm">
            <Lock className="w-4 h-4 mr-1" />
            <span>セキュアな支払い処理</span>
          </div>
        </div>
      </div>
    </footer>
  )
}