# Dental.IA Landing Page

Este es el sitio web landing page para Dental.IA, una plataforma de asistencia para odontólogos basada en IA que analiza imágenes panorámicas y ayuda en el diagnóstico.

## Tecnologías utilizadas

- Next.js 15
- React 19
- Tailwind CSS
- Radix UI Components

## Cómo ejecutar localmente

1. Instalar dependencias:
   ```
   pnpm install
   ```

2. Iniciar el servidor de desarrollo:
   ```
   pnpm dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions.

Para desplegar:

1. Asegúrate de que el repositorio existe en GitHub.
2. Habilita GitHub Pages en la configuración del repositorio:
   - Ve a Settings > Pages
   - En "Source", selecciona "GitHub Actions"
3. Haz push de los cambios a la rama main:
   ```
   git add .
   git commit -m "Actualización del sitio"
   git push origin main
   ```
4. La acción de GitHub (definida en `.github/workflows/deploy.yml`) construirá y desplegará automáticamente el sitio.

## Estructura del proyecto

- `/app`: Páginas y componentes principales de la aplicación
- `/components`: Componentes reutilizables
- `/public`: Archivos estáticos (imágenes, etc.)
- `/styles`: Estilos CSS globales

## Un producto de BacanHub

Hecho con ❤️ por BacanHub 