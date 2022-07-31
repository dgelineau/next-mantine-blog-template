import React from "react";

import { NextSeo } from "next-seo";

import { Title } from "@mantine/core";

function Projects() {
  return (
    <>
      <NextSeo title="Projects" description="Projects created by blog owner" />
      <Title order={2}>Projects</Title>
    </>
  );
}

export default Projects;
