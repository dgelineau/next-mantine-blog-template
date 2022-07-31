---
to: components/<%= name %>/<%= name %>.tsx
---

import useStyles from "@/components/<%= name %>/styles";
import { <%= name %>Props } from "@/components/<%= name %>/types";

export default function <%= name %>(props: <%= name %>Props) {
  const { classes } = useStyles();

  return (
    <div><%= name %></div>
  );
}



