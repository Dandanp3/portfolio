"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "zoom-in")
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
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 text-center">
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Estou sempre aberto a novos projetos e oportunidades. Vamos conversar sobre como posso ajudar você!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="animate-glow" asChild>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=daniel.pyoliverp@gmail.com&su=Contato%20Profissional&body=Olá%20Daniel!">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/dandanp3" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
