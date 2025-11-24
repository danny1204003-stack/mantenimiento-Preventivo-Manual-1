import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Mail, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Br. Dannys Gerig",
    role: "Desarrollador",
    avatar: "/images/dannys.png",
    initials: "DG",
  },
  {
    name: "Br. Joswerd Olivo",
    role: "Desarrollador",
    avatar: "/images/joswer.png",
    initials: "JO",
  },
  {
    name: "Br. Johangel Avila",
    role: "Desarrollador",
    avatar: "/images/johangel.png",
    initials: "JA",
  },
]

export function TeamSection() {
  return (
    <section id="equipo" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Equipo de Desarrollo</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Equipo comprometidos con mantener la excelencia tecnológica de nuestra institución
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group bg-white border-slate-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback className="bg-blue-600 text-white text-xl font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3">{member.role}</p>
                <div className="text-sm text-slate-600 leading-relaxed mb-4 space-y-1">
                  <p className="font-medium">Estudiante del PNF en Informática</p>
                  <p>Universidad Politécnica Territorial del Estado Aragua "Federico Brito Figueroa"</p>
                  <p className="font-semibold text-blue-600">Trayecto 1</p>
                </div>
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
