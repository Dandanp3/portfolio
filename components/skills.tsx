"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiUnity,
} from "react-icons/si"
import { Gamepad2 } from "lucide-react"

// Array de habilidades - facilmente editável
const skills = [
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express", icon: SiExpress, color: "text-foreground" },
  { name: "Luau + Roblox Studio", icon: Gamepad2, color: "text-primary" },
  { name: "Unity", icon: SiUnity, color: "text-foreground" },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in", "fade-in", "zoom-in")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Tecnologias & <span className="text-primary">Habilidades</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={index}
                className="skill-card p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex flex-col items-center gap-4">
                  <Icon className={`h-12 w-12 ${skill.color}`} />
                  <span className="text-center font-medium">{skill.name}</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
