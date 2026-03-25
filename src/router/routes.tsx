import { GraphAndGlobe } from "../pages/GraphAndGlobe";
import { Landing } from "../pages/Landing";

export const routes = [
  // {
  //   path: "/",
  //   element: <MainPage />,
  // },
  {
    // path: "/urban",
    path: "/",
    element: <GraphAndGlobe />,
  },
  {
    path: "/city/:cityName",
    element: <Landing />,
  },
  // {
  //   path: "/test",
  //   element: <TestPage />,
  // },
  // {
  //   path: "/project_page/:projectID",
  //   element: <ProjectPage />,
  // },
  // {
  //   path: "/marketplace",
  //   element: <Marketplace />,
  // },
  // {
  //   path: "/expo_city_dubai",
  //   element: <ExpoCityDubai />,
  // },
  // {
  //   path: "/resilience_news",
  //   element: <News />,
  // },
  // {
  //   path: "/urban_table",
  //   element: <TablePopup />,
  // },
];
