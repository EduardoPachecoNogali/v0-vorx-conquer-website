"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Crown, Shield, Sword, Star, Gift, CreditCard, Smartphone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function DonationsPage() {
  const [customAmount, setCustomAmount] = useState("")
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

  const donationTiers = [
    {
      id: "bronze",
      name: "Guerreiro Bronze",
      amount: 10,
      icon: Shield,
      color: "text-orange-600",
      benefits: ["Título especial no jogo", "Acesso ao chat VIP", "Suporte prioritário"],
    },
    {
      id: "silver",
      name: "Guerreiro Prata",
      amount: 25,
      icon: Sword,
      color: "text-gray-400",
      popular: true,
      benefits: ["Todos os benefícios Bronze", "Mount exclusivo", "10% XP bonus por 30 dias", "Acesso a áreas VIP"],
    },
    {
      id: "gold",
      name: "Guerreiro Ouro",
      amount: 50,
      icon: Crown,
      color: "text-yellow-500",
      benefits: [
        "Todos os benefícios Prata",
        "Skin exclusiva de personagem",
        "20% XP bonus por 60 dias",
        "Acesso beta a novos conteúdos",
      ],
    },
    {
      id: "diamond",
      name: "Lenda Diamante",
      amount: 100,
      icon: Star,
      color: "text-blue-400",
      benefits: [
        "Todos os benefícios Ouro",
        "Título de Lenda",
        "Pet exclusivo",
        "30% XP bonus permanente",
        "Participação no desenvolvimento",
      ],
    },
  ]

  const handleDonation = (tierId: string, amount: number) => {
    console.log("[v0] Donation selected:", { tierId, amount })
    setSelectedTier(tierId)
    // Handle donation logic here
  }

  const handleCustomDonation = () => {
    const amount = Number.parseFloat(customAmount)
    if (amount > 0) {
      console.log("[v0] Custom donation:", amount)
      // Handle custom donation logic here
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground rpg-text-shadow">Apoie Vanilla Conquer</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sua contribuição nos ajuda a manter os servidores funcionando, desenvolver novos conteúdos e proporcionar a
            melhor experiência de jogo para toda a comunidade.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2 rpg-glow">
            100% dos recursos vão para o desenvolvimento do jogo
          </Badge>
        </div>

        {/* Donation Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationTiers.map((tier) => {
            const IconComponent = tier.icon
            return (
              <Card
                key={tier.id}
                className={`medieval-card bg-card/90 backdrop-blur-sm border-border relative cursor-pointer transition-all hover:scale-105 ${
                  tier.popular ? "ring-2 ring-secondary" : ""
                } ${selectedTier === tier.id ? "ring-2 ring-primary" : ""}`}
                onClick={() => handleDonation(tier.id, tier.amount)}
              >
                {tier.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <CardTitle className="text-primary">{tier.name}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-secondary">${tier.amount}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rpg-glow"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDonation(tier.id, tier.amount)
                    }}
                  >
                    Doar ${tier.amount}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Custom Donation */}
        <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border mb-12 max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-primary">
              <Heart className="w-5 h-5" />
              Valor Personalizado
            </CardTitle>
            <CardDescription>Escolha o valor que deseja contribuir</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customAmount" className="text-foreground font-medium">
                Valor (USD)
              </Label>
              <Input
                id="customAmount"
                type="number"
                placeholder="0.00"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="bg-background/50 border-border focus:border-primary"
                min="1"
                step="0.01"
              />
            </div>
            <Button
              onClick={handleCustomDonation}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rpg-glow"
              disabled={!customAmount || Number.parseFloat(customAmount) <= 0}
            >
              <Heart className="w-4 h-4 mr-2" />
              Doar Valor Personalizado
            </Button>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Métodos de Pagamento</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" />
                <span className="font-medium">Cartão de Crédito</span>
              </div>
            </Card>
            <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border p-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary" />
                <span className="font-medium">PIX</span>
              </div>
            </Card>
            <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-medium">PayPal</span>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-center text-primary">Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como recebo meus benefícios?</h3>
              <p className="text-muted-foreground text-sm">
                Os benefícios são aplicados automaticamente à sua conta dentro de 24 horas após a confirmação do
                pagamento.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Posso cancelar minha doação?</h3>
              <p className="text-muted-foreground text-sm">
                As doações são únicas e não recorrentes. Entre em contato conosco se houver algum problema com sua
                transação.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Os benefícios são permanentes?</h3>
              <p className="text-muted-foreground text-sm">
                Alguns benefícios são temporários (como bônus de XP), enquanto outros são permanentes (como títulos e
                pets). Verifique a descrição de cada tier para mais detalhes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Posso doar anonimamente?</h3>
              <p className="text-muted-foreground text-sm">
                Sim, você pode escolher fazer uma doação anônima durante o processo de pagamento.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
