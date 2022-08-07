import { CSSProperties } from "react";

import Document, { Head, Html, Main, NextScript } from "next/document";

import { createGetInitialProps } from "@mantine/next";

import settings from "@/config/settings";

const getInitialProps = createGetInitialProps();

/* Setting the scrollPaddingTop to the value of the headerSize so that anchor
 navigation takes the height of the header into account with navigating */
const htmlStyle: CSSProperties = {
  scrollPaddingTop: settings.headerSize,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="en" style={htmlStyle}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
