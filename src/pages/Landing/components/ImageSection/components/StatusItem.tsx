import { Colors } from "../../../../GraphAndGlobe/components/SmallStatItem";
import type { FC } from "react";

interface IStatusItem {
  label: JSX.Element;
  value: string;
  status: string;
  color: string;
}

export const StatusItem: FC<IStatusItem> = ({
  label,
  value,
  status,
  color,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        color: "#DCEEF9",
      }}
    >
      <div
        style={{
          
          fontSize: "2vh",
          textAlign: "center",
        }}
      >
        {/*Poverty headcount ratio <br /> at national poverty lines*/}
        {label}
      </div>
      <div
        style={{
          color: "#00C8B5",
          fontSize: "2.5vh",
          marginTop: ".7vh",
          textAlign: "center",
        }}
      >
        {/*33% of population*/}
        {value}
      </div>
      {/*<div*/}
      {/*  style={{*/}
      {/*    */}
      {/*    fontSize: "2vh",*/}
      {/*    fontWeight: 600,*/}
      {/*    marginTop: "1.45vh",*/}
      {/*    textAlign: "center",*/}
      {/*    padding: "1vh 3vh",*/}
      {/*    backgroundColor: "#fff",*/}
      {/*    color: "black",*/}
      {/*    borderRadius: 50,*/}
      {/*    width: "fit-content",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  /!*Low*!/*/}
      {/*  {status[0].toUpperCase() + status.slice(1)}*/}
      {/*</div>*/}
    </div>
  );
};
