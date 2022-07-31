---
inject: true
to: components/index.tsx
skip_if: <%= name %>
after: // Hygen Target for new components
---
export { default as <%= name %> } from "@/components/<%= name %>/<%= name %>";