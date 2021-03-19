import Head from 'next/head'

import useDarkMode from 'use-dark-mode';

import FaviconWhite from '~/img/favicon-white.png'
import FaviconBlack from '~/img/favicon-black.png'
import Gtag from  'components/Gtag'

const HeadMeta = ({ title, description }) => {
  const darkMode = useDarkMode();
  return(
    <Head>
      <title>{ title || '' }</title>
      <meta name="description" content={ description } />
      { Gtag({trackingId:"UA-170200254-1"})}
      <link rel="icon" type="image/png" href={ darkMode.value ? FaviconWhite : FaviconBlack } />
      <meta name="google-site-verification" content="YXFUpMLagLA10GTfwy3fLRsL8eNz3f4VD58tqZZ81lc" />
    </Head>
  )
}
export default HeadMeta


