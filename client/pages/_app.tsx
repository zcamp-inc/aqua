import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import React, {useEffect} from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from '../theme'
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000");


function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = React.useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);


  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href="/aqua-icon.svg" />
          <title>zcamp web</title>
        </Head>

        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp
