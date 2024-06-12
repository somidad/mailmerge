import type { MDXComponents } from "mdx/types";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyUnorderedList,
  TypographyP,
  TypographyOrderedList,
} from "./components/ui/typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
    h2: ({ children }) => <TypographyH2>{children}</TypographyH2>,
    h3: ({ children }) => <TypographyH3>{children}</TypographyH3>,
    h4: ({ children }) => <TypographyH4>{children}</TypographyH4>,
    p: ({ children }) => <TypographyP>{children}</TypographyP>,
    blockquote: ({ children }) => (
      <TypographyBlockquote>{children}</TypographyBlockquote>
    ),
    ul: ({ children }) => (
      <TypographyUnorderedList>{children}</TypographyUnorderedList>
    ),
    ol: ({ children }) => (
      <TypographyOrderedList>{children}</TypographyOrderedList>
    ),
    code: ({ children }) => (
      <TypographyInlineCode>{children}</TypographyInlineCode>
    ),
    pre: ({ children }) => <pre className="bg-muted">{children}</pre>,
    ...components,
  };
}
