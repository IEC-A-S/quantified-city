import { STATUS_COLORS } from "../../pages/GraphAndGlobe/components/BigStatItem";
import type { IGraphData } from "../../pages/GraphAndGlobe/components/Graph3D/interfaces";
import { getAssessmentScore } from "../../utils/assessment";
import { V2_DATASET } from "./index";

const getUrbanIndexColor = (value: string) => {
  const key = value.replace("-", "").toUpperCase() as keyof typeof STATUS_COLORS;
  return STATUS_COLORS[key] ?? "#FFFFFF";
};

export const getV2Graph3DData = (): IGraphData[] =>
  V2_DATASET.cities
    .map((city) => {
      const environmental = getAssessmentScore(city.environmental);
      const social = getAssessmentScore(city.social);
      const governmental = getAssessmentScore(city.governmental);

      if (!environmental || !social || !governmental) {
        return null;
      }

      return {
        id: city.id,
        position: [environmental, social, governmental] as [number, number, number],
        label: city.label,
        color: getUrbanIndexColor(city.urbanIndex),
        status: city.urbanIndex,
      };
    })
    .filter((item): item is IGraphData => item !== null);
