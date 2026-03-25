import { ThemeProvider } from "@mui/material";
import { mobileTheme } from "./theme";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { UrbanPage } from "./pages/UrbanPage";
import { Landing } from "./pages/Landing/Landing";
import { ProjectPage } from "./pages/ProjectPage";

const mobileRoutes = [
  {
    path: "/",
    element: <UrbanPage />,
  },
  {
    path: "/urban",
    element: <UrbanPage />,
  },
  {
    path: "/city/:cityName",
    element: <Landing />,
  },
  {
    path: "/project_page/:projectID",
    element: <ProjectPage />,
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
