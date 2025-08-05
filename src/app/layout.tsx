import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import AuthProvider from '@/components/AuthProvider'
import ShareButton from '@/components/ShareButton'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'ココロトリックスラボ - 心理テスト・診断アプリ',
  description: 'TikTokで人気の心理テスト・星座テスト・恋愛テストが楽しめる診断アプリ。毎日新しい発見があなたを待っています。',
  keywords: ['心理テスト', '診断', 'TikTok', '星座', '恋愛', 'ココロトリックスラボ'],
  authors: [{ name: 'ココロトリックスラボ' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'ココロトリックスラボ - 心理テスト・診断アプリ',
    description: 'TikTokで人気の心理テスト・星座テスト・恋愛テストが楽しめる診断アプリ',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ココロトリックスラボ - 心理テスト・診断アプリ',
    description: 'TikTokで人気の心理テスト・星座テスト・恋愛テストが楽しめる診断アプリ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col">
            {/* Share Button - Fixed position */}
            <ShareButton />
            
            {/* Main Content */}
            <main className="relative z-10 flex-grow">
              {children}
            </main>
            
            {/* Footer */}
            <Footer />
          </div>
          
          {/* Toast notifications */}
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#fff',
                color: '#333',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
}