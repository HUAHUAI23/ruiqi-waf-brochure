"use client"

import { Printer } from "lucide-react"

interface PrintButtonProps {
  label: string;
}

export default function PrintButton({ label }: PrintButtonProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="fixed top-4 right-4 z-50 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 print:hidden shadow-lg hover:bg-primary-dark transition-colors duration-300"
    >
      <Printer size={18} />
      <span>{label}</span>
    </button>
  )
}
