"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            <span className="text-primary text-lg font-mono">{"<Olá, mundo! />"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100 text-balance">
            Eu sou <span className="text-primary">Dandanp3</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200 text-balance">
            Desenvolvedor Backend apaixonado por criar experiências digitais incríveis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button size="lg" className="text-lg animate-glow" asChild>
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>

          <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <a href="#about" className="inline-block animate-bounce">
              <ArrowDown className="h-8 w-8 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
