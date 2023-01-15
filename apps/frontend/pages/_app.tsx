import GlobalStyle from "../styled/globalStyles";
import { ModalProvider } from "styled-react-modal";
import { SessionProvider, getSession } from "next-auth/react";
import Head from "next/head";
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const client = new ApolloClient({
    uri: `http://${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
  });
  return (
    <>
      <Head>
        <title>Minerva</title>
      </Head>
      <SessionProvider session={session}>
        <ModalProvider>
          <GlobalStyle />
          <ChakraProvider theme={theme}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </ChakraProvider>
        </ModalProvider>
      </SessionProvider>
    </>
  );
}
