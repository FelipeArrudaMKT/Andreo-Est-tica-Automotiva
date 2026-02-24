# Andreo Estética Automotiva - Landing Page

Landing page moderna e profissional para estética automotiva em Cidrolândia - MS.

## Tecnologias
- Vite
- React
- TypeScript
- TailwindCSS
- Motion (Animações)
- Lucide React (Ícones)

## Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para gerar o build de produção:
   ```bash
   npm run build
   ```

## Deploy na Vercel

Este projeto está pronto para ser implantado na Vercel.

1. Conecte seu repositório GitHub à Vercel.
2. A Vercel detectará automaticamente as configurações do Vite.
3. Certifique-se de que as seguintes configurações estão definidas:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

## Estrutura do Projeto
- `src/components`: Componentes reutilizáveis da interface.
- `src/data`: Conteúdo textual e dados do negócio.
- `src/App.tsx`: Ponto de entrada principal da aplicação.
- `src/index.css`: Estilos globais e configurações do Tailwind.
