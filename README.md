# next-mantine-blog-template

![MIT License](https://img.shields.io/github/license/dgelineau/next-mantine-blog-template)
![Open Issues](https://img.shields.io/github/issues/dgelineau/next-mantine-blog-template)
![Stars](https://img.shields.io/github/stars/dgelineau/next-mantine-blog-template)

A basic blog template that generates all of the posts from the `posts` folder statically using Next.js and the mantine component library.

[View Demo Hosted on Vercel](https://next-mantine-blog-template.vercel.app/)

- ⚡ [Next.js](https://nextjs.org/) SSG
- 🧠 TypeScript
- 🏗️ [Mantine](https://mantine.dev/)
- 🤔 ESLint
- 💅 Prettier
- 🤖 SEO Meta Data
- 🌙 Dark / Light Mode
- ✏️ [Hygen](http://www.hygen.io/)
- 📍 Absolute Imports
- 💬 [Giscus](https://giscus.app/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/dgelineau/next-mantine-blog-template
```

Go to the project directory

```bash
  cd next-mantine-blog-template
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

## Hygen References

Hygen is used to generate both blog posts frontmatter and components and more information about both of the generators can be found below.

### Create New Blog Post

```bash
  npx hygen blog-post new
```

| Parameter  | Type     | Description                                                                      |
| :--------- | :------- | :------------------------------------------------------------------------------- |
| `title`    | `string` | **Required**. Title of your blog post                                            |
| `excerpt`  | `string` | **Required**. Short description about the blog post                              |
| `category` | `string` | **Required**. The category of the blog post                                      |
| `tags`     | `string` | **Required**. A comma separated list of tags relevant to the blog post           |
| `image`    | `string` | **Required**. A URL to the image that will be used as the cover of the blog post |
| `author`   | `string` | **Required**. Name of the author                                                 |
| `author`   | `string` | **Required**. Name of the author                                                 |
| `date`     | `string` | **Optional**. Date of the blog post in `YYYY-MM-DD` format                       |

If we create a new blog post using this generator titled `Example Project Title` then we should generate a new markdown file with the title being automatically slugified `posts/example-project-title.mdx`.

Below is an example of frontmatter that will be generated based on the input passed into the generator.

```mdx
---
title: Example Project Title
tags:
  - hygen
  - generators
  - blogging
date: 2022-07-31
excerpt: This is a guide on how to create a blog post using a hygen generator
image: /images/generate-post.jpeg
category: Hygen
author: { name: Devin Gelineau, image: /images/authors/devin-gelineau.jpeg }
---
```

Please note that the author object has an image in the `public/images/authors`, this file name will
automatically be generated as a slugified file name. The default file extension is .jpeg but can be updated
in the `templates/blog-post/post.ejs.t` file.

### Create New Component

This will generate a new component in our `components` folder with a main component file, the styles file and the types file all automatically created and imported for use.

```bash
  npx hygen component new
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `name`    | `string` | **Required**. Name of the component |

If we pass in `Carousel` as the name of the component then the following files will be generated in the `components/Carousel` folder and the component will be automatically appended to the `components/index.tsx` file and exported for use.

- `Carousel.tsx`
- `styles.ts`
- `types.d.ts`

### Comment support

This template is using [Giscus](https://giscus.app/) to support comments. These comments are automatically added to a discussion on your Github repository. You can find more setup instructions on the Giscus website itself. You need to update the `giscus` object in `config/settings` and change the follow variables

- `repo`
- `repoId`
- `category`
- `categoryId`

You can find the correct values for these variables on the Giscus website under the `Enable giscus` section after filling out the configuration; once you have them ensure that you are properly setting your environment variables so that they will be pulled and used properly.

```js
import { Settings } from "@/config/types";

const settings: Settings = {
  ...applicationSettings,
  giscus: {
    repo: env.NEXT_PUBLIC_GISCUS_REPO,
    repoId: env.NEXT_PUBLIC_GISCUS_REPO_ID,
    category: env.NEXT_PUBLIC_GISCUS_CATEGORY,
    categoryId: env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    mapping: "pathname",
    loading: "lazy",
    lang: "en",
  },
};
```

## Contributing

Contributions are always welcome!
