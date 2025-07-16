import {
  createTheme,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export const mobileTheme = createTheme({
  palette: {
    primary: {
      light: "#2D67FF",
      main: "#fff",
      dark: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2D67FF",
    },
    background: {
      default: "#000",
    },
  },
  typography: {
    fontFamily: "SuisseIntl-Thin",
    h1: {
      color: "#fff",
      fontSize: 38,
      fontWeight: 300,
      lineHeight: "40px",
    },
    h2: {
      color: "#fff",
      fontSize: 24,
    },
    h3: {
      color: "#fff",
      fontSize: 18,
    },
    h4: {
      color: "#fff",
      fontSize: 14,
    },
    h5: {
      color: "#FFFFFF99",
      fontSize: 14,
    },
    h6: {
      color: "#FFFFFF",
      fontSize: 12,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          pointerEvents: "all",
          textTransform: "none",
          borderRadius: "16px",
          fontFamily: "SuisseIntl-Regular",
          fontSize: 14,
          fontWeight: 400,
          backgroundColor: "#2D67FF",
          width: "fit-content",
          padding: "3px 14px",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          zIndex: 2,
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "#2429B5",
            color: "#FFFFFF",
            border: "1px solid #FFFFFF33",
          },
        },
        {
          props: { variant: "text" },
          style: {
            backgroundColor: "#FFF",
            color: "#000",
            "&:hover": {
              backgroundColor: "#fff",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            "&:hover": {
              backgroundColor: "#2D67FF",
            },
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#2D67FF",
                borderColor: "#007378",
              },
            },
          },
          "& .MuiSwitch-track": {
            opacity: 1,
            backgroundColor: "#767676",
            height: 20,
            borderRadius: 10,
          },
          "& .MuiSwitch-thumb": {
            transform: "translateY(3px)",
          },
        },
      },
    },
  },
});

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  "& .MuiToggleButtonGroup-grouped": {
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#fff",
    textTransform: "none",
    pointerEvents: "all",
  },
}));

export const StyledToggleButton = styled(ToggleButton)({
  "&.MuiToggleButton-root": {
    fontFamily: "SuisseIntl-Regular",
    fontSize: "30px",
    textTransform: "none",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backgroundColor: "transparent",
    width: "calc(100vw / 2 - 16px)",
    maxWidth: "250px",
    padding: "0px 0px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
  "&.Mui-selected": {
    backgroundColor: "#fff",
    color: "#000",
  },
});
