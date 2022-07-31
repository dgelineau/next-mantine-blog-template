import { useMemo, useState } from "react";

import type { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { ActionIcon, Grid, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

import { Search, X } from "tabler-icons-react";

import { ArticleCard } from "@/components/index";

import { PostMeta, getAllPosts } from "@/helpers/blog";

function Blog({ posts }: { posts: PostMeta[] }) {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  /* Filtering the posts based on the search input. */
  const filtered = useMemo(() => {
    if (debounced)
      return posts.filter(
        (post) =>
          post.title
            .toLocaleLowerCase()
            .includes(debounced.toLocaleLowerCase()) ||
          post.category
            .toLocaleLowerCase()
            .includes(debounced.toLocaleLowerCase())
      );

    return posts;
  }, [debounced, posts]);

  const clearFilter = () => {
    setValue("");
  };

  return (
    <>
      <NextSeo title="Blog Posts" description="List of blog posts" />
      <Grid align="stretch">
        <Grid.Col sm={12}>
          <TextInput
            placeholder="Search..."
            value={value}
            icon={<Search size={14} />}
            rightSection={
              debounced && (
                <ActionIcon onClick={clearFilter}>
                  <X size={14} />
                </ActionIcon>
              )
            }
            style={{ flex: 1 }}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </Grid.Col>
        {filtered.map((post) => (
          <Grid.Col xs={12} sm={6} key={post.slug}>
            <ArticleCard
              link={`/posts/${post.slug}`}
              title={post.title}
              description={post.excerpt}
              author={post.author}
              image={post.image}
              category={post.category}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().map((post) => post.meta);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
