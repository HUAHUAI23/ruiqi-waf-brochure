"use client"

import { Printer } from "lucide-react"

export default function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="fixed top-4 right-4 z-50 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 print:hidden shadow-lg hover:bg-primary-dark transition-colors duration-300"
    >
      <Printer size={18} />
      <span>打印宣传手册</span>
    </button>
  )
}
