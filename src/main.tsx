import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { theme }              from "./pages/theme";
import { Box, ThemeProvider } from "@mui/material";
import { routes }             from "./router/routes";
import { MobileApp } from "./mobile/MobileApp";
import { md5 } from "js-md5";

const rootElem = document.getElementById("root");

if (!rootElem) {
  throw new Error("There is no root element in HTML!");
}

const router = createHashRouter(routes);

export const DesktopApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export const App = () => {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < 1000 || window.innerHeight > window.innerWidth
  );

  // console.log(md5("__PASSWORD__"));
  const hash = "c91aa74c2296fe068fb55d9cc1952046";

  const user = localStorage.getItem("user");
  const clientPass = localStorage.getItem("password");

  if (!user || !clientPass || user !== "admin" || md5(clientPass) !== hash) {
    const password = prompt("Enter password") || "";

    if (md5(password) === hash) {
      localStorage.setItem("user", "admin");
      localStorage.setItem("password", password);
    } else {
      return <div>Wrong password</div>;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000 || window.innerHeight > window.innerWidth) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.StrictMode>
      {isMobile ? <MobileApp /> : <DesktopApp />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(rootElem).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
