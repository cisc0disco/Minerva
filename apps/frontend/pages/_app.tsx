import GlobalStyle from "../styled/globalStyles";
import { ModalProvider } from "styled-react-modal";
import { SessionProvider, getSession } from "next-auth/react";
import Head from "next/head";
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";
import Snowfall from "react-snowfall";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Minerva</title>
      </Head>
      <SessionProvider session={session}>
        <ModalProvider>
          <GlobalStyle />
          <ChakraProvider theme={theme}>
            <Snowfall />
            <Component {...pageProps} />
          </ChakraProvider>
        </ModalProvider>
      </SessionProvider>
    </>
  );
}
