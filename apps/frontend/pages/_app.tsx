import { SessionProvider } from "next-auth/react";
import GlobalStyle from "../styled/globalStyles";
import { ModalProvider } from "styled-react-modal";
import styled from "styled-components";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ModalProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ModalProvider>
    </SessionProvider>
  );
}
