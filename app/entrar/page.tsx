"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Shield, Sword } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Login attempt:", formData)
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="medieval-frame p-4 inline-block mb-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-secondary rpg-text-shadow">VANILLA</h1>
              <h2 className="text-lg font-bold text-primary rpg-text-shadow">CONQUER</h2>
              <div className="text-xs text-muted-foreground mt-1">征服</div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Zona de Login</h3>
          <p className="text-muted-foreground">Entre em sua conta para começar sua jornada</p>
        </div>

        {/* Login Form */}
        <Card className="medieval-card bg-card/90 backdrop-blur-sm border-border">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-primary">
              <Shield className="w-5 h-5" />
              Acesso ao Reino
            </CardTitle>
            <CardDescription>Digite suas credenciais para entrar no mundo de Vanilla Conquer</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground font-medium">
                  Nome de Usuário
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Digite seu nome de usuário"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Link href="/esqueci-senha" className="text-primary hover:text-primary/80 transition-colors">
                  Esqueci minha senha
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-2 rpg-glow"
              >
                <Sword className="w-4 h-4 mr-2" />
                ENTRAR NO REINO
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Não tem uma conta?{" "}
                <Link href="/cadastro" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Registre-se aqui
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  )
}
