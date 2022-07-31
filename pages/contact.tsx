import React from "react";

import { NextSeo } from "next-seo";

import { Title } from "@mantine/core";

function Contact() {
  return (
    <>
      <NextSeo title="Contact" description="Contact me" />
      <Title order={2}>Contact</Title>
    </>
  );
}

export default Contact;
