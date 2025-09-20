import { Button } from "@/components/ui/button"
import { Download, Sword, Shield, Crown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with fantasy warrior image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/medieval-fantasy-warrior-with-armor-in-dark-atmosp.jpg')`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground rpg-text-shadow mb-4">VIVA UMA</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-primary rpg-text-shadow mb-6">NOVA JORNADA</h2>
          <p className="text-xl md:text-2xl text-secondary font-medium rpg-text-shadow">Vanilla Conquer</p>
        </div>

        <div className="mb-12">
          <Link href="/download">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl font-bold px-12 py-6 rpg-glow"
            >
              <Download className="w-6 h-6 mr-2" />
              DOWNLOAD
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="medieval-frame p-6 text-center">
            <Sword className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Combate Épico</h3>
            <p className="text-muted-foreground">Batalhas intensas em um mundo medieval fantástico</p>
          </div>

          <div className="medieval-frame p-6 text-center">
            <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Guilds Poderosas</h3>
            <p className="text-muted-foreground">Una-se a outros jogadores e conquiste territórios</p>
          </div>

          <div className="medieval-frame p-6 text-center">
            <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Reino Infinito</h3>
            <p className="text-muted-foreground">Explore um mundo vasto cheio de aventuras</p>
          </div>
        </div>
      </div>
    </section>
  )
}
