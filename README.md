# 📅 Box Calendar

Um calendário interativo que mostra eventos de boxes com preços em Adena e Lcoin.

## 🚀 Deploy no Vercel

### Pré-requisitos:
- Conta no [Vercel](https://vercel.com)
- Conta no [GitHub](https://github.com)

### Passos para Deploy:

1. **Fazer push do código para o GitHub:**
   ```bash
   git add .
   git commit -m "feat: prepare for vercel deploy"
   git push origin main
   ```

2. **Conectar no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe o repositório `box-calendar`

3. **Configurações do Projeto:**
   - **Framework Preset:** Node.js
   - **Root Directory:** `./` (padrão)
   - **Build Command:** `npm run vercel-build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy:**
   - Clique em "Deploy"
   - Aguarde o build completar
   - Seu site estará disponível em: `https://seu-projeto.vercel.app`

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📁 Estrutura do Projeto

```
box-calendar/
├── src/
│   ├── backend/
│   │   ├── models/Event.js
│   │   ├── controllers/CalendarController.js
│   │   ├── routes/calendarRoutes.js
│   │   └── server.js
│   └── frontend/
│       ├── public/
│       │   ├── css/style.css
│       │   ├── js/calendar.js
│       │   └── boxes/ (imagens)
│       └── views/calendar.ejs
├── package.json
├── vercel.json
└── README.md
```

## 🎯 Funcionalidades

- ✅ Calendário interativo com 16 boxes
- ✅ Preços em Adena + Lcoin
- ✅ Imagens das boxes no modal
- ✅ Navegação entre meses
- ✅ Design responsivo
- ✅ Hot-reload em desenvolvimento

## 🔧 Tecnologias

- **Backend:** Node.js, Express, EJS
- **Frontend:** HTML5, CSS3, JavaScript
- **Build:** Babel, Nodemon
- **Deploy:** Vercel
