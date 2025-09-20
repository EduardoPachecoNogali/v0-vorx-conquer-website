import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Users, Heart, LogIn } from "lucide-react"
import Link from "next/link"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground rpg-text-shadow mb-4">
            BEM-VINDO AO VANILLA CONQUER
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O melhor servidor privado totalmente personalizado do mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Download Card */}
          <Card className="medieval-frame bg-card text-card-foreground hover:rpg-glow transition-all duration-300">
            <CardHeader className="text-center">
              <Download className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl font-bold">DOWNLOAD</CardTitle>
              <CardDescription>Baixe o cliente do jogo</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/download">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Baixar Agora</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Register Card */}
          <Card
            id="cadastro"
            className="medieval-frame bg-card text-card-foreground hover:rpg-glow transition-all duration-300"
          >
            <CardHeader className="text-center">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <CardTitle className="text-xl font-bold">CADASTRO</CardTitle>
              <CardDescription>Crie sua conta gratuitamente</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/cadastro">
                <Button
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  Registrar-se
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Donations Card */}
          <Card
            id="doacoes"
            className="medieval-frame bg-card text-card-foreground hover:rpg-glow transition-all duration-300"
          >
            <CardHeader className="text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl font-bold">DOAÇÕES</CardTitle>
              <CardDescription>Apoie o servidor</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/doacoes">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Doar
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Login Card */}
          <Card className="medieval-frame bg-card text-card-foreground hover:rpg-glow transition-all duration-300">
            <CardHeader className="text-center">
              <LogIn className="w-12 h-12 text-secondary mx-auto mb-4" />
              <CardTitle className="text-xl font-bold">ZONA DE LOGIN</CardTitle>
              <CardDescription>Acesse sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/entrar">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">Entrar</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Server Status */}
        <div className="mt-16 text-center">
          <div className="medieval-frame p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Status do Servidor</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-secondary">40</div>
                <div className="text-muted-foreground">Jogadores Online</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
