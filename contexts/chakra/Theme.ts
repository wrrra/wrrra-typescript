import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: () => {
      return {
      "html, body": {
        backgroundColor: 'whiteGhost'
      },
    }},
  },
  fontSizes: {
    '2xs': '12px'
  },
  sizes: {
    screen: '100vh',
    '1/2screen': '50vh',
    '1/3screen': 'calc(100vh/3)'
  },
  colors: {
    _primary: "#00CC99",
    _secondary: "#7C3AA8",
    _accent: "#295466",
    whiteGhost: "#FBFBFF",
    blackRich: "#050F0C",
    primary: 
    {
      50: '#1affc6',
      100: '#17e6b2',
      200: '#00cc99',
      300: '#11b38a',
      400: '#0e9a76',
      500: '#0c8161',
      600: '#09684d',
      700: '#064e39',
      800: '#033525',
      900: '#001c11',
    },
    secondary: {
      100: "#AC77D0",
      200: "#9551C3",
      300: "#7C3AA8",
      400: "#5F2D81",
      500: "#431F5B",
    },
    accent: {
      100: "#4690AF",
      200: "#38728A",
      300: "#295466",
      400: "#1A3641",
      500: "#0C181D",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: '_accent'
      }
    },
    Input: {
      defaultProps: {
        focusBorderColor: '_primary'
      }
    },
  },
  shadows: {
    outline: "0 0 0 3px #00CC99"
  }
});
