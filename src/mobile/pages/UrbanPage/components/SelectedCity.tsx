import type { FC } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { RatingBubble } from "../../../components/RatingBubble";
import { StatusBubble } from "../../../components/StatusBubble";
import { SelectedMap } from "../../../../pages/GraphAndGlobe/components/SelectedMap";
import { HowTheRatingWorks } from "../../../components/HowTheRatingWorks";
import { useNavigate } from "react-router-dom";
import { getCompatibleCityData, getCompatibleCityId } from "../../../../v2/data/compat";

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
  const cityData = getCompatibleCityData(selectedCityName);
  const cityId = getCompatibleCityId(selectedCityName);

  const navigate = useNavigate();

  if (!cityData) {
    return null;
  }

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
          Индекс <br />
          городской устойчивости
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
            Население городской агломерации
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
            Население города
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
            Плотность <br />
            населения
          </Typography>
          <Typography
            variant={"h4"}
            style={{
              flex: 3,
            }}
          >
            {cityData["Population density"] + " чел./га"}
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
            Климат
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
      <SelectedMap selectedCityName={cityId} isMobile={true} />
      <Typography
        variant={"h5"}
        style={{
          fontSize: "8px",
          textAlign: "center",
        }}
      >
        Высота столбца показывает общее число людей в ячейке сетки.
      </Typography>
      <div className={classes.statusRow}>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Экологический</Typography>
          <StatusBubble status={cityData?.Environmental} variant="outlined" />
        </div>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Социальный</Typography>
          <StatusBubble status={cityData?.Social} variant="outlined" />
        </div>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Управленческий</Typography>
          <StatusBubble status={cityData.Governmental} variant="outlined" />
        </div>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Текущее состояние</Typography>
          <StatusBubble status={cityData["Current state"]} variant="outlined" />
        </div>
        <div className={classes.statusColumn}>
          <Typography variant={"h4"}>Способность и готовность</Typography>
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
          <Typography variant={"h3"}>Базовые потребности</Typography>
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
          <Typography variant={"h3"}>Подверженность природным рискам</Typography>
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
          <Typography variant={"h3"}>Индекс транспортной устойчивости</Typography>
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
          <Typography variant={"h3"}>Индекс городских настроений</Typography>
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
            navigate("/city/" + cityId);
          }}
          variant="contained"
        >
          Дашборд
        </Button>
      </div>
    </div>
  );
};
