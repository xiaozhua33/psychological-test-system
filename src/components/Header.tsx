'use client'

import Link from 'next/link'
import Image from 'next/image'
import { User, LogOut } from 'lucide-react'
import { useAuth } from '@/components/AuthProvider'

export default function Header() {
  const { user, profile, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image 
                src="/images/logo.png" 
                alt="ココロトリックスラボ" 
                width={40} 
                height={40} 
                className="group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform">
                ココロトリックスラボ
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">心理テスト・診断アプリ</p>
            </div>
          </Link>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link 
                  href="/mypage" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-brand-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm">
                    {profile?.display_name || 'マイページ'}
                  </span>
                </Link>
                
                {profile?.subscription_status === 'unlimited' && (
                  <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-medium rounded-full">
                    無制限
                  </span>
                )}
                
                <button
                  onClick={handleSignOut}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  aria-label="ログアウト"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link 
                href="/auth/login" 
                className="btn-primary text-sm px-4 py-2"
              >
                ログイン
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}