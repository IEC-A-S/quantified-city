import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FirstSection = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: "url(/assets/globus.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
        // background: "#fff",
        position: "relative",
        height: "100vh",
        paddingTop: "0px",
      }}
    >
      <div
        style={{
          padding: "16px",
          paddingTop: "80px",
        }}
      >
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "SuisseIntl-Regular",
            }}
          >
            Global Resilience Platform{" "}
          </span>
          is a data-driven resilience diagnostic observatory for the Global
          South which provides
          <br /> <br />
          <span
            style={{
              fontFamily: "SuisseIntl-Regular",
            }}
          >
            Ratings & monitoring
          </span>{" "}
          tool for cities and corporates
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: "30px",
          height: "fit-content",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: "32px",
            paddingLeft: "16px",
            paddingRight: "16px",
            boxSizing: "border-box",
          }}
        >
          <Typography variant={"h4"} style={{ textAlign: "center" }}>
            Reimagining ESG metrics through the lens of Resilience
          </Typography>
          <Typography variant={"h4"} style={{ textAlign: "center" }}>
            Focusing on basic needs satisfaction and human’s dignity
          </Typography>
          <Typography variant={"h4"} style={{ textAlign: "center" }}>
            Introducing transparent methodology & AI-driven data handling
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => navigate("/urban")}>Urban {">"}</Button>
          <Button
            style={{
              opacity: 0.5,
            }}
          >
            Corporate {">"}
          </Button>
        </div>
      </div>
    </div>
  );
};
