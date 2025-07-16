export interface ICityData {
  City: string;
  Satisfaction: number;
  Efficiency: number;
  Accessibility: number;
  Safety: number;
  Affordability: number;
  "Environmental impact": number;
}

export interface ICityDTO {
  City: string;
  tr_graph: {
    Satisfaction: number;
    Efficiency: number;
    Accessibility: number;
    Safety: number;
    Affordability: number;
    "Environmental impact": number;
  };
}
