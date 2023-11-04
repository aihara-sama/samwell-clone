import type { ThemeOptions } from "@mui/material";
import { fontFamily } from "fonts";

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: () => ({
      "html, body, #__next": {
        height: "100%",
      },

      "*::-webkit-scrollbar": {
        width: 10,
      },
      "*::-webkit-scrollbar-track": {
        width: 10,
        backgroundColor: "#0000000",
      },
      "*::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: "#dddddd",
        ":hover": {
          backgroundColor: "#555555",
        },
      },
    }),
  },
};

const typography: ThemeOptions["typography"] = {
  fontFamily,
};

export const baseTheme: ThemeOptions = {
  components,
  typography,
};
