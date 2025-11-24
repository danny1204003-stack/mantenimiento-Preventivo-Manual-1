"use client"

import { useState, useMemo } from "react"
import { Search, ChevronDown, ChevronUp, X, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface GlossaryTerm {
  id: string
  name: string
  description: string
  fullDescription: string // Añadido campo para descripción completa
  image: string
  category: "hardware" | "software" | "general"
}

const glossaryTerms: GlossaryTerm[] = [
  {
    id: "antivirus",
    name: "Antivirus",
    description:
      "Software diseñado para detectar, prevenir y eliminar programas maliciosos (malware) como virus, troyanos, spyware y ransomware.",
    fullDescription:
      "Software diseñado para detectar, prevenir y eliminar programas maliciosos (malware) como virus, troyanos, spyware y ransomware. Es esencial mantenerlo actualizado para proteger el sistema.\n\n**Funciones principales:**\n• Escaneo en tiempo real de archivos y programas\n• Detección de amenazas mediante firmas y heurística\n• Cuarentena y eliminación de archivos infectados\n• Protección contra phishing y sitios web maliciosos\n\n**Mantenimiento recomendado:**\n• Actualizar la base de datos de virus diariamente\n• Realizar escaneos completos semanalmente\n• Configurar escaneos programados automáticos\n• Mantener el software actualizado a la última versión",
    image: "/antivirus-shield-security-icon.jpg",
    category: "software",
  },
  {
    id: "bios",
    name: "BIOS",
    description:
      "Sistema Básico de Entrada/Salida. Es el firmware que inicializa el hardware durante el arranque del equipo.",
    fullDescription:
      "Sistema Básico de Entrada/Salida (Basic Input/Output System). Es el firmware que inicializa el hardware durante el arranque del equipo y proporciona servicios de tiempo de ejecución para sistemas operativos y programas.\n\n**Funciones principales:**\n• Inicialización y prueba del hardware (POST)\n• Carga del sistema operativo desde el dispositivo de arranque\n• Configuración de parámetros del sistema\n• Gestión de la secuencia de arranque\n\n**Mantenimiento recomendado:**\n• Actualizar el BIOS solo cuando sea necesario\n• Realizar backup de configuración antes de cambios\n• Verificar compatibilidad antes de actualizar\n• Nunca interrumpir una actualización de BIOS",
    image: "/bios-chip-motherboard-icon.jpg",
    category: "hardware",
  },
  {
    id: "cache",
    name: "Caché",
    description:
      "Memoria de acceso rápido que almacena datos temporales para acelerar procesos y mejorar el rendimiento.",
    fullDescription:
      "Memoria de acceso rápido que almacena datos temporales para acelerar procesos. Limpiar la caché regularmente puede mejorar el rendimiento del sistema y liberar espacio.\n\n**Tipos de caché:**\n• Caché del navegador: almacena páginas web y recursos\n• Caché del sistema: acelera operaciones del SO\n• Caché de aplicaciones: datos temporales de programas\n• Caché del procesador: memoria ultrarrápida en la CPU\n\n**Mantenimiento recomendado:**\n• Limpiar caché del navegador mensualmente\n• Usar herramientas de limpieza de disco\n• Eliminar archivos temporales regularmente\n• Monitorear el espacio ocupado por caché",
    image: "/cache-memory-speed-icon.jpg",
    category: "general",
  },
  {
    id: "desfragmentacion",
    name: "Desfragmentación",
    description:
      "Proceso de reorganizar los archivos fragmentados en un disco duro para que ocupen espacios contiguos.",
    fullDescription:
      "Proceso de reorganizar los archivos fragmentados en un disco duro para que ocupen espacios contiguos, mejorando la velocidad de lectura. No aplica para discos SSD.\n\n**¿Cuándo desfragmentar?**\n• Cuando el disco tiene más del 10% de fragmentación\n• Si notas lentitud al abrir archivos grandes\n• Después de eliminar muchos archivos\n• Como parte del mantenimiento mensual\n\n**Importante:**\n• Solo para discos HDD tradicionales\n• NUNCA desfragmentar discos SSD\n• Cerrar programas antes de desfragmentar\n• El proceso puede tomar varias horas",
    image: "/disk-defragmentation-organize-icon.jpg",
    category: "software",
  },
  {
    id: "driver",
    name: "Driver (Controlador)",
    description: "Software que permite al sistema operativo comunicarse con un dispositivo de hardware específico.",
    fullDescription:
      "Software que permite al sistema operativo comunicarse con un dispositivo de hardware específico. Mantener los drivers actualizados asegura el correcto funcionamiento del equipo.\n\n**Tipos de drivers:**\n• Drivers de video (GPU)\n• Drivers de audio\n• Drivers de red (Ethernet/WiFi)\n• Drivers de periféricos (impresoras, etc.)\n\n**Mantenimiento recomendado:**\n• Actualizar drivers desde el sitio oficial del fabricante\n• Crear punto de restauración antes de actualizar\n• Usar Windows Update para drivers básicos\n• Desinstalar drivers antiguos antes de instalar nuevos",
    image: "/driver-software-gear-icon.jpg",
    category: "software",
  },
  {
    id: "disipador",
    name: "Disipador de Calor",
    description:
      "Componente metálico diseñado para absorber y disipar el calor generado por el procesador u otros componentes.",
    fullDescription:
      "Componente metálico diseñado para absorber y disipar el calor generado por el procesador u otros componentes. Requiere limpieza periódica y renovación de pasta térmica.\n\n**Componentes:**\n• Base de contacto (cobre o aluminio)\n• Aletas de disipación\n• Heat pipes (tubos de calor)\n• Ventilador(es) de refrigeración\n\n**Mantenimiento recomendado:**\n• Limpiar polvo cada 3-6 meses\n• Renovar pasta térmica cada 2-3 años\n• Verificar que el ventilador gire correctamente\n• Monitorear temperaturas del CPU regularmente",
    image: "/heat-sink-cooling-fan-icon.jpg",
    category: "hardware",
  },
  {
    id: "firewall",
    name: "Firewall",
    description: "Sistema de seguridad que monitorea y controla el tráfico de red entrante y saliente.",
    fullDescription:
      "Sistema de seguridad que monitorea y controla el tráfico de red entrante y saliente basándose en reglas de seguridad predeterminadas. Puede ser hardware o software.\n\n**Tipos de firewall:**\n• Firewall de software (Windows Defender)\n• Firewall de hardware (router)\n• Firewall de próxima generación (NGFW)\n• Firewall de aplicaciones web (WAF)\n\n**Configuración recomendada:**\n• Mantener el firewall siempre activado\n• Configurar reglas para aplicaciones conocidas\n• Bloquear conexiones entrantes no solicitadas\n• Revisar logs de actividad periódicamente",
    image: "/firewall-security-wall-icon.jpg",
    category: "software",
  },
  {
    id: "fuente-poder",
    name: "Fuente de Poder (PSU)",
    description:
      "Componente que convierte la corriente alterna (AC) en corriente directa (DC) para alimentar los componentes.",
    fullDescription:
      "Componente que convierte la corriente alterna (AC) en corriente directa (DC) para alimentar los componentes del computador. Requiere limpieza del ventilador y verificación de conexiones.\n\n**Especificaciones importantes:**\n• Potencia (Watts) según componentes\n• Certificación de eficiencia (80 Plus)\n• Conectores disponibles\n• Modularidad (cables removibles)\n\n**Mantenimiento recomendado:**\n• Limpiar ventilador y rejillas cada 6 meses\n• Verificar cables y conexiones\n• Usar regulador de voltaje o UPS\n• Reemplazar si tiene más de 5-7 años",
    image: "/power-supply-unit-psu-icon.jpg",
    category: "hardware",
  },
  {
    id: "hdd",
    name: "HDD (Disco Duro)",
    description:
      "Dispositivo de almacenamiento magnético que guarda datos de forma permanente mediante platos giratorios.",
    fullDescription:
      "Dispositivo de almacenamiento magnético que guarda datos de forma permanente. Requiere desfragmentación periódica y monitoreo de salud mediante herramientas SMART.\n\n**Componentes internos:**\n• Platos magnéticos giratorios\n• Cabezales de lectura/escritura\n• Motor de giro\n• Controladora electrónica\n\n**Mantenimiento recomendado:**\n• Desfragmentar mensualmente\n• Monitorear estado SMART\n• Mantener al menos 15% de espacio libre\n• Realizar backups regulares\n• Evitar golpes y vibraciones",
    image: "/hard-disk-drive-hdd-icon.jpg",
    category: "hardware",
  },
  {
    id: "malware",
    name: "Malware",
    description: "Término general para software malicioso que incluye virus, gusanos, troyanos, ransomware y spyware.",
    fullDescription:
      "Término general para software malicioso que incluye virus, gusanos, troyanos, ransomware y spyware. La prevención incluye antivirus actualizado y buenas prácticas de navegación.\n\n**Tipos de malware:**\n• Virus: se adjunta a archivos legítimos\n• Gusanos: se propaga automáticamente por red\n• Troyanos: se disfraza de software legítimo\n• Ransomware: cifra archivos y pide rescate\n• Spyware: roba información personal\n\n**Prevención:**\n• Mantener antivirus actualizado\n• No abrir archivos adjuntos sospechosos\n• Descargar software solo de fuentes oficiales\n• Mantener el sistema operativo actualizado",
    image: "/malware-virus-bug-icon.jpg",
    category: "software",
  },
  {
    id: "memoria-ram",
    name: "Memoria RAM",
    description: "Memoria de acceso aleatorio que almacena datos temporalmente mientras el equipo está encendido.",
    fullDescription:
      "Memoria de acceso aleatorio que almacena datos temporalmente mientras el equipo está encendido. El mantenimiento incluye limpieza de contactos y verificación de módulos.\n\n**Especificaciones:**\n• Capacidad (GB)\n• Velocidad (MHz)\n• Tipo (DDR4, DDR5)\n• Latencia (CL)\n\n**Mantenimiento recomendado:**\n• Limpiar contactos dorados con goma de borrar\n• Verificar que estén bien insertados\n• Usar slots correctos para dual channel\n• Ejecutar diagnósticos de memoria\n• Monitorear uso en el administrador de tareas",
    image: "/ram-memory-module-icon.jpg",
    category: "hardware",
  },
  {
    id: "pasta-termica",
    name: "Pasta Térmica",
    description:
      "Compuesto conductor de calor aplicado entre el procesador y el disipador para mejorar la transferencia térmica.",
    fullDescription:
      "Compuesto conductor de calor aplicado entre el procesador y el disipador para mejorar la transferencia térmica. Debe reemplazarse cada 2-3 años o cuando las temperaturas aumenten.\n\n**Tipos de pasta térmica:**\n• Basada en silicona (económica)\n• Basada en metal (mejor conductividad)\n• Basada en cerámica (no conductora eléctrica)\n• Metal líquido (máximo rendimiento)\n\n**Aplicación correcta:**\n• Limpiar residuos anteriores con alcohol isopropílico\n• Aplicar cantidad del tamaño de un grano de arroz\n• No esparcir manualmente\n• Presionar disipador uniformemente\n• Verificar temperaturas después de aplicar",
    image: "/thermal-paste-tube-icon.jpg",
    category: "hardware",
  },
  {
    id: "procesador",
    name: "Procesador (CPU)",
    description: "Unidad Central de Procesamiento, el cerebro del computador que ejecuta instrucciones y cálculos.",
    fullDescription:
      "Unidad Central de Procesamiento, el cerebro del computador. El mantenimiento incluye limpieza del disipador, renovación de pasta térmica y monitoreo de temperaturas.\n\n**Especificaciones importantes:**\n• Número de núcleos y hilos\n• Velocidad de reloj (GHz)\n• Caché (L1, L2, L3)\n• TDP (consumo térmico)\n\n**Mantenimiento recomendado:**\n• Mantener temperaturas bajo 80°C\n• Limpiar disipador regularmente\n• Renovar pasta térmica cada 2-3 años\n• No realizar overclocking sin refrigeración adecuada\n• Monitorear con software como HWMonitor",
    image: "/cpu-processor-chip-icon.jpg",
    category: "hardware",
  },
  {
    id: "registro-windows",
    name: "Registro de Windows",
    description: "Base de datos que almacena configuraciones del sistema operativo y aplicaciones instaladas.",
    fullDescription:
      "Base de datos que almacena configuraciones del sistema operativo y aplicaciones. La limpieza del registro puede mejorar el rendimiento, pero debe hacerse con precaución.\n\n**Estructura del registro:**\n• HKEY_CLASSES_ROOT: tipos de archivo\n• HKEY_CURRENT_USER: configuración del usuario\n• HKEY_LOCAL_MACHINE: configuración del sistema\n• HKEY_USERS: todos los usuarios\n• HKEY_CURRENT_CONFIG: perfil de hardware\n\n**Precauciones:**\n• Crear punto de restauración antes de editar\n• Exportar claves antes de modificar\n• Usar herramientas confiables para limpieza\n• No eliminar entradas desconocidas manualmente",
    image: "/windows-registry-database-icon.jpg",
    category: "software",
  },
  {
    id: "ssd",
    name: "SSD (Disco de Estado Sólido)",
    description:
      "Dispositivo de almacenamiento que usa memoria flash, más rápido y resistente que los discos duros tradicionales.",
    fullDescription:
      "Dispositivo de almacenamiento que usa memoria flash. No requiere desfragmentación. El mantenimiento incluye habilitar TRIM y evitar llenarlo más del 80% de su capacidad.\n\n**Ventajas sobre HDD:**\n• Velocidad de lectura/escritura muy superior\n• Sin partes móviles (más resistente)\n• Menor consumo energético\n• Operación silenciosa\n\n**Mantenimiento recomendado:**\n• Verificar que TRIM esté habilitado\n• No desfragmentar (daña el SSD)\n• Mantener al menos 20% de espacio libre\n• Actualizar firmware del fabricante\n• Evitar escrituras excesivas innecesarias",
    image: "/ssd-solid-state-drive-icon.jpg",
    category: "hardware",
  },
  {
    id: "tarjeta-madre",
    name: "Tarjeta Madre (Motherboard)",
    description: "Placa principal que conecta todos los componentes del computador y permite su comunicación.",
    fullDescription:
      "Placa principal que conecta todos los componentes del computador. El mantenimiento incluye limpieza de polvo, verificación de condensadores y actualización de BIOS.\n\n**Componentes principales:**\n• Socket del procesador\n• Slots de RAM\n• Chipset (puente norte/sur)\n• Slots de expansión (PCIe)\n• Conectores SATA y M.2\n• Puertos I/O traseros\n\n**Mantenimiento recomendado:**\n• Limpiar polvo con aire comprimido\n• Inspeccionar condensadores (no deben estar inflados)\n• Verificar que no haya corrosión\n• Actualizar BIOS si hay mejoras importantes\n• Verificar que tornillos de montaje estén ajustados",
    image: "/motherboard-circuit-board-icon.jpg",
    category: "hardware",
  },
  {
    id: "actualizaciones",
    name: "Actualizaciones del Sistema",
    description: "Parches y mejoras distribuidas por el fabricante del sistema operativo para seguridad y rendimiento.",
    fullDescription:
      "Parches y mejoras distribuidas por el fabricante del sistema operativo. Incluyen correcciones de seguridad, nuevas funciones y mejoras de rendimiento. Deben instalarse regularmente.\n\n**Tipos de actualizaciones:**\n• Actualizaciones de seguridad (críticas)\n• Actualizaciones de características\n• Actualizaciones de calidad\n• Actualizaciones de drivers\n\n**Mejores prácticas:**\n• Configurar actualizaciones automáticas\n• Reiniciar cuando se solicite\n• Crear punto de restauración antes de actualizaciones grandes\n• Verificar compatibilidad de software después de actualizar\n• No postponer actualizaciones de seguridad",
    image: "/system-update-download-icon.jpg",
    category: "software",
  },
  {
    id: "ventilador",
    name: "Ventilador (Fan)",
    description: "Componente de refrigeración que mueve aire para disipar el calor de los componentes internos.",
    fullDescription:
      "Componente de refrigeración que mueve aire para disipar el calor de los componentes. Requiere limpieza periódica para evitar acumulación de polvo y ruido excesivo.\n\n**Tipos de ventiladores:**\n• Ventilador de CPU\n• Ventiladores de carcasa (intake/exhaust)\n• Ventilador de GPU\n• Ventilador de fuente de poder\n\n**Mantenimiento recomendado:**\n• Limpiar aspas con aire comprimido cada 3 meses\n• Verificar que giren libremente\n• Reemplazar si hacen ruido excesivo\n• Configurar curvas de velocidad en BIOS\n• Mantener flujo de aire positivo en el case",
    image: "/computer-cooling-fan-icon.jpg",
    category: "hardware",
  },
]

export function GlossarySection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAll, setShowAll] = useState(false)
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set()) // Nuevo estado para términos expandidos

  const sortedTerms = useMemo(() => {
    return [...glossaryTerms].sort((a, b) => a.name.localeCompare(b.name, "es"))
  }, [])

  const filteredTerms = useMemo(() => {
    if (!searchTerm.trim()) return []
    const search = searchTerm.toLowerCase().trim()
    return sortedTerms.filter(
      (term) => term.name.toLowerCase().includes(search) || term.description.toLowerCase().includes(search),
    )
  }, [searchTerm, sortedTerms])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hardware":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "software":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "hardware":
        return "Hardware"
      case "software":
        return "Software"
      default:
        return "General"
    }
  }

  const toggleExpand = (termId: string) => {
    setExpandedTerms((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(termId)) {
        newSet.delete(termId)
      } else {
        newSet.add(termId)
      }
      return newSet
    })
  }

  const TermCard = ({ term, compact = false }: { term: GlossaryTerm; compact?: boolean }) => {
    const isExpanded = expandedTerms.has(term.id)

    return (
      <Card
        className={`transition-all duration-300 border-slate-200 ${
          isExpanded ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
        }`}
      >
        <CardContent className={compact && !isExpanded ? "p-4" : "p-5"}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src={term.image || "/placeholder.svg"}
                alt={term.name}
                className={`rounded-lg object-cover bg-slate-100 transition-all duration-300 ${
                  isExpanded ? "w-24 h-24" : "w-16 h-16"
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-semibold text-slate-800">{term.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${getCategoryColor(term.category)}`}>
                  {getCategoryLabel(term.category)}
                </span>
              </div>

              {/* Descripción corta o completa según estado */}
              {isExpanded ? (
                <div className="text-sm text-slate-600 mt-3 space-y-2">
                  {term.fullDescription.split("\n\n").map((paragraph, idx) => (
                    <div key={idx}>
                      {paragraph.startsWith("**") ? (
                        <p className="font-semibold text-slate-700 mt-3">{paragraph.replace(/\*\*/g, "")}</p>
                      ) : paragraph.startsWith("•") ? (
                        <p className="pl-2">{paragraph}</p>
                      ) : (
                        <p>{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className={`text-sm text-slate-600 ${compact ? "line-clamp-2" : ""}`}>{term.description}</p>
              )}

              {/* Botón Ver más / Ver menos */}
              <button
                onClick={() => toggleExpand(term.id)}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Eye className="w-4 h-4" />
                {isExpanded ? "Ver menos" : "Ver más"}
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section id="glosario" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Glosario de Términos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Busca y aprende sobre los términos básicos de mantenimiento de computadoras
          </p>
        </div>

        {/* Buscador y botón Ver Todo */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Escribe un término... (ej: RAM, antivirus, pasta térmica)"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setShowAll(false)
              }}
              className="pl-10 pr-10 h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setShowAll(!showAll)
              setSearchTerm("")
              setExpandedTerms(new Set()) // Limpiar expandidos al cambiar vista
            }}
            className={`h-12 px-5 gap-2 transition-all ${
              showAll
                ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                : "border-slate-300 hover:bg-slate-50"
            }`}
          >
            {showAll ? "Ocultar" : "Ver todo"}
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>

        {/* Resultados de búsqueda */}
        {searchTerm && !showAll && (
          <div className="space-y-4">
            {filteredTerms.length > 0 ? (
              <>
                <p className="text-sm text-slate-500 mb-4">
                  {filteredTerms.length} resultado{filteredTerms.length !== 1 ? "s" : ""} encontrado
                  {filteredTerms.length !== 1 ? "s" : ""}
                </p>
                <div className="grid gap-4">
                  {filteredTerms.map((term) => (
                    <TermCard key={term.id} term={term} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500">
                  No se encontraron términos para "<span className="font-medium">{searchTerm}</span>"
                </p>
                <p className="text-sm text-slate-400 mt-1">Intenta con otra palabra o usa "Ver todo" para explorar</p>
              </div>
            )}
          </div>
        )}

        {/* Vista de todos los términos */}
        {showAll && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-sm text-slate-500">Mostrando {sortedTerms.length} términos en orden alfabético</p>
              <div className="flex gap-2 text-xs">
                <span className={`px-2 py-1 rounded-full border ${getCategoryColor("hardware")}`}>Hardware</span>
                <span className={`px-2 py-1 rounded-full border ${getCategoryColor("software")}`}>Software</span>
                <span className={`px-2 py-1 rounded-full border ${getCategoryColor("general")}`}>General</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sortedTerms.map((term) => (
                <TermCard key={term.id} term={term} compact />
              ))}
            </div>
          </div>
        )}

        {/* Estado inicial - sin búsqueda ni ver todo */}
        {!searchTerm && !showAll && (
          <div className="text-center py-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-slate-200">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Explora el Glosario</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Escribe un término en el buscador para encontrar su definición, o haz clic en "Ver todo" para explorar
              todos los términos disponibles.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
