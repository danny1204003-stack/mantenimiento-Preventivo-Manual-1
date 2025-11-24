"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Mantenimiento", href: "#software" },
  { name: "Glosario", href: "#glosario" },
  { name: "Equipo", href: "#equipo" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-700/50"
          : "bg-slate-800/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Institución */}
          <div className="flex items-center gap-2">
            <img
              src="/images/insignia-25-de-marzo.png"
              alt="Logo UEN 25 de Marzo"
              className="w-12 h-12 rounded-lg object-contain bg-white"
            />
            <span className="hidden sm:block font-semibold text-white">U.E.N. "25 de Marzo"</span>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Logo Proyecto */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:block font-semibold text-white">UPTA "Federico Brito Figueroa"</span>
            <img
              src="/images/unnamed.png"
              alt="Logo UPTA Federico Brito Figueroa"
              className="w-12 h-12 rounded-lg object-contain bg-white"
            />
          </div>

          {/* Menú Móvil */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-slate-700/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-3 text-left text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
