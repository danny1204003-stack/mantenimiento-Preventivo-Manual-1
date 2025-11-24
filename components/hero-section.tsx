"use client"

import { Shield, Wrench, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleScroll = () => {
    const element = document.querySelector("#hardware")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />

      {/* Decoración */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          <Shield className="w-4 h-4" />
          Manual de Mantenimiento Preventivo
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight text-balance">
          Centro de Tecnología e Innovación
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          Somos una institución comprometida con la excelencia tecnológica, proporcionando recursos y guías
          especializadas para garantizar el óptimo funcionamiento de todos nuestros equipos informáticos y sistemas de
          software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30"
            onClick={handleScroll}
          >
            <Wrench className="w-5 h-5 mr-2" />
            Ver Manual
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
          >
            Conocer más
          </Button>
        </div>

        {/* Indicador de scroll */}
        <button
          onClick={handleScroll}
          className="animate-bounce inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
