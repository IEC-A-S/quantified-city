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

// {
//   "ID": 1,
//   "City": "Dubai",
//   "Country": "UAE",
//   "Sentiment Index": "Very strong",
//   "Environmental": "Strong",
//   "Social": "Strong",
//   "Governmental": "Strong",
//   "Air pollution": 2,
//   "Water pollution": 4,
//   "Land use and waste": 5,
//   "Natural disaster hazards": 5,
//   "Water availability": 4,
//   "Food availability": 5,
//   "Energy availability": 4,
//   "Health": 4,
//   "Education": 5,
//   "Wealth": 5,
//   "Safety": 5,
//   "Livability": 5,
//   "Transport": 5,
//   "Inclusion": 3,
//   "Accountability": 5,
//   "City budget": 4,
//   "SME": 4,
//   "Public services": 5,
//   "Sustainability commitment": 5
// },
export interface ISentimentDTO {
  ID: number;
  City: string;
  Country: string;
  Sentiment: number;
  "Sentiment Index": number;
  Environmental: string;
  Social: string;
  Governmental: string;
  "Air pollution": number;
  "Water pollution": number;
  "Land use and waste": number;
  "Natural disaster hazards": number;
  "Water availability": number;
  "Food availability": number;
  "Energy availability": number;
  Health: number;
  Education: number;
  Wealth: number;
  Safety: number;
  Livability: number;
  Transport: number;
  Inclusion: number;
  Accountability: number;
  "City budget": number;
  SME: number;
  "Public services": number;
  "Sustainability commitment": number;
}
