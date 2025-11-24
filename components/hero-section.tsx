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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/students-working-on-computer-maintenance-hardware-.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-900/60" />
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-slate-900/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

      {/* Decoración */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-100 border border-blue-400/30 rounded-full text-sm font-medium mb-6">
          <Shield className="w-4 h-4" />
          Manual de Mantenimiento Preventivo
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
          U.E.N. "25 de Marzo"
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow">
          Se encuentra ubicada en San Mateo – Estado Aragua, en la calle Roscio S/N, Sector 23 de Enero. La Escuela es en homenaje a la II Batalla de San Mateo realizada en este pueblo el 25 de Marzo de 1814, cuando inmoló su vida el Neogranadino Antonio Ricaurte, al volar el fortín donde se encontraba antes de que fuera tomado por los realistas, comandados por José Tomás Boves.
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
            className="px-8 py-6 text-lg rounded-xl border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
          >
            Conocer más
          </Button>
        </div>

        {/* Indicador de scroll */}
        <button
          onClick={handleScroll}
          className="animate-bounce inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-lg text-white hover:bg-white/30 transition-colors border border-white/20"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
