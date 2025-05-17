"use client"

import { usePathname, useRouter } from "next/navigation"
import { locales, Locale } from "@/lib/i18n"
import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Function to get current locale from path
  const getCurrentLocale = (): Locale | null => {
    if (!pathName) return null
    const currentLocale = pathName.split('/')[1] as Locale
    return locales.includes(currentLocale) ? currentLocale : null
  }

  // Function to toggle to the next language
  const toggleLanguage = () => {
    if (!pathName) return
    
    const currentLocale = getCurrentLocale()
    // Get the next locale (toggle between zh and en)
    const nextLocale = currentLocale === 'zh' ? 'en' : 'zh'
    
    // Apply the new locale to the path
    if (currentLocale) {
      // Replace current locale with new one
      router.push(pathName.replace(`/${currentLocale}`, `/${nextLocale}`))
    } else {
      // Add locale prefix if none exists
      router.push(`/${nextLocale}${pathName}`)
    }
  }

  if (!isClient) return null

  // Get the current locale for the button label
  const currentLocale = getCurrentLocale()
  const buttonLabel = currentLocale === 'zh' ? 'EN' : 'ZH'

  return (
    <div className="fixed top-4 left-4 z-50 print:hidden">
      <button 
        onClick={toggleLanguage}
        className="bg-primary text-white px-3 py-2 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300 flex items-center gap-1"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{buttonLabel}</span>
      </button>
    </div>
  )
} 