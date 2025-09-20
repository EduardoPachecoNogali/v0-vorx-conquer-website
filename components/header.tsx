"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Users, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative bg-background border-b border-border">
      {/* Top bar with online players and social */}
      <div className="bg-muted/20 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-secondary">
            <Users className="w-4 h-4" />
            <span>
              Junte-se a <strong className="text-secondary">40</strong> outros jogadores online agora.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-foreground">Siga-nos:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="p-1 h-auto hover:text-secondary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-1 h-auto hover:text-secondary">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="medieval-frame p-4">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-secondary rpg-text-shadow">VANILLA</h1>
                <h2 className="text-xl md:text-2xl font-bold text-primary rpg-text-shadow">CONQUER</h2>
                <div className="text-xs text-muted-foreground mt-1">征服</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              INÍCIO
            </Link>
            <Link href="/cadastro" className="text-foreground hover:text-primary transition-colors font-medium">
              CADASTRO
            </Link>
            <Link href="/download" className="text-foreground hover:text-primary transition-colors font-medium">
              DOWNLOAD
            </Link>
            <Link href="/doacoes" className="text-foreground hover:text-primary transition-colors font-medium">
              DOAÇÕES
            </Link>
            <Link href="/entrar">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-6 rpg-glow">
                ENTRAR
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                INÍCIO
              </Link>
              <Link
                href="/cadastro"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CADASTRO
              </Link>
              <Link
                href="/download"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                DOWNLOAD
              </Link>
              <Link
                href="/doacoes"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                DOAÇÕES
              </Link>
              <Link href="/entrar" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold w-full">
                  ENTRAR
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
