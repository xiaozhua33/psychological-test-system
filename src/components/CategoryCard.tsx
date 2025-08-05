'use client'

import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface CategoryCardProps {
  title: string
  description: string
  icon: string
  emoji: string
  href: string
  gradient: string
}

export default function CategoryCard({ 
  title, 
  description, 
  icon, 
  emoji, 
  href, 
  gradient 
}: CategoryCardProps) {
  return (
    <Link href={href} className="group">
      <div className={`card-interactive bg-gradient-to-br ${gradient} text-white relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-6 -right-6 text-6xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
            {emoji}
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
              {emoji}
            </span>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/80 font-medium">
              今すぐ診断
            </span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}