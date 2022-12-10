import GlobalStyle from "../styled/globalStyles";
import { ModalProvider } from "styled-react-modal";
import { SessionProvider } from "next-auth/react";

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
