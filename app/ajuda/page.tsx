import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, Settings } from "lucide-react"

export default function AjudaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground rpg-text-shadow mb-6">Central de Ajuda</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para suas dúvidas sobre o Vanilla Conquer
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Categories */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Categorias</h2>
                <div className="space-y-4">
                  <Card className="medieval-frame">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <HelpCircle className="w-5 h-5 text-primary" />
                        Primeiros Passos
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  <Card className="medieval-frame">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Settings className="w-5 h-5 text-secondary" />
                        Configurações
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  <Card className="medieval-frame">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        Problemas Técnicos
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* FAQ Content */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-foreground mb-6">Perguntas Frequentes</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="medieval-frame p-4">
                    <AccordionTrigger className="text-left">Como criar uma conta no Vanilla Conquer?</AccordionTrigger>
                    <AccordionContent>
                      Para criar uma conta, clique em "Cadastro" no menu principal e preencha o formulário com suas
                      informações. Você receberá um email de confirmação para ativar sua conta.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="medieval-frame p-4">
                    <AccordionTrigger className="text-left">Como fazer o download do cliente?</AccordionTrigger>
                    <AccordionContent>
                      Acesse a página de Download e clique no botão "Baixar Agora". O arquivo será baixado
                      automaticamente. Certifique-se de ter pelo menos 2GB de espaço livre em disco.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="medieval-frame p-4">
                    <AccordionTrigger className="text-left">
                      Quais são os requisitos mínimos do sistema?
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Windows 7 ou superior</li>
                        <li>2GB de RAM</li>
                        <li>Placa de vídeo DirectX 9.0c compatível</li>
                        <li>2GB de espaço em disco</li>
                        <li>Conexão com a internet</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="medieval-frame p-4">
                    <AccordionTrigger className="text-left">Como posso apoiar o servidor?</AccordionTrigger>
                    <AccordionContent>
                      Você pode apoiar o servidor através de doações na página "Doações". Oferecemos diferentes pacotes
                      com benefícios exclusivos para apoiadores.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="medieval-frame p-4">
                    <AccordionTrigger className="text-left">O jogo é gratuito?</AccordionTrigger>
                    <AccordionContent>
                      Sim! O Vanilla Conquer é completamente gratuito para jogar. As doações são opcionais e ajudam a
                      manter o servidor funcionando.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
