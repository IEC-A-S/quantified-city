import type { FC } from "react";
import { useSelectedCityStyles } from "./components/styles";
import { StatItem } from "./components/StatItem";
import { BigStatItem } from "./components/BigStatItem";
import { SmallStatItem } from "./components/SmallStatItem";
import { Button, Typography } from "@mui/material";
import { SelectedMap } from "./components/SelectedMap";
import { CITY_DATA } from "../../data";
import { useNavigate } from "react-router-dom";

interface ISelectedCityProps {
  selectedCityName: string;
}

export const SelectedCity: FC<ISelectedCityProps> = ({ selectedCityName }) => {
  const { classes } = useSelectedCityStyles();

  const navigate = useNavigate();

  const cityData = CITY_DATA.find((city) => city.City === selectedCityName);

  const numberWithSpaces = (number: number | string) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <>
      {cityData && (
        <div className={classes.root}>
          <div className={classes.titleWrapper}>
            <div className={classes.cityNameAndCountryNameWrapper}>
              <div className={classes.cityName}>{selectedCityName}</div>
              <div className={classes.countryName}>{cityData.Country}</div>
            </div>
            <div
              className={classes.cityDescription}
              style={{
                maxWidth: "15vh",
              }}
            >
              {/*Largest city in the*/}
              {/*<br />*/}
              {/*country, centre <br />*/}
              {/*of region*/}
              {cityData["Text description"]}
              <br />
            </div>
          </div>
          <div className={classes.statWrapper}>
            <StatItem
              color="#FF3B29"
              title="Population in urban cluster"
              value={numberWithSpaces(cityData.Population)}
              status={cityData["Population description"]}
            />
            <StatItem
              color="#FF3B29"
              title="Population city proper"
              value={numberWithSpaces(cityData["Population city proper"])}
              status={cityData["Population description"]}
            />
            <StatItem
              color="#FF3B29"
              title="Population density"
              value={cityData["Population density"] + " people/ha"}
              status={cityData["Population density description"]}
            />
            <StatItem
              color="#2D67FF"
              title="Climate"
              value={cityData.Climate}
              status={cityData["Climate description"]}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "3.7vh",
              marginLeft: "-2.1vh",
              paddingLeft: "2vh",
              borderLeft: "1px solid #fff",
              height: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "auto",
              }}
            >
              <BigStatItem
                label="Urban resilience index"
                status={cityData["Urban Resilience Index"]}
                isFirst={true}
              />
              <div className={classes.smallItemsListWrapper}>
                <SmallStatItem
                  label="Environmental"
                  status={cityData.Environmental}
                />
                <SmallStatItem label="Social" status={cityData.Social} />
                <SmallStatItem
                  label="Governmental"
                  status={cityData.Governmental}
                />
              </div>
              <div
                className={classes.smallItemsListWrapper}
                style={{
                  marginTop: "2.7vh",
                }}
              >
                {/*<SmallStatItem label="Current state" status="Low" />*/}
                <SmallStatItem
                  label="Ability & Willingness"
                  status={cityData["Ability & Willingness"]}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "auto",
                marginLeft: "1.5vh",
                gap: "3.2vh",
              }}
            >
              <BigStatItem
                label="Basic needs"
                subLabel="Scope 0"
                status={cityData["Basic needs Scope"]}
              />
              <BigStatItem
                label="Transport resilience index"
                status={cityData["Transport Resilience Index"]}
              />
              {/*<BigStatItem label="Corporate resilience" status="Low" />*/}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "auto",
                marginLeft: "1.5vh",
                gap: "3.2vh",
              }}
            >
              <BigStatItem
                label="Natural risk exposure"
                status={cityData["Natural Risk Exposure"]}
              />
              <BigStatItem
                label="Urban sentiment index"
                status={cityData["Urban Sentiment Index"]}
              />
            </div>
          </div>
        </div>
      )}
      <SelectedMap selectedCityName={selectedCityName} />
      <Button
        onClick={() => {
          navigate("/city/" + selectedCityName);
        }}
        style={{
          position: "absolute",
          bottom: "9vh",
          right: "10vh",
          width: "20vh",
          height: "6.5vh",
          borderRadius: 50,
          zIndex: 1000,
          background: "#2D67FF",
          color: "#fff",
          fontFamily: "SuisseIntl-Regular",
          fontSize: "3vh",
          fontWeight: 100,
          textTransform: "none",
        }}
      >
        Dashboard
      </Button>
      <div
        className={classes.bottomWrapper}
        style={{
          position: "absolute",
          margin: "unset",
          bottom: "3vh",
        }}
      >
        <div
          className={classes.smallTextWrapper}
          onClick={() => {
            const fileName = "Methodology_v05_AP_BK_v2.pdf";
            const link = document.createElement("a");
            link.href = `/pdf/${fileName}`;
            link.download = fileName;
            link.click();
          }}
        >
          <Typography className={classes.smallText}>
            How the rating works
          </Typography>
          <img
            src="/assets/questionGray.svg"
            alt="hint"
            style={{
              opacity: 0.6,
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          fontFamily: "SuisseIntl-Light",
          fontWeight: 100,
          fontSize: "1.4vh",
          color: "rgba(255, 255, 255, 0.4)",
          bottom: "15vh",
          right: "30%",
          transform: "translateX(65%)",
          width: "30%",
        }}
      >
        The height of a bar represents the total number of people in a grid
        cell.
      </div>
    </>
  );
};
