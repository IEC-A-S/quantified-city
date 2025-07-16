import { GraphAndGlobe } from "../pages/GraphAndGlobe";
import { Landing } from "../pages/Landing";
import { BlueCubePopup } from "../pages/BlueCubePopup";
import { ProjectPage } from "../pages/ProjectPage";
import { Marketplace } from "../pages/Marketplace";
import { MainPage } from "../pages/MainPage";
import { TablePopup } from "../pages/TablePopup";
import { ExpoCityDubai } from "../pages/ExpoCityDubai";
import { News } from "../pages/News";
import { SocialChart } from "../pages/SocialPopup/SocialChart";
import { SocialPopup } from "../pages/SocialPopup";
import { Governance } from "../pages/Governance";
import { TestPage } from "../data/transport/testPage";

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/urban",
    element: <GraphAndGlobe />,
  },
  {
    path: "/city",
    element: <Landing />,
    state: {
      selectedCityName: "Moscow",
    },
  },
  {
    path: "/city/:cityName",
    element: <Landing />,
  },
  // {
  //   path: "/test",
  //   element: <TestPage />,
  // },
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
    element: <ExpoCityDubai />,
  },
  {
    path: "/resilience_news",
    element: <News />,
  },
  {
    path: "/governance",
    element: <Governance />,
  },
  // {
  //   path: "/urban_table",
  //   element: <TablePopup />,
  // },
];
