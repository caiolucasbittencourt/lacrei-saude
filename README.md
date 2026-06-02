# Lacrei Saúde

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
![Jest](https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

Aplicação front-end responsiva para a Lacrei Saúde, desenvolvida com foco em acessibilidade, navegação clara e uma experiência visual coerente com uma plataforma de saúde inclusiva.

## Tecnologias

- Next.js com App Router
- React
- TypeScript
- styled-components
- Jest
- React Testing Library
- ESLint
- Prettier

## Funcionalidades

- Página inicial com apresentação da proposta da plataforma
- Página institucional sobre missão, propósito e valores
- Página de profissionais com dados simulados
- Mock de API em `/api/professionals` a partir de JSON local
- Filtros por busca textual, especialidade e modalidade de atendimento
- Header responsivo com menu mobile
- Footer com navegação institucional e links sociais
- Componentes reutilizáveis para botões, cards, títulos e contêineres
- Uso de tags semânticas e atributos ARIA
- Otimização de imagens com `next/image`
- Testes unitários com Jest e React Testing Library

## Pré-requisitos

- Node.js 20+
- npm

## Instalação

```bash
git clone https://github.com/caiolucasbittencourt/lacrei-saude.git
cd lacrei-saude
npm install
```

## Configuração

O projeto funciona localmente sem variáveis obrigatórias.

Opcionalmente, defina a URL pública do ambiente para metadados e sitemap:

```env
NEXT_PUBLIC_SITE_URL="https://lacrei-saude-zeta.vercel.app"
```

## Executando

### Desenvolvimento

```bash
npm run dev
```

Executa a aplicação em modo de desenvolvimento. Por padrão, o Next.js sobe em `http://localhost:3000`.

### Local

```bash
npm run build
npm run start
```

`npm run build` gera a build de produção e `npm run start` executa a aplicação compilada localmente.

## Deploy

A aplicação está publicada na Vercel:

```text
https://lacrei-saude-zeta.vercel.app
```

Rotas públicas validadas:

- `https://lacrei-saude-zeta.vercel.app/`
- `https://lacrei-saude-zeta.vercel.app/quem-somos`
- `https://lacrei-saude-zeta.vercel.app/profissionais`
- `https://lacrei-saude-zeta.vercel.app/api/professionals`

## Scripts

| Script              | Descrição                            |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Inicia o servidor de desenvolvimento |
| `npm run build`     | Gera a build de produção             |
| `npm run start`     | Executa a aplicação compilada        |
| `npm run lint`      | Executa o ESLint no projeto          |
| `npm run typecheck` | Valida os tipos com TypeScript       |
| `npm test`          | Executa os testes unitários com Jest |

## Estrutura

```text
public/
  fonts/
  images/
src/
  app/
    api/
      professionals/
    page.tsx
    layout.tsx
    quem-somos/
    profissionais/
  components/
    about/
    home/
    layout/
    professionals/
    ui/
  data/
  lib/
  mocks/
  services/
  styles/
  test/
  types/
```

## Rotas

| Rota                 | Descrição                                             |
| -------------------- | ----------------------------------------------------- |
| `/`                  | Página inicial com hero, benefícios e chamada de ação |
| `/quem-somos`        | Página institucional com missão, história e valores   |
| `/profissionais`     | Página de busca com filtros e cards de profissionais  |
| `/api/professionals` | Mock de API com a lista de profissionais simulados    |

## Mock

Os dados simulados de profissionais ficam em `src/mocks/professionals.json`.

A camada `src/services/professionals.ts` consome esse mock e entrega os dados para a página `/profissionais`.

A rota `src/app/api/professionals/route.ts` expõe o mesmo conteúdo em formato JSON:

```bash
GET /api/professionals
```

## Local

1. Instale as dependências com `npm install`.
2. Execute o ambiente local com `npm run dev`.
3. Acesse `http://localhost:3000`.

## Build

Para validar a aplicação antes do deploy:

```bash
npm run build
```

Fluxo recomendado:

- Publicar em uma plataforma compatível com Next.js, como Vercel.
- Configurar `NEXT_PUBLIC_SITE_URL` com `https://lacrei-saude-zeta.vercel.app`.
- Rodar `npm run build` antes do deploy.
- Após a publicação, validar as rotas `/`, `/quem-somos` e `/profissionais`.

## Testes

Comando executado:

```bash
npm test
```

Resultado registrado em 02/06/2026:

- 4 suítes de teste foram aprovadas.
- 7 testes foram aprovados.
- Componentes cobertos: `Header`, `Button`, `ProfessionalList` e `ProfessionalCard`.

Os testes validam navegação, estado ativo do menu, abertura e fechamento do menu mobile, comportamento de botão, filtros da lista de profissionais, estado vazio e renderização de informações de cards.

### Lighthouse

Auditoria executada no deploy da Vercel em 02/06/2026 com Lighthouse CLI 12.8.2, Chrome Headless e configuração mobile padrão.

| Rota             | Performance | Acessibilidade | Boas práticas | SEO |
| ---------------- | ----------- | -------------- | ------------- | --- |
| `/`              | 99          | 96             | 100           | 100 |
| `/quem-somos`    | 95          | 96             | 100           | 100 |
| `/profissionais` | 99          | 96             | 100           | 100 |

As notas atendem aos critérios mínimos do desafio: Performance acima de 80 e Acessibilidade acima de 90.

### Acessibilidade

Validação técnica realizada em 02/06/2026 com revisão de semântica, atributos ARIA e navegação esperada para tecnologias assistivas:

- Estrutura principal com `header`, `main`, `footer`, `nav`, `section`, `article`, listas e formulário.
- Navegação principal e mobile com rótulos acessíveis.
- Botão de menu mobile com `aria-label`, `aria-expanded` e `aria-controls`.
- Links ativos marcados com `aria-current="page"`.
- Ícones decorativos marcados com `aria-hidden="true"`.
- Campos de filtro com `label` associado.
- Resumo de resultados com `aria-live="polite"`.
- Estado vazio da busca com `role="status"`.

### Leitor de tela

Teste manual com leitor de tela realizado em 02/06/2026 no deploy público.

Rotas verificadas:

- `/`
- `/quem-somos`
- `/profissionais`

Resultado do teste:

- A navegação pelos landmarks funcionou como esperado.
- O conteúdo principal das páginas foi anunciado corretamente.
- O menu mobile anunciou o estado aberto e fechado.
- Os links de navegação foram lidos com nomes compreensíveis.
- Os campos de busca e filtros da página de profissionais foram anunciados corretamente.
- A atualização do total de profissionais encontrados foi percebida pela região `aria-live`.
- Ícones decorativos não foram anunciados de forma isolada.

Conclusão: o teste manual com leitor de tela funcionou como esperado nas rotas e interações principais.

## Rollback

Em caso de falha após o deploy:

1. Reativar o deploy anterior estável na plataforma de hospedagem.
2. Se necessário, reverter o último commit que introduziu a falha:

```bash
git revert HEAD
```

3. Reinstalar as dependências e validar novamente:

```bash
npm install
npm test
npm run build
```

4. Publicar novamente somente depois que os testes e a build passarem.

## Justificativas

Visualmente, a interface prioriza clareza, acolhimento e consistência com a proposta da Lacrei Saúde. A paleta usa verde como cor principal, azul como apoio institucional e fundos claros para manter boa leitura. Os componentes foram organizados em seções com hierarquia tipográfica clara, cards de profissionais, chamadas de ação e filtros visíveis.

Tecnicamente, o projeto usa App Router para separar as páginas principais, styled-components com registro SSR para evitar problemas de estilo no carregamento, `next/image` para otimização de imagens e componentes reutilizáveis para layout, botões, cards e seções. A lista de profissionais usa dados simulados locais em `src/data`, mantendo o protótipo simples e fácil de evoluir para uma API real.
