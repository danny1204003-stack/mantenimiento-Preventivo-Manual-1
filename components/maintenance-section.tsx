"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Monitor,
  HardDrive,
  Cpu,
  Fan,
  Keyboard,
  Printer,
  Shield,
  RefreshCw,
  Trash2,
  Download,
  Settings,
  CheckCircle2,
} from "lucide-react"
import Image from "next/image"

const hardwareSteps = [
  {
    id: "limpieza-pc",
    title: "Limpieza General del PC",
    icon: Monitor,
    description: "Mantenga su equipo libre de polvo y suciedad",
    image: "/images/maintenance/limpieza-pc.jpg",
    steps: [
      "Apague completamente el equipo y desconéctelo de la corriente",
      "Use aire comprimido para limpiar las rejillas de ventilación",
      "Limpie la pantalla con un paño de microfibra y solución especial",
      "Desinfecte las superficies externas con alcohol isopropílico",
      "Verifique que no haya obstrucciones en los puertos",
    ],
    frequency: "Cada 2 semanas",
  },
  {
    id: "ventiladores",
    title: "Mantenimiento de Ventiladores",
    icon: Fan,
    description: "Asegure una correcta ventilación del sistema",
    image: "/images/maintenance/ventiladores.jpg",
    steps: [
      "Abra el gabinete con precaución (personal autorizado)",
      "Utilice aire comprimido para remover el polvo de los ventiladores",
      "Verifique que los ventiladores giren libremente",
      "Revise el estado de las aspas y reemplace si están dañadas",
      "Cierre el gabinete y verifique el funcionamiento",
    ],
    frequency: "Cada 3 meses",
  },
  {
    id: "perifericos",
    title: "Revisión de Periféricos",
    icon: Keyboard,
    description: "Mantenga teclados, mouse y otros dispositivos en buen estado",
    image: "/images/maintenance/perifericos.jpg",
    steps: [
      "Limpie el teclado con aire comprimido entre las teclas",
      "Desinfecte las teclas con un paño húmedo",
      "Limpie el sensor óptico del mouse",
      "Verifique el estado de los cables y conectores",
      "Pruebe todas las teclas y botones del mouse",
    ],
    frequency: "Semanal",
  },
  {
    id: "almacenamiento",
    title: "Revisión de Disco Duro",
    icon: HardDrive,
    description: "Monitoree la salud de sus unidades de almacenamiento",
    image: "/images/maintenance/disco-duro.jpg",
    steps: [
      "Ejecute diagnósticos de disco (SMART)",
      "Verifique el espacio disponible (mínimo 15% libre)",
      "Revise la temperatura del disco durante la operación",
      "Escuche ruidos anormales que indiquen fallas",
      "Documente cualquier anomalía detectada",
    ],
    frequency: "Mensual",
  },
  {
    id: "impresoras",
    title: "Mantenimiento de Impresoras",
    icon: Printer,
    description: "Asegure impresiones de calidad",
    image: "/images/maintenance/impresoras.jpg",
    steps: [
      "Limpie el exterior con un paño seco",
      "Revise y limpie los rodillos de alimentación",
      "Verifique los niveles de tinta o tóner",
      "Ejecute la limpieza de cabezales desde el software",
      "Imprima una página de prueba para verificar calidad",
    ],
    frequency: "Cada 2 semanas",
  },
]

const softwareSteps = [
  {
    id: "antivirus",
    title: "Verificación de Antivirus",
    icon: Shield,
    description: "Mantenga su sistema protegido contra amenazas",
    image: "/images/maintenance/antivirus.jpg",
    steps: [
      "Verifique que el antivirus esté activo y actualizado",
      "Ejecute un análisis completo del sistema",
      "Revise los registros de amenazas detectadas",
      "Configure análisis programados automáticos",
      "Actualice las definiciones de virus manualmente si es necesario",
    ],
    frequency: "Diario (análisis rápido) / Semanal (completo)",
  },
  {
    id: "actualizaciones",
    title: "Actualizaciones del Sistema",
    icon: RefreshCw,
    description: "Mantenga el sistema operativo y programas actualizados",
    image: "/images/maintenance/actualizaciones.jpg",
    steps: [
      "Acceda a Configuración > Actualización y seguridad",
      "Busque actualizaciones pendientes de Windows",
      "Descargue e instale las actualizaciones disponibles",
      "Reinicie el equipo si es requerido",
      "Verifique actualizaciones de software instalado",
    ],
    frequency: "Semanal",
  },
  {
    id: "archivos-temporales",
    title: "Limpieza de Archivos Temporales",
    icon: Trash2,
    description: "Libere espacio eliminando archivos innecesarios",
    image: "/images/maintenance/archivos-temporales.jpg",
    steps: [
      "Abra el Liberador de espacio en disco de Windows",
      "Seleccione los tipos de archivos a eliminar",
      "Limpie la carpeta de descargas (revisar antes)",
      "Vacíe la papelera de reciclaje",
      "Limpie la caché de navegadores web",
    ],
    frequency: "Semanal",
  },
  {
    id: "respaldos",
    title: "Respaldo de Información",
    icon: Download,
    description: "Proteja sus datos importantes con copias de seguridad",
    image: "/images/maintenance/respaldos.jpg",
    steps: [
      "Identifique archivos críticos para respaldar",
      "Copie los archivos a una unidad externa o nube",
      "Verifique que el respaldo sea accesible y legible",
      "Documente la fecha y contenido del respaldo",
      "Mantenga múltiples versiones de respaldo",
    ],
    frequency: "Diario (incremental) / Semanal (completo)",
  },
  {
    id: "optimizacion",
    title: "Optimización del Sistema",
    icon: Settings,
    description: "Mejore el rendimiento general del equipo",
    image: "/images/maintenance/optimizacion.jpg",
    steps: [
      "Revise los programas de inicio automático",
      "Desinstale software no utilizado",
      "Desfragmente el disco (solo HDD, no SSD)",
      "Ajuste los efectos visuales para mejor rendimiento",
      "Verifique el uso de memoria y cierre procesos innecesarios",
    ],
    frequency: "Mensual",
  },
]

function MaintenanceCard({
  item,
}: {
  item: (typeof hardwareSteps)[0]
}) {
  const Icon = item.icon
  return (
    <Card className="group hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 border-slate-200 hover:border-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg text-slate-800">{item.title}</CardTitle>
            <CardDescription className="mt-1">{item.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="steps" className="border-none">
            <AccordionTrigger className="text-sm text-blue-600 hover:text-blue-700 py-2 hover:no-underline">
              Ver pasos detallados
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 mt-2">
                {item.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                <p className="text-xs text-slate-500">
                  <span className="font-semibold">Frecuencia recomendada:</span> {item.frequency}
                </p>
              </div>
              <div className="mt-4 aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Imagen instructiva: ${item.title}`}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

export function MaintenanceSection() {
  const [activeTab, setActiveTab] = useState("hardware")

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Manual de Mantenimiento</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Guías detalladas para mantener sus equipos en óptimas condiciones
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-12 bg-slate-100 p-1 rounded-xl">
            <TabsTrigger
              value="hardware"
              id="hardware"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600 transition-all"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Hardware
            </TabsTrigger>
            <TabsTrigger
              value="software"
              id="software"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600 transition-all"
            >
              <Settings className="w-4 h-4 mr-2" />
              Software
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareSteps.map((item) => (
                <MaintenanceCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareSteps.map((item) => (
                <MaintenanceCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
