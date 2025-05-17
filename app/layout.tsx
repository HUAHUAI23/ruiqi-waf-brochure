import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RuiQi WAF 企业级Web应用防火墙宣传手册",
  description: "利用HAProxy和Coraza提供的新一代WAF技术保护您的Web应用",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
