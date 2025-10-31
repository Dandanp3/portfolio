"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom")
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
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Olá! Sou um desenvolvedor focado em back-end, apaixonado por tecnologia e inovação. Tenho experiência com diversas linguagens
            e frameworks, e gosto de criar soluções eficientes e escaláveis que dão vida às ideias através do código.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Minha jornada no desenvolvimento começou com Python, e desde então venho expandindo meu
            conhecimento para incluir tecnologias modernas como React, Node.js e muito mais. Também tenho uma leve experiência em
            desenvolvimento de jogos com Roblox Studio e Unity.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor. Vamos
            criar algo incrível juntos!
          </p>
        </Card>
      </div>
    </section>
  )
}
