import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CheckCircle2 } from "lucide-react"

export default function Home() {
  // Función para determinar la ruta base de los recursos estáticos
  const getBasePath = () => {
    if (process.env.NODE_ENV === 'production') {
      return '/dentialanding';
    }
    return '';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-teal-500"
            >
              <path d="M2 22a8 8 0 0 1 11.97-6.95" />
              <path d="M5 8.5V8" />
              <path d="M19 8.5V8" />
              <path d="M5 11.5V11" />
              <path d="M19 11.5V11" />
              <path d="m8.5 14.5-.26.5" />
              <path d="m15.5 14.5.26.5" />
              <path d="M12 14v1" />
              <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
            </svg>
            <span className="text-xl font-bold">Dental.IA</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:underline">
              ¿Cómo funciona?
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:underline">
              Beneficios
            </Link>
            <Link href="#planes" className="text-sm font-medium hover:underline">
              Planes
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:underline">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Dental.IA</h1>
                  <p className="text-xl text-muted-foreground">
                    Plataforma de asistencia para odontólogos basada en IA que analiza imágenes panorámicas y ayuda en
                    el diagnóstico.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#como-funciona">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                      Conocer más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Dental.IA en acción"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src={`${getBasePath()}/placeholder.jpg`}
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Cómo funciona?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Dental.IA simplifica el proceso de análisis de imágenes panorámicas dentales en tres simples pasos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Cargá tu estudio panorámico</h3>
                <p className="text-muted-foreground">
                  Sube fácilmente las imágenes panorámicas de tus pacientes a nuestra plataforma segura.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-bold">Analizalo con IA</h3>
                <p className="text-muted-foreground">
                  Nuestro sistema de inteligencia artificial analiza la imagen e identifica posibles patologías.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Generá tu informe en PDF</h3>
                <p className="text-muted-foreground">
                  Revisa, edita si es necesario, y descarga el informe completo en formato PDF para tus registros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beneficios</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Dental.IA transforma tu práctica odontológica con múltiples ventajas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Ahorro de tiempo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Reduce significativamente el tiempo dedicado al análisis de imágenes panorámicas, permitiéndote
                    atender a más pacientes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mejora en diagnósticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    La IA detecta patologías que podrían pasar desapercibidas, mejorando la precisión de tus
                    diagnósticos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Integración con flujo de trabajo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Se adapta perfectamente a tu flujo de trabajo clínico actual, sin necesidad de cambios drásticos en
                    tus procesos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="planes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Planes</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Elige el plan que mejor se adapte a las necesidades de tu clínica.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                  <CardDescription>Para clínicas pequeñas o profesionales independientes</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Hasta 50 análisis mensuales</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Detección de patologías básicas</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Generación de informes PDF</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Soporte por email</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contactar para más info</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-teal-200 bg-teal-50">
                <CardHeader>
                  <CardTitle>Profesional</CardTitle>
                  <CardDescription>Para clínicas medianas con múltiples odontólogos</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Hasta 200 análisis mensuales</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Detección avanzada de patologías</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Informes personalizables</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Integración con sistemas de gestión</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Contactar para más info</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Empresarial</CardTitle>
                  <CardDescription>Para centros de diagnóstico y grandes clínicas</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Análisis ilimitados</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Detección completa de patologías</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>API para integraciones personalizadas</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Múltiples usuarios y roles</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Soporte 24/7 y gerente de cuenta</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Capacitación personalizada</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contactar para más info</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="w-full py-6 md:py-12 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-teal-400"
                >
                  <path d="M2 22a8 8 0 0 1 11.97-6.95" />
                  <path d="M5 8.5V8" />
                  <path d="M19 8.5V8" />
                  <path d="M5 11.5V11" />
                  <path d="M19 11.5V11" />
                  <path d="m8.5 14.5-.26.5" />
                  <path d="m15.5 14.5.26.5" />
                  <path d="M12 14v1" />
                  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                </svg>
                <span className="text-xl font-bold">Dental.IA</span>
              </div>
              <p className="text-sm text-slate-300">Transformando la odontología con inteligencia artificial.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Email: bacaningenieria@gmail.com</li>
                <li>Dirección: Rosario, Argentina</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Enlaces</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="#como-funciona" className="hover:text-teal-400">
                    ¿Cómo funciona?
                  </Link>
                </li>
                <li>
                  <Link href="#beneficios" className="hover:text-teal-400">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#planes" className="hover:text-teal-400">
                    Planes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 Dental.IA. Todos los derechos reservados.</p>
            <p className="mt-1">Un producto de BacanHub - Hecho con ❤️ por BacanHub</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
