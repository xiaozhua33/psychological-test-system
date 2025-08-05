'use client'

import { useState, ReactNode } from 'react'
import { Share, Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'

type ShareButtonProps = {
  title?: string
  text?: string
  url?: string
  className?: string
  children?: ReactNode
}

export default function ShareButton({
  title = 'ココロトリックスラボ - 心理テスト・診断アプリ',
  text = 'TikTokで人気の心理テスト・星座テスト・恋愛テストが楽しめる診断アプリ！あなたも試してみませんか？',
  url,
  className,
  children
}: ShareButtonProps = {}) {
  const [copied, setCopied] = useState(false)
  const [canNativeShare, setCanNativeShare] = useState(false)
  
  // Check for native share capability on client-side only
  useState(() => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      setCanNativeShare(true)
    }
  })

  const handleShare = async () => {
    const shareData = {
      title,
      text,
      url: url || window.location.href
    }

    // Native share API available?
    if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
        toast.success('シェアありがとうございます！')
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled')
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        toast.success('URLをコピーしました！')
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        toast.error('コピーに失敗しました')
      }
    }
  }

  // If used as a fixed button (no children or className provided)
  if (!children && !className) {
    return (
      <button
        onClick={handleShare}
        className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm text-brand-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 border border-brand-100"
        aria-label="このページをシェア"
      >
        <div className="relative">
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : canNativeShare ? (
            <Share className="w-5 h-5" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </div>
      </button>
    );
  }
  
  // If used as a custom button with children
  return (
    <button
      onClick={handleShare}
      className={className || ""}
      aria-label="このページをシェア"
    >
      {children || (
        <div className="relative">
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : canNativeShare ? (
            <Share className="w-5 h-5" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </div>
      )}
    </button>
  )
}