# ココロトリックスラボ - デプロイメントガイド

## 概要
このパッケージには、最新の視覚スタイル修正が含まれた「ココロトリックスラボ」Next.jsアプリケーションが含まれています。

## 修正内容（最新版）
- ✅ 結果ページのエラーハンドリング改善（"結果が取得できませんでした"フォールバック）
- ✅ 新しい5項目レイアウト実装：
  1. プロフィール画像エリア
  2. 結果カード
  3. LINEシェアボタン
  4. Xシェアボタン
  5. 「もう一度診断する」ボタン
- ✅ モバイルファーストデザイン
- ✅ ダイナミックシェアテキスト
- ✅ ポップアップブロッカー対応（window.location.href使用）

## 前回のデプロイ履歴
- 最新の安定版URL: https://q1636vqxe4lx.space.minimax.io
- 現在のデプロイURL: https://99lpgr1eqdvy.space.minimax.io

## デプロイメント手順

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
`.env.local` ファイルは既に含まれていますが、必要に応じて以下の設定を確認してください：
```
NEXT_PUBLIC_SUPABASE_URL=https://wbvdvxgdtnpuedqsyvyc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzI2OTc2NDgzLCJleHAiOjIwNDI1NTI0ODN9.Dx10LqwjcB1UB3tr6ZVJTKKnIX4S4itZED_jEFtUlFY
```

### 3. ビルド
```bash
npm run build
```

### 4. デプロイ方法

#### A. Vercel デプロイ
```bash
npm install -g vercel
vercel --prod
```

#### B. Netlify デプロイ
1. Netlifyにプロジェクトフォルダをアップロード
2. Build command: `npm run build`
3. Publish directory: `.next`

#### C. その他のホスティング
Node.js環境で以下を実行：
```bash
npm start
```

## 主要ファイル構造
```
├── src/app/result/[id]/page.tsx  # 修正済み結果ページ
├── src/components/               # UI コンポーネント
├── .env.local                   # Supabase設定
├── package.json                 # 依存関係
└── .next/                      # ビルド済みファイル
```

## 注意事項
- 結果ページ（/result/[id]）は動的ルートのため、サーバーサイドレンダリングが必要
- 静的エクスポート（next export）は動的ルートでは使用不可
- Supabaseの認証情報が環境変数に設定されている必要があります

## トラブルシューティング
1. ビルドエラーが発生した場合：
   - `rm -rf .next node_modules`
   - `npm install`
   - `npm run build`

2. 環境変数エラーが発生した場合：
   - `.env.local` ファイルが存在するか確認
   - Supabase の URL と API キーが正しいか確認

## サポート
デプロイメントに関する質問がありましたら、お気軽にお声がけください。
