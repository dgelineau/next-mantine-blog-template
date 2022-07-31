import React from "react";

import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { ErrorPage } from "@/components/index";

const NotFound: NextPage = () => (
  <>
    <NextSeo title="404" description="404 Not Found" />
    <ErrorPage
      errorCode={404}
      title="You have found a secret place."
      description="Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL."
    />
  </>
);

export default NotFound;
