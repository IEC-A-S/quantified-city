import { Button } from "@mui/material";
import { FC, useState } from "react";

export interface INewsItem {
  id: number;
  category: string;
  title: string;
}

interface NewsItemProps {
  newsItem: INewsItem;
}
export const NewsItem: FC<NewsItemProps> = ({ newsItem }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#2D67FF" : "#fff",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        border: "1px solid #BFBFBF",
        height: "125px",
        borderRadius: "30px",
        boxSizing: "border-box",
        padding: "2vh 3.5vw",
        gap: "2vw",
        
        fontWeight: 400,
        color: hovered ? "#fff" : "#000",
      }}
    >
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          gap: ".5vh",
        }}
      >
        <div
          style={{
            opacity: 0.5,
          }}
        >
          Category
        </div>
        <div>{newsItem.category}</div>
      </div>
      <div
        style={{
          flex: 8,
          
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
        }}
      >
        {newsItem.title}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1vw",
        }}
      >
        <Button
          style={{
            
            textTransform: "none",
            border: "1px solid #BFBFBF",
            color: hovered ? "#fff" : "#000",
            borderRadius: "50px",
            padding: "0 25px",
            textWrap: "nowrap",
            height: "4vh",
            transition: "none",
          }}
        >
          Follow
        </Button>
        <Button
          style={{
            
            textTransform: "none",
            color: hovered ? "#000" : "#fff",
            backgroundColor: hovered ? "#fff" : "#2D67FF",
            borderRadius: "50px",
            padding: "0 25px",
            textWrap: "nowrap",
            height: "4vh",
            transition: "none",
          }}
        >
          Read more
        </Button>
      </div>
    </div>
  );
};
