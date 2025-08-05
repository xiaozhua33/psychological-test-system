/** @type {import('next').NextConfig} */
const nextConfig = {
  // 動的ルートをサポートするため静的エクスポートを無効化
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wbvdvxgdtnpuedqsyvyc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**'
      }
    ],
    unoptimized: true
  }
}

module.exports = nextConfig