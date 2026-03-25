import { useState } from "react";
import { ImageGallery } from "../../../pages/Landing/components/ImageSection/components/ImageGallery";
import { useSelectedCityData } from "../../../hooks/useSelectedCityData";
import { Cirlce } from "../../../pages/Landing/components/ImageSection/components/Circle";
import { Button, Typography } from "@mui/material";
import { StatusBubble } from "../../components/StatusBubble";
import { makeStyles } from "tss-react/mui";

const useGallerySectionStyles = makeStyles()({
  itemColumn: {
    width: "90px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  itemsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: "16px",
    gap: "16px",
    alignItems: "flex-end",
    flexWrap: "wrap",
  },
});

export const GallerySection = () => {
  const { classes } = useGallerySectionStyles();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const cityData = useSelectedCityData();

  //const climate = cityData["Climate"].replace(/,/g, "/");
  const climate = cityData["Climate"]

  const proverty =
    (
      cityData["Poverty headcount ratio at national poverty lines"] * 100
    ).toFixed(1) + "% ";

  const litercyRate =
    (cityData["Literacy rate among population"] * 100).toFixed(1) + "% ";

  const numberWithSpaces = (number: number | string | undefined) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "782px",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0.5))",
          zIndex: 1,
        }}
      ></div>
      <ImageGallery
        imagesUrls={cityData.images}
        activeImageIndex={activeImageIndex}
      />
      <div
        style={{
          position: "relative",
          paddingTop: "80px",
          paddingLeft: "16px",
          paddingRight: "16px",
          zIndex: 3,
        }}
      >
        <Typography variant="h1">{cityData?.City}</Typography>
        <Typography
          variant="h2"
          style={{
            paddingTop: "8px",
          }}
        >
          В фотографиях и цифрах
        </Typography>
        <div className={classes.itemsRow}>
          <div className={classes.itemColumn}>
            <Typography variant={"h5"}>Население городской агломерации</Typography>
            <Typography variant={"h4"}>{numberWithSpaces(cityData?.Population)}</Typography>
            <StatusBubble
              text={cityData?.["Population description"]}
              fillColor="#fff"
              textColor="#000"
            />
          </div>
          <div className={classes.itemColumn}>
            <Typography variant={"h5"}>Население в административных границах</Typography>
            <Typography variant={"h4"}>
              {numberWithSpaces(cityData?.["Population city proper"])}
            </Typography>
            <StatusBubble
              text={cityData?.["Population description"]}
              fillColor="#fff"
              textColor="#000"
            />
          </div>
          <div className={classes.itemColumn}>
            <Typography variant={"h5"}>Плотность населения</Typography>
            <Typography variant={"h4"}>
              {cityData["Population density"] + " чел./га"}
            </Typography>
            <StatusBubble
              text={cityData["Population density description"]}
              fillColor="#fff"
              textColor="#000"
            />
          </div>
          <div className={classes.itemColumn}>
            <Typography variant={"h5"}>Средняя зарплата</Typography>
            <Typography variant={"h4"}>
              {cityData["Mean salary"] + " PPP$"}
            </Typography>
            <StatusBubble
              text={cityData["Mean salary description"]}
              fillColor="#fff"
              textColor="#000"
            />
          </div>
          <div className={classes.itemColumn}>
            <Typography variant={"h5"}>
              {" "}
              Доля населения за национальной чертой бедности
            </Typography>
            <Typography variant={"h4"}>{proverty + "населения"}</Typography>
            <StatusBubble
              text={
                cityData[
                "Poverty headcount ratio at national poverty lines description"
                ]
              }
              fillColor="#fff"
              textColor="#000"
            />
          </div>
          <div className={classes.itemColumn}>
            <Typography variant={"h5"}>
              Уровень грамотности населения (15-24 лет)
            </Typography>
            <Typography variant={"h4"}>{litercyRate}</Typography>
            <StatusBubble
              text={cityData["Literacy rate among population description"]}
              fillColor="#fff"
              textColor="#000"
            />
          </div>
          <div className={classes.itemColumn}>
            <Typography variant={"h5"}>Климат</Typography>
            <Typography variant={"h4"}>{climate}</Typography>
            <StatusBubble
              text={cityData["Climate description"]}
              fillColor="#fff"
              textColor="#000"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          flexDirection: "column",
          gap: "16px",
          bottom: "10%",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          style={{
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Станьте нашим корреспондентом <br />
          Предложите другое изображение
        </Typography>
        <Button
          onClick={() => {
            const fileName = cityData.pdfName;
            const link = document.createElement("a");
            link.href = `/pdf/${fileName}`;
            link.download = fileName;
            link.click();
          }}
          variant="contained"
        >
          Скачать отчет
        </Button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1.6vh",
          zIndex: 2,
        }}
      >
        {cityData.images.map((url, index) => (
          <Cirlce
            key={index}
            bgUrl={url}
            onClick={() => {
              setActiveImageIndex(index);
            }}
            isActive={activeImageIndex === index}
          />
        ))}
      </div>
    </div>
  );
};
