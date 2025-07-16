import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SecondSection = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: "url(/assets/plantBg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // background: "#fff",
        position: "relative",
        height: "450px",
        paddingTop: "0px",
      }}
    >
      <div
        style={{
          paddingTop: "80px",
          padding: "16px",
        }}
      >
        <Typography
          variant="h2"
          style={{
            paddingTop: "0px",
            textAlign: "center",
          }}
        >
          Projects{" "}
          <span
            style={{
              fontFamily: "SuisseIntl-Regular",
            }}
          >
            marketplace
          </span>
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: "64px",
          height: "fit-content",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: "16px",
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
          <Button onClick={() => navigate("/marketplace")}>
            Project marketplace
          </Button>
        </div>
      </div>
    </div>
  );
};
