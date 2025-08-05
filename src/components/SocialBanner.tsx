'use client'

import { ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@cocorotricks_lab',
    color: 'from-pink-500 to-red-500',
    icon: '🎵'
  },
  {
    name: 'X (Twitter)',
    url: '#', // placeholder
    color: 'from-blue-400 to-blue-600',
    icon: '🐦'
  },
  {
    name: 'LINE友だち追加',
    url: 'https://line.me/R/ti/p/@768waamp?oat__id=5608329',
    color: 'from-green-400 to-green-600',
    icon: '💬'
  }
]

export default function SocialBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg animate-fade-in">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold mb-2">
          🌈 TikTokで人気の診断毎日更新中！
        </h3>
        <p className="text-purple-100">
          動画で直感テストを体験しよう📱
          <br />
          👉 @cocorotricks_lab を今すぐフォロー
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r ${link.color} p-4 rounded-xl text-center transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 group`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
              <span className="font-medium">{link.name}</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}