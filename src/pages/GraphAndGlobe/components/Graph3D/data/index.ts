import type { IGraphData } from "../interfaces";

// Dubai -> E/S/G - 3/5/5 -> #A0DA8B Strong
// Dubai Expo City -> E/S/G - 4/5/5 -> #35CB00 Very strong
// Valparaiso -> E/S/G - 2/2/1 -> #FF632F Low
// Dar as Salaam -> E/S/G - 1/1/1 -> #FF3B29 Very low
// Adoni -> E/S/G - 4/1/4 -> #FF9B3F Average
// Natal -> E/S/G - 4/3/3 -> #FF9B3F Average
// Brazzaville -> E/S/G - 3/1/3 -> #FF632F Low
// Almaty -> E/S/G - 3/2/2 -> #FF632F Low
// Cape Town 3/3/4 -> #FFD748 B-2
// Mexico City 2/2/2 -> #FF632F C-2
// Jakarta 2/3/3 -> #FFD748 B-3
// Panama 3/4/3 -> #ECE38E B-1
// Amman 2/4/4 -> #ECE38E B-1
// Bangkok 2/3/2 -> #FFD748 B-3
// Colombo 3/3/3 -> #FFD748 B-2

export const mockData: IGraphData[] = [
  {
    position: [3, 5, 5],
    label: "Dubai",
    color: "#B7DE86",
    status: "A-3",
  },
  {
    position: [4, 5, 5],
    label: "Expo City Dubai",
    color: "#75D652",
    status: "A-2",
  },
  { position: [2, 2, 1], label: "Valparaiso", color: "#FF9B3F", status: "C-1" },
  {
    position: [1, 1, 1],
    label: "Dar es Salaam",
    color: "#FF632F",
    status: "C-2",
  },
  { position: [4, 1, 4], label: "Adoni", color: "#FF632F", status: "C-2" },
  { position: [4, 3, 3], label: "Natal", color: "#FFD748", status: "B-2" },
  {
    position: [3, 1, 3],
    label: "Brazzaville",
    color: "#FF9B3F",
    status: "C-1",
  },
  { position: [3.4, 4, 3], label: "Almaty", color: "#D6E15A", status: "B-1" },
  {
    position: [3, 3, 4],
    label: "Cape Town",
    color: "#FFD748",
    status: "B-2",
  },
  {
    position: [2, 2, 2],
    label: "Mexico City",
    color: "#FF632F",
    status: "C-2",
  },
  {
    position: [2, 3, 3],
    label: "Jakarta",
    color: "#FFD748",
    status: "B-3",
  },
  {
    position: [3, 4.4, 3],
    label: "Panama City",
    color: "#ECE38E",
    status: "B-1",
  },
  {
    position: [2, 4, 4],
    label: "Amman",
    color: "#ECE38E",
    status: "B-1",
  },
  {
    position: [2, 3, 2],
    label: "Bangkok",
    color: "#FFD748",
    status: "B-3",
  },
  {
    position: [3, 3, 3],
    label: "Colombo",
    color: "#FFD748",
    status: "B-2",
  },
  {
    position: [3, 4, 3.4],
    label: "Astana",
    color: "#ECE38E",
    status: "B-1",
  },
  {
    position: [1, 2, 3],
    label: "Lahore",
    color: "#FF632F",
    status: "C-2",
  },
  {
    position: [3, 1, 2],
    label: "Nairobi",
    color: "#F74B3C",
    status: "C-3",
  }
];
