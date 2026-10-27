/**
 * A régua do design system, congelada em módulo — a fonte da derivação em RUNTIME.
 *
 * POR QUE ESTE ARQUIVO EXISTE, e não um `readFileSync("app/globals.css")`:
 *
 * A imagem de produção é `output: "standalone"` (next.config.ts) e o Dockerfile
 * copia para o runner apenas `.next/standalone`, `.next/static` e `public/`. O
 * `app/globals.css` NÃO existe no contêiner que o self-hoster roda. Um
 * `readFileSync` no caminho de render do `app/layout.tsx` daria ENOENT — 500 em
 * todas as telas, na VPS de quem a feature existe para servir, e verde em dev,
 * em teste e na Vercel. É o mesmo modo de falha que `lib/branding.ts` documenta
 * para o `NEXT_PUBLIC_*`.
 *
 * A separação também é a certa conceitualmente: a RÉGUA é do produto e nasce
 * congelada no build; a COR é da instalação e só existe em runtime. Só a segunda
 * precisa ser lida do ambiente.
 *
 * ESTE ARQUIVO É GERADO. Não edite à mão: ele é o `extrairRegua()` aplicado ao
 * `app/globals.css`. `tests/unit/branding-regua-do-produto.test.ts` compara os
 * dois a cada run e imprime o literal novo na mensagem de falha — mexeu na
 * paleta, o teste reprova e entrega o texto para colar aqui.
 */

import type { Regua } from "./contraste";

export const REGUA_DO_PRODUTO: Regua = {
  rampaDoProduto: [
    "#faf6ec",
    "#f2e8d0",
    "#e8d9b5",
    "#dcc594",
    "#cfb27a",
    "#c2a063",
    "#a8874d",
    "#7e6234",
    "#614b29",
    "#463620",
    "#261d11",
  ],
  claro: {
    nome: "claro",
    base: [
      {
        chave: "--color-bg",
        hex: "#f4efe3",
      },
      {
        chave: "--color-surface",
        hex: "#ffffff",
      },
      {
        chave: "--color-surface-elevated",
        hex: "#eee7d7",
      },
    ],
    tingidas: [
      {
        chave: "--color-accent-soft",
        fonte: {
          tipo: "grau",
          indice: 1,
          alfa: 1,
        },
      },
    ],
    papeis: [
      {
        token: "--color-accent",
        tipo: "componente",
        fonte: {
          tipo: "grau",
          indice: 7,
          alfa: 1,
        },
        contra: null,
      },
      {
        token: "--color-accent-fg",
        tipo: "texto",
        fonte: {
          tipo: "frenteCalculada",
          sobre: {
            tipo: "grau",
            indice: 7,
            alfa: 1,
          },
        },
        contra: [
          {
            tipo: "grau",
            indice: 7,
            alfa: 1,
          },
        ],
      },
      {
        token: "--color-accent-hover",
        tipo: "componente",
        fonte: {
          tipo: "grau",
          indice: 8,
          alfa: 1,
        },
        contra: null,
      },
      {
        token: "--ring",
        tipo: "componente",
        fonte: {
          tipo: "grau",
          indice: 7,
          alfa: 1,
        },
        contra: null,
      },
      {
        token: "::selection/color",
        tipo: "texto",
        fonte: {
          tipo: "grau",
          indice: 10,
          alfa: 1,
        },
        contra: [
          {
            tipo: "grau",
            indice: 2,
            alfa: 1,
          },
        ],
      },
      {
        token: ":focus-visible/outline",
        tipo: "componente",
        fonte: {
          tipo: "grau",
          indice: 7,
          alfa: 1,
        },
        contra: null,
      },
    ],
    semanticas: [
      {
        nome: "success",
        hex: "#1c4a3d",
      },
      {
        nome: "warning",
        hex: "#b07b2e",
      },
      {
        nome: "error",
        hex: "#7a2e27",
      },
      {
        nome: "info",
        hex: "#2e5a66",
      },
    ],
    neutros: [
      "#faf7f0",
      "#f4efe3",
      "#e2d9c6",
      "#cdbfa4",
      "#a89d86",
      "#7b7361",
      "#5c5546",
      "#433e33",
      "#2b2820",
      "#16140f",
      "#000000",
    ],
    indices: {
      accent: 7,
      hover: 8,
      soft: 1,
    },
    alfaDoSoft: 1,
  },
  escuro: {
    nome: "escuro",
    base: [
      {
        chave: "--color-bg",
        hex: "#000000",
      },
      {
        chave: "--color-surface",
        hex: "#16140f",
      },
      {
        chave: "--color-surface-elevated",
        hex: "#201d16",
      },
    ],
    tingidas: [
      {
        chave: "--color-accent-soft",
        fonte: {
          tipo: "literal",
          hex: "#c2a063",
          alfa: 0.14,
        },
      },
    ],
    papeis: [
      {
        token: "--color-accent",
        tipo: "componente",
        fonte: {
          tipo: "grau",
          indice: 5,
          alfa: 1,
        },
        contra: null,
      },
      {
        token: "--color-accent-fg",
        tipo: "texto",
        fonte: {
          tipo: "frenteCalculada",
          sobre: {
            tipo: "grau",
            indice: 5,
            alfa: 1,
          },
        },
        contra: [
          {
            tipo: "grau",
            indice: 5,
            alfa: 1,
          },
        ],
      },
      {
        token: "--color-accent-hover",
        tipo: "componente",
        fonte: {
          tipo: "grau",
          indice: 4,
          alfa: 1,
        },
        contra: null,
      },
      {
        token: "--ring",
        tipo: "componente",
        fonte: {
          tipo: "grau",
          indice: 4,
          alfa: 1,
        },
        contra: null,
      },
      {
        token: '[data-theme="dark"] ::selection/color',
        tipo: "texto",
        fonte: {
          tipo: "grau",
          indice: 0,
          alfa: 1,
        },
        contra: [
          {
            tipo: "grau",
            indice: 7,
            alfa: 1,
          },
        ],
      },
      {
        token: '[data-theme="dark"] :focus-visible/outline-color',
        tipo: "componente",
        fonte: {
          tipo: "grau",
          indice: 4,
          alfa: 1,
        },
        contra: null,
      },
    ],
    semanticas: [
      {
        nome: "success",
        hex: "#3f9175",
      },
      {
        nome: "warning",
        hex: "#b07b2e",
      },
      {
        nome: "error",
        hex: "#c96a5c",
      },
      {
        nome: "info",
        hex: "#5a93a1",
      },
    ],
    neutros: [
      "#f4efe3",
      "#e6dfcf",
      "#c9c0ac",
      "#b3ab98",
      "#878070",
      "#3d3729",
      "#2a261c",
      "#201d16",
      "#16140f",
      "#0b0a07",
      "#000000",
    ],
    indices: {
      accent: 5,
      hover: 4,
      soft: null,
    },
    alfaDoSoft: 0.14,
  },
} as const;
