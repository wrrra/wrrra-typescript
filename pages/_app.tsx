import { AppProps } from "next/app";
import React, { ReactNode } from "react";
import LayoutDefault from "~/components/Layout/LayoutDefault";
import ChakraProvider from "~/contexts/chakra/ChakraProvider";

interface DefProps {
  children: JSX.Element;
}

function MyApp({ Component, pageProps }: AppProps) {
  // const Layout =
  // Component.Layout || (({ children }: DefProps) => <>{children}</>);

  return (
    <ChakraProvider>
      {/* <Layout> */}
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
      {/* </Layout> */}
    </ChakraProvider>
  );
}

export default MyApp;
