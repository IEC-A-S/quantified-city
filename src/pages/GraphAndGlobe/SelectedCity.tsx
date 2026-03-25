import type { FC } from "react";
import { useSelectedCityStyles } from "./components/styles";
import { StatItem } from "./components/StatItem";
import { BigStatItem } from "./components/BigStatItem";
import { SmallStatItem } from "./components/SmallStatItem";
import { Button, Typography } from "@mui/material";
import { SelectedMap } from "./components/SelectedMap";
import { useNavigate } from "react-router-dom";
import { getCityId } from "../../constants";
import { getCompatibleCityData, getCompatibleCityLabel } from "../../v2/data/compat";
import { getV2CityById } from "../../v2/data/selectors";

interface ISelectedCityProps {
  selectedCityName: string;
}

export const SelectedCity: FC<ISelectedCityProps> = ({ selectedCityName }) => {
  const { classes } = useSelectedCityStyles();

  const navigate = useNavigate();
  const cityId = getCityId(selectedCityName);
  const v2City = getV2CityById(cityId);
  const cityLabel = getCompatibleCityLabel(cityId);
  const cityData = getCompatibleCityData(cityId);

  const numberWithSpaces = (number: number | string) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <>
      {cityData && (
        <div className={classes.root}>
          <div className={classes.titleWrapper}>
            <div className={classes.cityNameAndCountryNameWrapper}>
              <div className={classes.cityName}>{cityLabel}</div>
              <div className={classes.countryName}>
                {v2City?.country ?? cityData.Country}
              </div>
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
              {v2City?.description ?? cityData["Text description"]}
              <br />
            </div>
          </div>
          <div className={classes.statWrapper}>
            <StatItem
              color="#FF3B29"
              title="Население городской агломерации"
              value={numberWithSpaces(cityData.Population)}
              status={cityData["Population description"]}
            />
            <StatItem
              color="#FF3B29"
              title="Население города"
              value={numberWithSpaces(cityData["Population city proper"])}
              status={cityData["Population description"]}
            />
            <StatItem
              color="#FF3B29"
              title="Плотность населения"
              value={cityData["Population density"] + " чел./га"}
              status={cityData["Population density description"]}
            />
            <StatItem
              color="#2D67FF"
              title="Климат"
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
                label="Индекс городской устойчивости"
                status={cityData["Urban Resilience Index"]}
                isFirst={true}
              />
              <div className={classes.smallItemsListWrapper}>
                <SmallStatItem
                  label="Экологический"
                  status={cityData.Environmental}
                />
                <SmallStatItem label="Социальный" status={cityData.Social} />
                <SmallStatItem
                  label="Управленческий"
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
                  label="Способность и готовность"
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
                label="Базовые потребности"
                subLabel="Охват 0"
                status={cityData["Basic needs Scope"]}
              />
              <BigStatItem
                label="Индекс транспортной устойчивости"
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
                label="Подверженность природным рискам"
                status={cityData["Natural Risk Exposure"]}
              />
              <BigStatItem
                label="Индекс городских настроений"
                status={cityData["Urban Sentiment Index"]}
              />
            </div>
          </div>
        </div>
      )}
      <SelectedMap selectedCityName={cityId} />
      <Button
        onClick={() => {
          navigate("/city/" + cityId);
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
          
          fontSize: "3vh",
          fontWeight: 100,
          textTransform: "none",
        }}
      >
        Дашборд
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
            Как работает рейтинг
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
          
          fontWeight: 100,
          fontSize: "1.4vh",
          color: "rgba(255, 255, 255, 0.4)",
          bottom: "15vh",
          right: "30%",
          transform: "translateX(65%)",
          width: "30%",
        }}
      >
        Высота столбца отражает общее число людей в ячейке сетки.
      </div>
    </>
  );
};
