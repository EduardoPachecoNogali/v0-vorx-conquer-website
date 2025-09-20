import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground rpg-text-shadow mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Como coletamos, usamos e protegemos suas informações
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="medieval-frame">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">1. Informações que Coletamos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Coletamos informações que você nos fornece diretamente, como quando você cria uma conta, faz uma
                  doação ou entra em contato conosco.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Nome de usuário e email</li>
                  <li>Informações de perfil do jogo</li>
                  <li>Dados de gameplay e estatísticas</li>
                  <li>Informações de comunicação</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">2. Como Usamos suas Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Usamos as informações coletadas para:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fornecer e manter nossos serviços</li>
                  <li>Processar transações e doações</li>
                  <li>Comunicar com você sobre atualizações</li>
                  <li>Melhorar a experiência do usuário</li>
                  <li>Detectar e prevenir fraudes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Compartilhamento de Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Necessário para fornecer nossos serviços</li>
                  <li>Exigido por lei</li>
                  <li>Para proteger nossos direitos e segurança</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">4. Segurança dos Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não
                  autorizado, alteração, divulgação ou destruição.
                </p>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">5. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Usamos cookies para melhorar sua experiência em nosso site. Você pode configurar seu navegador para
                  recusar cookies, mas isso pode afetar a funcionalidade do site.
                </p>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">6. Seus Direitos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Você tem o direito de:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Retirar seu consentimento</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <p className="text-muted-foreground">Última atualização: Janeiro de 2025</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
