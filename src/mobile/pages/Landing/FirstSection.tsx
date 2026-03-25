import { useSelectedCityData } from "../../../hooks/useSelectedCityData";
import { Button, Typography } from "@mui/material";
import { RatingBubble } from "../../components/RatingBubble";
import { StatusBubble } from "../../components/StatusBubble";
import { SelectedMap } from "../../../pages/GraphAndGlobe/components/SelectedMap";
import { HowTheRatingWorks } from "../../components/HowTheRatingWorks";
import { useLandingStyles } from "./Landing";
import { useEffect } from "react";

export const FirstSection = ({ setFirstSectionHeight }) => {
  const { classes } = useLandingStyles();

  const cityData = useSelectedCityData();

  const URI = cityData?.["Urban Resilience Index"]?.replace("-", "");

  useEffect(() => {
    const firstSection = document.getElementById("first-section")!;
    setFirstSectionHeight(firstSection.clientHeight);
  }, []);

  return (
    <div
      id="first-section"
      style={{
        padding: "16px",
        paddingTop: "0px",
      }}
    >
      <Typography
        variant="h1"
        style={{
          paddingTop: "0px",
        }}
      >
        {cityData?.City}
      </Typography>
      <Typography
        variant="h2"
        style={{
          marginTop: "8px",
        }}
      >
        в индексах
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          marginTop: "16px",
          alignItems: "center",
        }}
      >
        <Typography variant={"h3"}>
          Индекс <br />
          городской устойчивости
        </Typography>
        <RatingBubble rating={URI} />
      </div>
      <div
        className={classes.statusRow}
        style={{
          marginTop: "32px",
        }}
      >
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
      <SelectedMap selectedCityName={cityData.City} isMobile={true} />
      <Typography
        variant={"h5"}
        style={{
          fontSize: "8px",
          textAlign: "center",
        }}
      >
        Высота столбца отражает общее число людей в ячейке сетки.
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "16px",
        }}
        onClick={() => {
          const fileName = cityData.pdfName;
          const link = document.createElement("a");
          link.href = `/pdf/${fileName}`;
          link.download = fileName;
          link.click();
        }}
      >
        <Button variant="contained">
          Скачать отчет
          <img
            src={"./assets/downloadIcon.svg"}
            alt="arrow"
            style={{
              width: "12px",
            }}
          />
        </Button>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center",
            marginTop: "32px",
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
          marginTop: "32px",
        }}
      >
        <Button
          variant="contained"
          style={{
            display: "none",
            background: "#3752BA",
            fontFamily: "SuisseIntl-Thin",
          }}
        >
          Геоаналитика
        </Button>
      </div>
    </div>
  );
};
