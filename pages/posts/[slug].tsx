import React from "react";

import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

import {
  ActionIcon,
  Anchor,
  Code,
  Group,
  Table as ReactTable,
  Title,
} from "@mantine/core";
import { Prism } from "@mantine/prism";

import { ArrowNarrowLeft } from "tabler-icons-react";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

import { YouTube } from "@/components/index";

import { PostMeta, getPostFromSlug, getSlugs } from "@/helpers/blog";

import Routes from "@/config/routes";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <NextSeo title={post.meta.title} description={post.meta.excerpt} />
      <Group>
        <Link href={Routes.blog.href} passHref>
          <ActionIcon component="a" aria-label="back to blog list">
            <ArrowNarrowLeft size={34} />
          </ActionIcon>
        </Link>
        <Title order={1}>{post.meta.title}</Title>
      </Group>

      <MDXRemote
        {...post.source}
        components={{
          Image,
          YouTube,
          ReactTable,
          code: (props: any) => <Code {...props} />,
          pre: (props: any) => {
            const matches = (props.children.props.className || "").match(
              /language-(?<lang>.*)/
            );

            return (
              <Prism
                language={
                  matches && matches.groups && matches.groups.lang
                    ? matches.groups.lang
                    : ""
                }
                mb={20}
              >
                {props.children.props.children}
              </Prism>
            );
          },
          h1: ({ ref: _, ...rest }) => <Title order={1} {...rest} />,
          h2: ({ ref: _, ...rest }) => <Title order={2} {...rest} />,
          h3: ({ ref: _, ...rest }) => <Title order={3} {...rest} />,
          h4: ({ ref: _, ...rest }) => <Title order={4} {...rest} />,
          h5: ({ ref: _, ...rest }) => <Title order={5} {...rest} />,
          h6: ({ ref: _, ...rest }) => <Title order={6} {...rest} />,
          a: ({ ref: _, ...rest }) => <Anchor {...rest} />,
        }}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
