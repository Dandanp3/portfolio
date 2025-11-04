"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

// Projetos 
const projects = [
  {
    title: "Digidex",
    description:
      "Uma interface web moderna inspirada nas clássicas Pokédex dos jogos Pokémon, adaptada para o universo dos Digimons. Este projeto foi desenvolvido para testar e consumir uma API de Digimons, resultando em uma mini Digidex funcional e visualmente atraente.",
    tags: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/Dandanp3/digipedia",
    demo: "#",
  },
  {
    title: "The Eco | Bot",
    description:
      "Bot de RPG desenvolvido em Python sob encomenda, oferecendo uma experiência completa de RPG no Discord. Permite criação e gerenciamento de fichas, cálculo de atributos e modificadores raciais, além de rolagens de dados avançadas considerando equipamentos e habilidades. Inclui um Market interno, com itens que impactam diretamente nos atributos e na defesa, e sistemas de XP, níveis, PE, vínculos e dinheiro, garantindo progressão contínua. Com comandos de ataques, perícias e habilidades, o bot proporciona uma jogabilidade estratégica e interativa, sendo modular e fácil de expandir para novas funcionalidades.",
    tags: ["Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "Jeff | Bot",
    description:
      "Jeff é um bot de Discord feito em Python, utilizando bibliotecas como discord.py e Pillow para gerar imagens e GIFs dinâmicos, com foco em diversão e progressão, trazendo mecânicas que mantêm a comunidade ativa e engajada, incluindo sistema de pesca para colecionar peixes raros, apostas e minigames para arriscar treliças em jogos divertidos, gacha de itens e pets para desbloquear recompensas únicas e álbum de figurinhas para colecionar e trocar figurinhas exclusivas.",
    tags: ["Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "Starhub",
    description:
      "Um site de cadastro de empresas e candidatos para postar e buscar vagas. Utilizei Python e Django, com um backend funcional que salva dados de usuários e empresas, além de vagas e currículos em um banco SQL, garantindo armazenamento seguro e organizado das informações.",
    tags: ["Django", "Python", "MySQL"],
    github: "https://github.com/Dandanp3/starhub",
    demo: "#",
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const totalProjects = projects.length

    // Normaliza a diferença para o caminho mais curto no carrossel circular
    let normalizedDiff = diff
    if (Math.abs(diff) > totalProjects / 2) {
      normalizedDiff = diff > 0 ? diff - totalProjects : diff + totalProjects
    }

    // Card do centro (maior)
    if (normalizedDiff === 0) {
      return {
        transform: "translateX(0%) scale(1)",
        opacity: 1,
        zIndex: 30,
      }
    }
    // Cards à direita
    else if (normalizedDiff === 1) {
      return {
        transform: "translateX(80%) scale(0.75)",
        opacity: 0.6,
        zIndex: 20,
      }
    }
    // Cards à esquerda
    else if (normalizedDiff === -1) {
      return {
        transform: "translateX(-80%) scale(0.75)",
        opacity: 0.6,
        zIndex: 20,
      }
    }
    // Cards mais distantes (escondidos)
    else {
      return {
        transform: `translateX(${normalizedDiff > 0 ? "200%" : "-200%"}) scale(0.5)`,
        opacity: 0,
        zIndex: 10,
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in")
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevProject()
      if (e.key === "ArrowRight") nextProject()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Meus <span className="text-primary">Projetos</span>
        </h2>

        <div className="relative h-[700px] md:h-[600px] flex items-center justify-center">
          {/* Botões de navegação */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="absolute left-0 md:left-4 z-40 bg-background/80 backdrop-blur hover:bg-primary/20"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="absolute right-0 md:right-4 z-40 bg-background/80 backdrop-blur hover:bg-primary/20"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Cards do carrossel */}
          <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
            {projects.map((project, index) => {
              const style = getCardStyle(index)
              return (
                <Card
                  key={index}
                  className="absolute w-full max-w-lg p-8 bg-card/90 backdrop-blur border-primary/20 transition-all duration-700 ease-out cursor-pointer hover:border-primary/50"
                  style={{
                    transform: style.transform,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                  }}
                  onClick={() => {
                    if (index !== currentIndex) {
                      setCurrentIndex(index)
                    }
                  }}
                >
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Indicadores de posição */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">Use as setas ou clique nos cards para navegar</p>
      </div>
    </section>
  )
}
