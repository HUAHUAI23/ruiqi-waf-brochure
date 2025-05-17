import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { getDictionary, isValidLocale, defaultLocale } from "@/lib/i18n"

type Props = {
  params: { lang: string }
  children: React.ReactNode
}

// Separate function to get safe language
async function getSafeLanguage(langParam: string) {
  return isValidLocale(langParam) ? langParam : defaultLocale
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Await the params object directly before accessing its properties
  const { lang: paramLang } = await params
  const lang = isValidLocale(paramLang) ? paramLang : defaultLocale
  const dict = await getDictionary(lang)
  
  // Get metadata safely
  let title = 'RuiQi WAF'
  let description = ''
  
  if (dict.meta && typeof dict.meta === 'object') {
    const meta = dict.meta as Record<string, any>
    title = typeof meta.title === 'string' ? meta.title : title
    description = typeof meta.description === 'string' ? meta.description : description
  }
  
  return {
    title,
    description,
    generator: 'v0.dev'
  }
}

export default async function LangLayout({ children, params }: Props) {
  // Await the params object directly before accessing its properties
  const { lang: paramLang } = await params
  const lang = isValidLocale(paramLang) ? paramLang : defaultLocale
  
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 