import { Monitor, Settings, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <span className="font-semibold">Institución</span>
            </div>
            <span className="text-slate-500">|</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                <Settings className="w-5 h-5" />
              </div>
              <span className="font-semibold">Departamento TI</span>
            </div>
          </div>

          <p className="text-sm text-slate-400 flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-500" /> por el Equipo de Desarrollo
          </p>

          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
