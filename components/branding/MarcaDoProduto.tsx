import { LOGOTIPO, SIMBOLO } from "@/lib/branding/desenho";
import { cn } from "@/lib/utils";

/**
 * A marca do PRODUTO — o que a tela mostra quando ninguém configurou marca
 * própria (`marcaEhADoProduto`, em `lib/branding.ts`).
 *
 * A arte é o PNG oficial ClinicScale (ver `lib/branding/desenho.ts`), envolto
 * num `<svg>` com `<image>`, e não um `<img>`:
 *  - a barra lateral já usa `<img>` para o logo CONFIGURADO, e o e2e
 *    `marca-logo.spec.ts` mede "barra sem `<img>`" como "sem logo do
 *    revendedor". Um `<img>` do produto ali faria a spec medir a coisa errada;
 *  - o `viewBox` fixa a proporção da arte, então nenhuma classe de altura ou
 *    largura consegue distorcê-la (uso proibido pelo guia de marca).
 *
 * O dourado sem fundo é a versão aprovada nos dois temas, então não há troca
 * de cor por tema — e o guia proíbe recolorir o logo.
 *
 * O texto alternativo é o `nome` que a tela já resolveu — nunca uma string
 * fixa, para que a catraca de marca (`tests/unit/branding.test.ts`) continue
 * contando ZERO ocorrências fora de `lib/branding.ts`.
 */

type Props = {
  readonly nome: string;
  readonly className?: string;
  /** `true` quando o texto ao lado já nomeia a marca — evita ler duas vezes. */
  readonly decorativo?: boolean;
};

function acessibilidade(nome: string, decorativo: boolean) {
  return decorativo
    ? ({ "aria-hidden": true } as const)
    : ({ role: "img", "aria-label": nome } as const);
}

/** O símbolo sozinho — para a barra recolhida, avatar e cantos apertados. */
export function SimboloDoProduto({ nome, className, decorativo = false }: Props) {
  return (
    <svg
      viewBox={SIMBOLO.viewBox}
      className={cn("shrink-0", className)}
      {...acessibilidade(nome, decorativo)}
    >
      <image href={SIMBOLO.href} width={SIMBOLO.largura} height={SIMBOLO.altura} />
    </svg>
  );
}

/** Símbolo + nome — para a barra aberta e a fachada de entrada. */
export function LogotipoDoProduto({ nome, className, decorativo = false }: Props) {
  return (
    <svg
      viewBox={LOGOTIPO.viewBox}
      className={cn("shrink-0", className)}
      {...acessibilidade(nome, decorativo)}
    >
      <image href={LOGOTIPO.href} width={LOGOTIPO.largura} height={LOGOTIPO.altura} />
    </svg>
  );
}
