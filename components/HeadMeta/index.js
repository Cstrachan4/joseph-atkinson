import Head from "next/head";

import useDarkMode from "@fisch0920/use-dark-mode";

import Gtag from "components/Gtag";

const HeadMeta = ({ title, description }) => {
  const darkMode = useDarkMode();
  return (
    <Head>
      <title>{title || ""}</title>
      <meta name="description" content={description} />
      {Gtag({ trackingId: "UA-170200254-1" })}
      <link
        id="favicon"
        rel="icon"
        type="image/png"
        href={
          darkMode.value ? "/img/favicon-white.png" : "/img/favicon-black.png"
        }
      />
      <meta
        name="google-site-verification"
        content="YXFUpMLagLA10GTfwy3fLRsL8eNz3f4VD58tqZZ81lc"
      />
    </Head>
  );
};
export default HeadMeta;
