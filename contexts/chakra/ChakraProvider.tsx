import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "~/contexts/chakra/Theme";

const ChakraWrapper = ({ children }: any) => (
  <ChakraProvider theme={theme} resetCSS>
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      {children}
    </ColorModeProvider>
  </ChakraProvider>
);

export default ChakraWrapper;
