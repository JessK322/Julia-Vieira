# Dra. Júlia Vieira — Ortodontia e Estética

Website institucional de página única (landing page) desenvolvido como **protótipo comercial** para apresentação à Dra. Júlia Vieira de Sá.

O objetivo do projeto é demonstrar, na prática, como uma presença digital bem construída pode transmitir autoridade, organizar a informação sobre os atendimentos e reduzir o caminho até o agendamento.

---

## Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS 4** (tokens de design no próprio CSS)
- **Lucide Icons**
- Tipografia self-hosted (Cormorant Garamond + Manrope) — sem dependência de CDN em tempo de execução

---

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção em /dist
npm run preview  # pré-visualização do build
```

Requisitos: Node.js 20+.

---

## Deploy

O mock está publicado na Vercel:

**https://julia-vieira.vercel.app**

O projeto está vinculado como `yur3es-projects/julia-vieira`. Para publicar uma atualização depois de qualquer alteração:

```bash
npm run build
npx vercel --prod
```

Configuração em `vercel.json` (framework Vite, cache dos assets e headers de segurança). O `.vercelignore` mantém fora do upload as pastas `img/` (originais), `preview/` e `dist/`.

Para ligar um domínio próprio (ex.: `drajuliavieira.com.br`): Vercel → projeto → **Settings → Domains** → adicionar. Depois é só trocar `https://julia-vieira.vercel.app` pelas URLs do domínio final em `index.html` (canonical, Open Graph e JSON-LD), `public/sitemap.xml` e `public/robots.txt`.

---

## Como personalizar

Praticamente todo o conteúdo está centralizado em **`src/data/site.ts`**:

| O que alterar | Onde |
| --- | --- |
| Nome, especialidade, clínica, CRO | `brand` |
| WhatsApp, Instagram, links do Google | `contact` |
| Endereço e CEP | `address` |
| Horários | `hours` |
| Textos do hero, sobre, diferenciais, jornada | `hero`, `about`, `differentiators`, `journey` |
| Especialidades e detalhes dos modais | `services` |
| Fotos do consultório | `clinic.photos` |
| Política de privacidade | `legal` |

### Cores e tipografia

Os tokens estão em `src/index.css`, no bloco `@theme`:

```css
--color-forest: #24483f;
--color-sage: #dce8e1;
--color-cream: #f7f7f3;
--color-gold: #b69b70;
--color-gold-ink: #856a3f; /* dourado acessível para textos */
```

### Imagens

As imagens servidas pelo site ficam em **`public/img`** (nomes normalizados, formato WebP otimizado). Os arquivos originais permanecem em **`img/`**, como acervo.

Para trocar a foto principal, substitua `public/img/julia-hero.webp` mantendo o mesmo nome — ou atualize o caminho em `src/data/site.ts`.

---

## Estrutura

```
src/
├── App.tsx                 # composição da página
├── data/site.ts            # conteúdo centralizado
├── hooks/useUi.ts          # scroll, scroll spy, bloqueio de scroll
├── lib/utils.ts            # utilitários (cn, WhatsApp, scroll)
├── components/
│   ├── layout/             # Header, Footer, botão flutuante
│   ├── sections/           # Hero, Sobre, Especialidades, ...
│   ├── modals/             # serviço, trajetória, privacidade
│   └── ui/                 # Button, Modal, Reveal, SectionHeading
└── index.css               # design tokens + base
```

---

## Antes de publicar (checklist)

- [x] Domínio provisório configurado (`julia-vieira.vercel.app`) no `index.html`, `public/sitemap.xml` e `public/robots.txt`.
- [ ] Trocar as URLs acima pelo domínio final, quando ele existir.
- [ ] Confirmar o número de WhatsApp em `src/data/site.ts`.
- [ ] Confirmar CRO e demais registros profissionais (hoje aparecem como placeholder).
- [ ] Revisar textos institucionais, formação e titulações com a profissional.
- [ ] Validar horários, estacionamento e modalidade de atendimento.
- [ ] Revisar a política de privacidade com o fluxo real de atendimento.
- [ ] Remover a nota de “prévia de redesign” do rodapé (`legal.demoNote`).
- [ ] Adicionar analytics/consentimento, se necessário.

---

## Conformidade

O conteúdo foi redigido para evitar promessas de resultado, garantias, alegações de superioridade e depoimentos fictícios — alinhado às normas de publicidade médica e odontológica do CFM/CFO. A indicação de tratamentos é sempre condicionada à avaliação clínica individual.

Os dados de contato, endereço e especialidades vieram do site atual da profissional. **Nenhum registro profissional (CRO) foi inventado**: o campo permanece como placeholder até confirmação.

---

## Roteiro de apresentação (sugestão)

1. **Primeira dobra** — “Um cuidado que coloca você no centro”: posicionamento, não apenas estética.
2. **Sobre** — a trajetória vira prova de autoridade, com CTA para aprofundar.
3. **Especialidades** — cada card abre um detalhe com CTA direto para o WhatsApp já contextualizado.
4. **Diferenciais + Jornada** — reduzem a insegurança de quem nunca foi ao consultório.
5. **Estrutura + mapa** — mostram onde fica e como chegar; o mapa carrega sob demanda (privacidade).
6. **Avaliações + Instagram** — prova social e canal de relacionamento.
7. **CTA final** — um único caminho: conversar no WhatsApp.

> Dica: apresente no celular primeiro. A experiência mobile foi desenhada para ser o palco principal da demonstração.
