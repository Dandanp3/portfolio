"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

// Array de experiências - facilmente editável
const experiences = [
  {
    title: "Dev Freelancer",
    company: "Foco em Bots",
    period: "2025 - Presente",
    description:
      "Desenvolvimento de bots para Discord em Python, indo de sistemas de diversão e RPG até automações complexas para servidores. Gosto de criar experiências interativas e inteligentes que tornam a comunidade mais dinâmica e organizada.",
  }
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".experience-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in", "fade-in", "slide-in-from-left")
              }, index * 200)
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
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Minha <span className="text-primary">Experiência</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="experience-card p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
