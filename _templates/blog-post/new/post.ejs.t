---
to: posts/<%= slug %>.mdx
---

---
title: <%= title %>
tags: <% for (tag of tags) { %>
  - <%= tag %><% } %>
date: <%= date %>
excerpt: <%= excerpt %>
image: <%= image %>
category: <%= category %>
author: { name: <%= author %>, image: /images/authors/<%= authorImage %> }
---


