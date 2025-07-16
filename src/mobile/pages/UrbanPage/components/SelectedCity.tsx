import { CITY_DATA } from "../../../../data";
import type { FC } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { RatingBubble } from "../../../components/RatingBubble";
import { StatusBubble } from "../../../components/StatusBubble";
import { SelectedMap } from "../../../../pages/GraphAndGlobe/components/SelectedMap";
import { HowTheRatingWorks } from "../../../components/HowTheRatingWorks";
import { useNavigate } from "react-router-dom";

interface SelectedCityProps {
  selectedCityName: string;
}

export const useSelectedCityStyles = makeStyles()({
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
  },
  statusColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
  },
  statusRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "32px",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export const SelectedCity: FC<SelectedCityProps> = ({ selectedCityName }) => {
  const { classes } = useSelectedCityStyles();
  const cityData = CITY_DATA.find((city) => city.City === selectedCityName);

  const navigate = useNavigate();

  const URI = cityData?.["Urban Resilience Index"]?.replace("-", "");
  const populationDesc = cityData?.["Population description"];
  const populationDensity = cityData?.["Population density description"];
  const climate = cityData?.["Climate description"];

  const numberWithSpaces = (number: number | string | undefined) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div
      className={classes.column}
      style={{
        marginTop: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant={"h1"}>{selectedCityName}</Typography>
        <Typography variant={"h3"}>{cityData?.Country}</Typography>
      </div>
      <Typography variant={"h5"}>{cityData?.["Text description"]}</Typography>
      <div className={classes.row}>
        <Typography variant={"h3"}>
          Urban <br />
          resilience index
        </Typography>
        <RatingBubble rating={URI} />
      </div>
      <div className={classes.column}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            variant={"h5"}
            style={{
              flex: 2,
            }}
          >
            Population in urban cluster
          </Typography>
          <Typography
            variant={"h4"}
            style={{
              flex: 3,
            }}
          >
            {numberWithSpaces(cityData?.Population)}
          </Typography>
          <StatusBubble text={populationDesc} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            variant={"h5"}
            style={{
              flex: 2,
            }}
          >
            Population city proper
          </Typography>
          <Typography
            variant={"h4"}
            style={{
              flex: 3,
            }}
          >
            {numberWithSpaces(cityData?.["Population city proper"])}
          </Typography>
          <StatusBubble text={populationDesc} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            variant={"h5"}
            style={{
              flex: 2,
            }}
          >
            Population <br />
            density
          </Typography>
          <Typography
            variant={"h4"}
            style={{
              flex: 3,
            }}
          >
            {cityData["Population density"] + " people/ha"}
          </Typography>
          <StatusBubble text={populationDensity} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            variant={"h5"}
            style={{
              flex: 2,
            }}
          >
            Climate
          </Typography>
          <Typography
            variant={"h4"}
            style={{
              flex: 3,
            }}
          >
            {cityData.Climate}
          </Typography>
          <StatusBubble text={climate} />
        </div>
      </div>
      <SelectedMap selectedCityName={selectedCityName} isMobile={true} />
      <Typography
        variant={"h5"}
        style={{
          fontSize: "8px",
          textAlign: "center",
        }}
      >
        The height of a bar represents the total number of people in a grid
        cell.
      </Typography>
      <div className={classes.statusRow}>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Environmental</Typography>
          <StatusBubble status={cityData?.Environmental} variant="outlined" />
        </div>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Social</Typography>
          <StatusBubble status={cityData?.Social} variant="outlined" />
        </div>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Governmental</Typography>
          <StatusBubble status={cityData.Governmental} variant="outlined" />
        </div>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Current state</Typography>
          <StatusBubble status={cityData["Current state"]} variant="outlined" />
        </div>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Ability & Willingness</Typography>
          <StatusBubble status={cityData["Ability & Willingness"]} />
        </div>
      </div>
      {/*<div*/}
      {/*  className={classes.statusRow}*/}
      {/*  style={{*/}
      {/*    width: "75%",*/}
      {/*  }}*/}
      {/*>*/}
      {/* */}
      {/*</div>*/}
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Typography variant={"h3"}>Basic needs</Typography>
          <RatingBubble
            rating={cityData["Basic needs Scope"].replace("-", "")}
            size={"small"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Typography variant={"h3"}>Natural risk exposure</Typography>
          <StatusBubble
            status={cityData["Natural Risk Exposure"]}
            variant={"opacity"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Typography variant={"h3"}>Transport resilience index</Typography>
          <StatusBubble
            status={cityData["Transport Resilience Index"]}
            variant={"opacity"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Typography variant={"h3"}>Urban sentiment index</Typography>
          <StatusBubble
            status={cityData["Urban Sentiment Index"]}
            variant={"opacity"}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "16px",
        }}
      >
        <HowTheRatingWorks />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        <Button
          onClick={() => {
            navigate("/city/" + selectedCityName);
          }}
          variant="contained"
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
};
