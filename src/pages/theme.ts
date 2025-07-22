import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#007378",
    },
    secondary: {
      main: "#959595",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif !important",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Roboto, sans-serif !important",
        },
        "*": {
          fontFamily: "Roboto, sans-serif !important",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              color: "#fff",
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#2D67FF",
                borderColor: "#007378",
              },
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "none",
          borderRadius: 40,
          marginTop: 96,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#D9D9D9",
          "&.Mui-checked": {
            color: "#2D67FF",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontFamily: "Roboto, sans-serif !important",
            fontWeight: 600,
            fontSize: "2vh",
            backgroundColor: "#fff",
          },
          "& .MuiTableCell-head": {
            fontFamily: "Roboto, sans-serif !important",
            fontWeight: 600,
            fontSize: "2vh",
            color: "#fff",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
  },
});
