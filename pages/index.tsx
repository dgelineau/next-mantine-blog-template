import React from "react";

import { NextSeo } from "next-seo";

import { Title } from "@mantine/core";

function Home() {
  return (
    <>
      <NextSeo title="Home" description="Home page of blog" />
      <Title order={2}>Home</Title>
    </>
  );
}

export default Home;
