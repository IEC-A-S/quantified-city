import { ThemeProvider } from "@mui/material";
import { mobileTheme } from "./theme";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { UrbanPage } from "./pages/UrbanPage";
import { ExampleTheme } from "./pages/ExampleTheme";
import { Landing } from "./pages/Landing/Landing";
import { MainPage } from "./pages/MainPage";
import { ExpoCity } from "./pages/ExpoCity";
import { ProjectPage } from "./pages/ProjectPage";
import { Marketplace } from "./pages/Marketplace";
import { Governance } from "./pages/Governance";

const mobileRoutes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/urban",
    element: <UrbanPage />,
  },
  // {
  //   path: "/theme",
  //   element: <ExampleTheme />,
  // },
  // {
  //   path: "/city",
  //   element: <Landing />,
  //   state: {
  //     selectedCityName: "Moscow",
  //   },
  // },
  {
    path: "/city/:cityName",
    element: <Landing />,
  },
  // // {
  // //   path: "/test",
  // //   element: <BlueCubePopup category="Wealth" city="Dubai" />,
  // // },
  {
    path: "/project_page/:projectID",
    element: <ProjectPage />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/expo_city_dubai",
    element: <ExpoCity />,
  },
  {
    path: "/resilience_news",
    element: <MainPage />,
  },
  {
    path: "/governance",
    element: <Governance />,
  },
];

const router = createHashRouter(mobileRoutes);

export const MobileApp = () => {
  return (
    <ThemeProvider theme={mobileTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
