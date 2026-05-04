<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Proyecto: enlazarte-dev

## Stack Tecnológico
- **Framework**: Next.js 16.2.3 (App Router)
- **Base de datos**: Prisma + PostgreSQL
- **Auth**: NextAuth.js
- **Pagos**: Stripe
- **Email**: Nodemailer
- **UI**: React 19 + Tailwind CSS 4
- **Blog**: next-mdx-remote + gray-matter
- **Forms**: react-hook-form + zod
- **Typografía**: @tailwindcss/typography

## Estructura del Proyecto
```
/src
  /app              # Páginas y API routes de Next.js
  /components       # Componentes React
  /lib              # Utilidades (prisma.ts, etc.)
/prisma             # Schema de base de datos
/public             # Assets estáticos
/content
  /blog             # Artículos MDX del blog
```

## Rama Actual
- `seo/link-app-blog` - Implementación de arquitectura de blog MDX con enlaces a enlazarte.app

## Objetivos Actuales
### SEO / Blog MDX
- Implementar arquitectura de blog MDX con enlaces a enlazarte.app
- Usar `next-mdx-remote` y `gray-matter` para procesamiento de contenido
- Optimización SEO para artículos del blog

### WhatsApp Bot (En progreso)
- Chatbot WhatsApp usando WhatsApp Cloud API de Meta
- Servidor Node.js/Express en `/server/whatsapp-bot/`
- Despliegue en Render (free tier)
- Webhook configurado y operativo

## Estructura del WhatsApp Bot
```
server/whatsapp-bot/
├── src/
│   ├── index.js          # Entry point Express
│   ├── config.js         # Configuración variables
│   ├── routes/
│   │   └── webhook.js    # Endpoints GET/POST webhook
│   └── services/
│       └── whatsapp.js   # Integración WhatsApp API
├── package.json
├── .env                  # Variables locales (NO commitear)
├── render.yaml           # Config deploy Render
└── Dockerfile            # Contenedor opcional
```
**Nota**: Falta crear `.env.example` como template para variables de entorno.

## Próximos Pasos
### SEO / Blog MDX
1. Crear primeros artículos MDX en `/content/blog/`
2. Implementar página de listado de artículos
3. Implementar página individual de artículo
4. Configurar metadata SEO y Open Graph
5. Agregar enlaces estratégicos a enlazarte.app

### WhatsApp Bot
1. Crear `.env.example` con variables necesarias
2. Completar configuración de credenciales de Meta
3. Desplegar a Render o probar localmente
4. Configurar webhook URL en Meta Dashboard
5. Integrar botón flotante WhatsApp en frontend
