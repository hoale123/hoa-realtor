import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router';
import Head from 'next/head';
import Nprogress from 'nprogress';

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>

    </Head>
    <ChakraProvider>
      {/*For Chakra UI to work correctly you need ot set up the ChakraProvider at the root of your application  */}
      <Layout>
        <Component {...pageProps} />
        {/* Pass All pageProps */}
      </Layout>
    </ChakraProvider>
    </>
    )
}

export default MyApp
