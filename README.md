# 🎬 ReelScript — Gerador de Scripts de Reels com IA

Aplicação web desenvolvida para ajudar criadores de conteúdo e negócios a gerar roteiros completos para Reels e Shorts utilizando Inteligência Artificial. A partir do nicho, contexto, duração, tom de voz e idioma, a ferramenta estrutura automaticamente o **Hook**, o **Roteiro**, a **Legenda** e as **Hashtags**.

## ✨ Funcionalidades e Destaques

- **Personalização de Briefing:** Formulário completo para definir nicho/produto, contexto adicional, duração do vídeo (30s, 60s ou 90s), tom de voz (Viral, Educativo, Vendedor, Engraçado ou Inspirador) e idioma (PT-BR, Inglês ou Espanhol).
- **Saída Estruturada em 4 Blocos:** Faz o tratamento (*parsing*) da resposta da IA com Expressões Regulares (`RegExp`) para exibir separadamente o **Hook (primeiros 3s)**, **Roteiro**, **Legenda** e **Hashtags** (em formato de *pills*).
- **Cópia Rápida (Clipboard API):** Botão individual de copiar em cada seção do script com feedback visual instantâneo.
- **Controle de Limite Diário:** Limite de 3 gerações gratuitas por dia persistido no navegador via `localStorage`, com barra de progresso, indicador de status por cor e bloqueio automático ao atingir o limite.
- **Interface Dark Mode & Glassmorphism:** Visual moderno em tema escuro com gradientes, efeito de vidro fosco (`backdrop-filter`), animações de carregamento (*spinner*), validação de campos e tratamento de erros.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica, acessibilidade (`aria-live`, `role="alert"`) e ícones SVG inline.
- **CSS3:** Variáveis CSS, Flexbox, CSS Grid, *glassmorphism*, animações (`@keyframes`), responsividade com `@media` queries e fonte *Inter* via Google Fonts.
- **JavaScript (Vanilla JS):** Requisições assíncronas (`fetch` com `async/await`), manipulação do DOM, `localStorage`, Expressões Regulares (`RegExp`) e `navigator.clipboard`.

## 📸 Preview

<img width="1861" height="868" alt="image" src="https://github.com/user-attachments/assets/b8474249-8b69-4e30-8a39-45cfccaef740" />

## 👤 Autor

**Hugo Henrique Alves**  
- GitHub: [@HugoHenriqueA](https://github.com/HugoHenriqueA)  
- LinkedIn: [linkedin.com/in/hugo-henrique-alves](https://www.linkedin.com/in/hugo-henrique-alves/)
