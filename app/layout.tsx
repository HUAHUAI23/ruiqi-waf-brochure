import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RuiQi WAF",
  description: "Enterprise Web Application Firewall",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
