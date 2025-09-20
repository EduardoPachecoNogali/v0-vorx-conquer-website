import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle, Clock } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground rpg-text-shadow mb-6">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Precisa de ajuda? Nossa equipe está aqui para você
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="medieval-frame">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Envie uma Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nome">Nome</Label>
                          <Input id="nome" placeholder="Seu nome" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="seu@email.com" className="mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="assunto">Assunto</Label>
                        <Input id="assunto" placeholder="Assunto da mensagem" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="mensagem">Mensagem</Label>
                        <Textarea
                          id="mensagem"
                          placeholder="Descreva sua dúvida ou problema..."
                          className="mt-1 min-h-[120px]"
                        />
                      </div>

                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="medieval-frame">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-secondary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">suporte@vanillaconquer.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-6 h-6 text-secondary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Discord</h3>
                        <p className="text-muted-foreground">discord.gg/vanillaconquer</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-secondary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">24/7 - Suporte online</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="medieval-frame">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Perguntas Frequentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Antes de entrar em contato, verifique nossa Central de Ajuda. Muitas dúvidas já foram respondidas
                      lá!
                    </p>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="/ajuda">Visitar Central de Ajuda</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="medieval-frame">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Tempo de Resposta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Email: 24-48 horas</li>
                      <li>• Discord: Resposta imediata</li>
                      <li>• Problemas críticos: Prioridade máxima</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
