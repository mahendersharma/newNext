// styles/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#FF6347",
    secondary: "#4169E1",
    // Define more colors as needed
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
    // Define more fonts as needed
  },
  // Add more customizations such as spacing, breakpoints, etc.
});

export default theme;
