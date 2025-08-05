'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Here we would normally send the form data to a server
      // For now we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('お問い合わせありがとうございます！')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast.error('送信に失敗しました。後でもう一度お試しください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600">
              ご質問やフィードバックがありましたら、お気軽にご連絡ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-800 mb-6">連絡先情報</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-brand-50 rounded-lg mr-3">
                      <Mail className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">メール</h4>
                      <p className="text-gray-600">info@kokorotricks-lab.jp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-brand-50 rounded-lg mr-3">
                      <Phone className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">電話</h4>
                      <p className="text-gray-600">03-1234-5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-brand-50 rounded-lg mr-3">
                      <MapPin className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">住所</h4>
                      <p className="text-gray-600">〒150-0002<br />東京都渋谷区渋谷1-1-1</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-brand-50 to-accent-50">
                <h3 className="text-xl font-bold text-gray-800 mb-4">営業時間</h3>
                <p className="text-gray-600 mb-2">平日: 9:00 - 18:00</p>
                <p className="text-gray-600">土日祝: お休み</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-800 mb-6">お問い合わせフォーム</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="山田 太郎"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      メッセージ
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all min-h-[150px]"
                      placeholder="お問い合わせ内容をご記入ください"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        送信中...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        送信する
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="card">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              よくある質問
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Q: 無制限プランの支払いは一度だけですか？
                </h4>
                <p className="text-gray-600">
                  A: はい、一度のお支払いで無制限プランをご利用いただけます。月額料金はかかりません。
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Q: テスト結果は保存されますか？
                </h4>
                <p className="text-gray-600">
                  A: はい、ログインしていればテスト結果は自動的に保存され、マイページからいつでも確認できます。
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Q: 新しいテストはいつ追加されますか？
                </h4>
                <p className="text-gray-600">
                  A: 定期的に新しいテストを追加しています。無制限プランのユーザーは新しいテストへ優先的にアクセスできます。
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Q: 退会するにはどうすればいいですか？
                </h4>
                <p className="text-gray-600">
                  A: マイページから退会手続きを行うことができます。ご不明な点があれば、お問い合わせフォームからご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}