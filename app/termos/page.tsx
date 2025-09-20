import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground rpg-text-shadow mb-6">Termos de Uso</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leia nossos termos e condições de uso do Vanilla Conquer
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="medieval-frame">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">1. Aceitação dos Termos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ao acessar e usar o Vanilla Conquer, você concorda em cumprir e estar vinculado a estes Termos de Uso.
                  Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
                </p>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">2. Uso do Serviço</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  O Vanilla Conquer é um servidor privado de jogo online. Você concorda em usar o serviço apenas para
                  fins legais e de acordo com estes Termos de Uso.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Não usar cheats, hacks ou software de terceiros</li>
                  <li>Não assediar outros jogadores</li>
                  <li>Não explorar bugs ou falhas do jogo</li>
                  <li>Respeitar as regras da comunidade</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Conta do Usuário</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Você é responsável por manter a confidencialidade de sua conta e senha. Você concorda em aceitar
                  responsabilidade por todas as atividades que ocorrem sob sua conta.
                </p>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">4. Propriedade Intelectual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Todo o conteúdo do Vanilla Conquer, incluindo textos, gráficos, logos e software, é propriedade dos
                  respectivos proprietários e está protegido por leis de direitos autorais.
                </p>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">5. Limitação de Responsabilidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  O Vanilla Conquer não será responsável por quaisquer danos diretos, indiretos, incidentais ou
                  consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
                </p>
              </CardContent>
            </Card>

            <Card className="medieval-frame mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">6. Modificações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em
                  vigor imediatamente após a publicação no site.
                </p>
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
