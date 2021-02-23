import Document, {Html, Head, Main, NextScript } from "next/document"
import { readFileSync } from "fs"
import { join } from "path"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
