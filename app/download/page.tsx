"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Monitor, Smartphone, HardDrive, Cpu, MemoryStick, Shield, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function DownloadPage() {
  const systemRequirements = {
    minimum: {
      os: "Windows 7/8/10/11",
      processor: "Intel Core i3 2.0GHz ou AMD equivalente",
      memory: "4 GB RAM",
      graphics: "DirectX 9.0c compatível",
      storage: "2 GB espaço disponível",
      network: "Conexão de internet banda larga",
    },
    recommended: {
      os: "Windows 10/11",
      processor: "Intel Core i5 3.0GHz ou AMD equivalente",
      memory: "8 GB RAM",
      graphics: "DirectX 11 compatível",
      storage: "4 GB espaço disponível",
      network: "Conexão de internet banda larga",
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 rpg-text-shadow">
            Download Vanilla Conquer
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Baixe o cliente oficial e comece sua jornada épica no mundo de Vanilla Conquer
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2 rpg-glow">
            Versão 1.2.5 - Atualizada
          </Badge>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Windows Download */}
          <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-primary">
                <Monitor className="w-6 h-6" />
                Windows Client
              </CardTitle>
              <CardDescription>Cliente completo para Windows (Recomendado)</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-2xl font-bold text-secondary">1.8 GB</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Instalador completo
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Auto-atualizador incluído
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Suporte completo
                </li>
              </ul>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-3 rpg-glow">
                <Download className="w-5 h-5 mr-2" />
                BAIXAR PARA WINDOWS
              </Button>
            </CardContent>
          </Card>

          {/* Mobile Download */}
          <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-primary">
                <Smartphone className="w-6 h-6" />
                Mobile Client
              </CardTitle>
              <CardDescription>Versão mobile para Android (Em breve iOS)</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-2xl font-bold text-secondary">450 MB</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Otimizado para mobile
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cross-platform play
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  Beta disponível
                </li>
              </ul>
              <Button variant="outline" className="w-full font-bold py-3 border-border hover:bg-muted bg-transparent">
                <Download className="w-5 h-5 mr-2" />
                EM BREVE
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* System Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Requisitos do Sistema</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Minimum Requirements */}
            <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <HardDrive className="w-5 h-5" />
                  Requisitos Mínimos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>SO:</strong> {systemRequirements.minimum.os}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>Processador:</strong> {systemRequirements.minimum.processor}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MemoryStick className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>Memória:</strong> {systemRequirements.minimum.memory}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>Gráficos:</strong> {systemRequirements.minimum.graphics}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <HardDrive className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>Armazenamento:</strong> {systemRequirements.minimum.storage}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Requirements */}
            <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <HardDrive className="w-5 h-5" />
                  Requisitos Recomendados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>SO:</strong> {systemRequirements.recommended.os}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>Processador:</strong> {systemRequirements.recommended.processor}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MemoryStick className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>Memória:</strong> {systemRequirements.recommended.memory}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>Gráficos:</strong> {systemRequirements.recommended.graphics}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <HardDrive className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>Armazenamento:</strong> {systemRequirements.recommended.storage}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Installation Guide */}
        <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border mb-12">
          <CardHeader>
            <CardTitle className="text-center text-primary">Guia de Instalação</CardTitle>
            <CardDescription className="text-center">
              Siga estes passos simples para instalar Vanilla Conquer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold text-foreground">Download</h3>
                <p className="text-sm text-muted-foreground">Baixe o instalador oficial do cliente Windows</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold text-foreground">Instalar</h3>
                <p className="text-sm text-muted-foreground">Execute o instalador e siga as instruções na tela</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold text-foreground">Jogar</h3>
                <p className="text-sm text-muted-foreground">Crie sua conta e comece sua aventura épica</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Precisa de Ajuda?</h2>
          <p className="text-muted-foreground mb-6">
            Se você encontrar problemas durante a instalação, nossa equipe está aqui para ajudar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
              Suporte Técnico
            </Button>
            <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
              FAQ
            </Button>
            <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
              Fórum da Comunidade
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
