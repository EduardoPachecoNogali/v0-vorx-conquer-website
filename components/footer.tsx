import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="medieval-frame p-4 inline-block mb-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-secondary rpg-text-shadow">VANILLA</h3>
                <h4 className="text-lg font-bold text-primary rpg-text-shadow">CONQUER</h4>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Embarque em uma jornada épica no melhor servidor privado de RPG medieval. Junte-se a milhares de jogadores
              em batalhas épicas e aventuras inesquecíveis.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-2 hover:text-secondary" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:text-secondary" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:text-secondary" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:text-secondary" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="text-lg font-bold text-foreground mb-4">Navegação</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/cadastro" className="text-muted-foreground hover:text-primary transition-colors">
                  Cadastro
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-muted-foreground hover:text-primary transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/doacoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Doações
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="text-lg font-bold text-foreground mb-4">Suporte</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/ajuda" className="text-muted-foreground hover:text-primary transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Vanilla Conquer. Todos os direitos reservados.
            <span className="text-secondary ml-2">Feito com ❤️ para a comunidade RPG</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
