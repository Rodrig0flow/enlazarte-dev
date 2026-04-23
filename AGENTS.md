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

## Estructura del Proyecto
```
/src
  /app              # Páginas y API routes de Next.js
  /components       # Componentes React
  /lib              # Utilidades (prisma.ts, etc.)
/prisma             # Schema de base de datos
/public             # Assets estáticos
```

## Rama Actual
- `feature/whatsapp-bot` - Implementación de chatbot WhatsApp

## Objetivo Actual
- Implementar chatbot WhatsApp usando WhatsApp Cloud API de Meta
- Servidor Node.js/Express separado en `/server/whatsapp-bot/`
- Despliegue en Render (free tier)
- Exponer con ngrok para desarrollo local
- Integrar botón flotante WhatsApp en frontend

## Estructura del WhatsApp Bot
```
server/whatsapp-bot/
├── src/
│   ├── index.js          # Entry point Express
│   ├── config.js          # Configuración variables
│   ├── routes/
│   │   └── webhook.js     # Endpoints GET/POST webhook
│   └── services/
│       └── whatsapp.js    # Integración WhatsApp API
├── package.json
├── .env                   # Variables locales (NO commitear)
├── .env.example           # Template para variables
├── render.yaml            # Config deploy Render
└── Dockerfile             # Contenedor opcional
```

## Próximos Pasos
1. Instalar dependencias: `cd server/whatsapp-bot && npm install`
2. Obtener credenciales de Meta (Phone Number ID, Access Token permanente)
3. Configurar `.env` con credenciales reales
4. Desplegar a Render o probar localmente con ngrok
5. Configurar webhook URL en Meta Dashboard
