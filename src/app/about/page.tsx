'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialBanner from '@/components/SocialBanner'
import { Brain, Heart, Star, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              私たちについて
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              「ココロトリックスラボ」は、科学的アプローチと心理学に基づいた楽しいテストであなたの内面を探求するプラットフォームです。
            </p>
          </div>

          {/* Mission */}
          <div className="card mb-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-brand-600" />
              </div>
              <h2 className="text-2xl font-bold gradient-text mb-3">
                私たちのミッション
              </h2>
              <p className="text-gray-700 leading-relaxed">
                私たちは、誰もが自分自身をより深く理解できるようにすることを目指しています。楽しく魅力的なテストを通じて、人々が自己発見の旅に出るきっかけを提供します。心理学の力を活用し、自己認識を深め、人間関係を改善し、個人の成長を促進する機会を創出しています。
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-3">
                  <div className="p-2 bg-brand-50 rounded-lg mr-3">
                    <Sparkles className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">エンターテイメントと教育</h3>
                </div>
                <p className="text-gray-600">
                  私たちは、エンターテイメントと教育を融合させ、楽しみながら学べる環境を提供しています。テストを通じて、自分自身についての新たな発見を楽しく経験できます。
                </p>
              </div>
              
              <div>
                <div className="flex items-start mb-3">
                  <div className="p-2 bg-brand-50 rounded-lg mr-3">
                    <Shield className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">科学的アプローチ</h3>
                </div>
                <p className="text-gray-600">
                  すべてのテストは心理学の原則に基づいてデザインされており、楽しさと科学的根拠のバランスを大切にしています。エンターテイメント価値と教育的価値の両方を提供します。
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-center gradient-text mb-8">
              テストカテゴリ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">心理テスト</h3>
                <p className="text-gray-600">
                  あなたの性格や心理状態を深く理解し、新しい一面を発見しましょう。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">星座テスト</h3>
                <p className="text-gray-600">
                  あなたの星座が教える運勢や性格、今日のラッキーカラーをチェック！
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">恋愛テスト</h3>
                <p className="text-gray-600">
                  あなたの恋愛スタイルや理想の相手、恋愛運を診断していきましょう。
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-center gradient-text mb-8">
              チームメンバー
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  YT
                </div>
                <h3 className="font-bold text-gray-800 mb-1">山田 拓也</h3>
                <p className="text-brand-600 mb-2">創業者 & 心理学者</p>
                <p className="text-gray-600">
                  心理学博士。10年以上の研究経験を持ち、人間の行動と心理のパターンを分析する専門家です。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  KS
                </div>
                <h3 className="font-bold text-gray-800 mb-1">佐藤 恵子</h3>
                <p className="text-brand-600 mb-2">クリエイティブディレクター</p>
                <p className="text-gray-600">
                  ユーザー体験とデザインの専門家。ユーザーが楽しく学べるインタラクティブなコンテンツを制作します。
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="card">
            <h2 className="text-2xl font-bold text-center gradient-text mb-8">
              ソーシャルメディア
            </h2>
            
            <p className="text-center text-gray-600 mb-6">
              最新のテストや心理学のトレンドについての情報は、ソーシャルメディアでチェックしてください。
            </p>
            
            <SocialBanner />
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              さあ、あなたも始めてみませんか？
            </h3>
            <p className="text-gray-600 mb-6">
              無料でアカウント作成して、今すぐテストを体験しましょう。
            </p>
            <Link href="/" className="btn-primary">
              テストを始める
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}