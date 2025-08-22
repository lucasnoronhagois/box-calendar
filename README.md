# 📅 Box Calendar

Um calendário visual moderno construído com React + Vite, onde cada evento é representado por uma caixa única.

## ✨ Características

- **Interface Moderna**: Design responsivo com gradientes e efeitos visuais
- **Caixas Visuais**: Cada evento é representado por uma caixa única (box01.png até box16.png)
- **Navegação Intuitiva**: Navegue entre meses com botões elegantes
- **Modal de Detalhes**: Clique em qualquer evento para ver mais informações
- **Sidebar de Eventos**: Lista todos os eventos do mês atual
- **Responsivo**: Funciona perfeitamente em desktop e mobile

## 🚀 Tecnologias

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Componentes React para Bootstrap
- **date-fns** - Manipulação de datas
- **CSS3** - Estilos customizados com gradientes e animações

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd box-calendar
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Calendar.jsx          # Componente principal
│   ├── CalendarGrid.jsx      # Grade do calendário
│   ├── CalendarDay.jsx       # Dia individual
│   ├── EventsSidebar.jsx     # Barra lateral de eventos
│   ├── EventModal.jsx        # Modal de detalhes
│   └── Calendar.css          # Estilos do calendário
├── App.jsx                   # Componente raiz
├── main.jsx                  # Ponto de entrada
└── App.css                   # Estilos globais
public/
├── box01.png - box16.png     # Imagens das caixas
└── vite.svg                  # Ícone do Vite
```

## 🎨 Personalização

### Adicionando Novos Eventos

Edite o array `sampleEvents` no arquivo `src/components/Calendar.jsx`:

```javascript
const sampleEvents = [
  {
    id: 1,
    title: "Seu Evento",
    date: "2024-08-15",
    type: "meeting", // meeting, celebration, deadline
    description: "Descrição do evento"
  }
]
```

### Tipos de Eventos

- `meeting` - Reuniões (badge azul)
- `celebration` - Celebrações (badge verde)
- `deadline` - Prazos (badge vermelho)

### Modificando Estilos

Edite o arquivo `src/components/Calendar.css` para personalizar cores, fontes e animações.

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte aplicações React estáticas.

## 📱 Responsividade

O calendário é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado
- **Mobile**: Layout otimizado para telas pequenas

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**Lucas** - Desenvolvedor Full Stack

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
