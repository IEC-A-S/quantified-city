import { type FC, useState } from "react";
import { makeStyles, tss } from "tss-react/mui";
import { Typography } from "@mui/material";
import { SocialChart } from "../../pages/SocialPopup/SocialChart";
import PopupData from "../../data/sentiment/sentimentPopupData.json";
import GraphData from "../../data/sentiment/sentimentGraphAllData.json";
import sentimentNewsByCitiesArr from "../../data/sentimentNews.json";

export const usePopupStyles = makeStyles()({
  backgroundWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#0C1F68",
    width: "100vw",
    height: "100vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
    zIndex: "1200",
  },
  content: {
    position: "relative",
    width: "90%",
    margin: "11vh 5% 5vh",
    borderRadius: "3vh",
    overflow: "hidden",
  },
  blueSection: {
    position: "relative",
    display: "box",
    width: "100%",
    height: "100vh",
    float: "left",
    background: "#1433AE",
  },
  whiteSection: {
    position: "relative",
    display: "box",
    width: "100%",
    height: "100vh",
    float: "left",
    background: "#ffffff",
  },
  blackSection: {
    position: "relative",
    display: "box",
    width: "100%",
    height: "100vh",
    float: "left",
    background: "#000000",
  },
  returnBack: {
    position: "absolute",
    top: "4vh",
    left: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    cursor: "pointer",
  },
  returnBackIcon: {
    height: "4vh",
  },
  returnBackText: {
    fontFamily: "SuisseIntl-Light",
    fontWeight: 400,
    color: "#fff",
    textTransform: "none",
    fontSize: "1.8vh",
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
  title: {
    fontFamily: "SuisseIntl-Regular",
    fontWeight: 400,
    lineHeight: "9vh",
    letterSpacing: "-0.2vh",
    fontSize: "8vh",
    color: "#fff",
    width: "100%",
  },
});
export const useCardStyles = tss.create({
  header: {
    position: "absolute",
    top: "5vh",
    left: "2vw",
    zIndex: 1,

    color: "#FFF",
    fontFamily: "SuisseIntl-Light",
    fontSize: "5vh",
    fontWeight: 300,
    lineHeight: "normal",
    letterSpacing: "-1.2",
  },
  headerCategory: {
    fontFamily: "SuisseIntl-Medium",
    fontWeight: 500,
  },

  dictionaryListWrapper: {
    position: "absolute",
    top: 50,
    right: 65,
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 60,
  },
  dictionaryContainer: {
    width: "25vw",
  },
  dictionaryList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  dictionaryTitle: {
    color: "#FFF",
    fontFamily: "SuisseIntl-Regular",
    fontSize: "2vh",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2vh",
  },
  dictionaryCategoryColor: {
    color: "#2D67FF",
  },
  dictionaryDescription: {
    color: "#FFF",
    fontFamily: "SuisseIntl-Medium",
    fontSize: "3vh",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "4vh",
  },
});

interface SocialPopupProps {
  city: string;
  setSocialPopupOpen: (value: boolean) => void;
}

export const SocialPopup: FC<SocialPopupProps> = ({
  city,
  setSocialPopupOpen,
}) => {
  const { classes } = usePopupStyles();
  const { classes: cardClasses, cx } = useCardStyles();

  const categoriesList = [...new Set(PopupData.map((item) => item.category))];

  const [currentCategory, setcurrentCategory] = useState(0);

  const handleClickOnToggler = (direction: boolean) => {
    if (direction && currentCategory + 1 === categoriesList.length) {
      setcurrentCategory(0);
    } else if (direction) {
      setcurrentCategory(currentCategory + 1);
    } else if (!direction && currentCategory - 1 < 0) {
      setcurrentCategory(categoriesList.length - 1);
    } else {
      setcurrentCategory(currentCategory - 1);
    }
  };

  //console.log(GraphData[0].city)
  const graphData = GraphData.find((item) => item.city === city).data.filter(
    (item) => item.category === categoriesList[currentCategory]
  );
  const data = PopupData.find(
    (item) =>
      item.city === city && item.category === categoriesList[currentCategory]
  )!;

  const news = sentimentNewsByCitiesArr
    .filter(
      (item) =>
        item.city === city && item.category === categoriesList[currentCategory]
    )
    .map((item) => {
      const graphDataByDate = graphData.find((i) => i.days === item.date);

      if (!graphDataByDate || !graphDataByDate[item.sentiment]) {
        console.log("no data for", item);
        return;
      }

      return {
        sentiment: item.sentiment,
        article: item.article,
        date: item.date,
        quantity: graphDataByDate[item.sentiment] as number,
      };
    })
    .filter(Boolean);

  return (
    <div className={classes.backgroundWrapper}>
      <div
        className={classes.returnBack}
        onClick={() => setSocialPopupOpen(false)}
      >
        <img
          className={classes.returnBackIcon}
          src="/assets/returnBackIcon.svg"
          width={32}
          alt="return back"
        />
        <Typography variant={"h4"}>Back to Urban resilience index</Typography>
      </div>
      <div className={classes.content}>
        <div
          className={classes.blackSection}
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            float: "left",
            background: "#000000",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignContent: "flex-start",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: "fit-content",
            paddingBottom: "5vh",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              justifyContent: "left",
              gap: "8px",
              margin: "16px 0 0 16px",
            }}
          >
            <img
              src="/assets/arrowLeftIconMob.svg"
              alt="arrow"
              style={{ width: "18px", height: "18px", cursor: "pointer" }}
              onClick={() => handleClickOnToggler(false)}
            />
            <img
              src="/assets/arrowLeftIconMob.svg"
              alt="arrow"
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
                transform: "rotate(180deg)",
              }}
              onClick={() => handleClickOnToggler(true)}
            />
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
              height: "auto",
            }}
          >
            <Typography
              variant={"h3"}
              style={{
                width: "100%",
                paddingLeft: "16px",
                paddingTop: "16px",
              }}
            >
              {data.city}:
              <br />
              <span style={{ fontFamily: "SuisseIntl-Regular" }}>
                {data.category}
              </span>{" "}
              perception index
            </Typography>
            <Typography variant={"h3"} style={{ paddingLeft: "16px" }}>
              Topic{" "}
              <span
                style={{
                  fontFamily: "SuisseIntl-Regular",
                }}
              >
                {data.category.toLowerCase()}
              </span>
            </Typography>
            <Typography variant={"h5"} style={{ paddingLeft: "16px" }}>
              Number of posts
              <span
                style={{
                  fontFamily: "SuisseIntl-Thin",
                  paddingLeft: "16px",
                  color: "#fff",
                }}
              >
                {data.categoryTotal}
              </span>
            </Typography>
            <Typography variant={"h5"} style={{ paddingLeft: "16px" }}>
              Positive posts, share
              <span
                style={{
                  fontFamily: "SuisseIntl-Thin",
                  paddingLeft: "16px",
                  color: "#fff",
                }}
              >
                {((data.categoryPositive * 100) / data.categoryTotal).toFixed(
                  1
                )}
                %
              </span>
            </Typography>
            <Typography variant={"h5"} style={{ paddingLeft: "16px" }}>
              Negative posts, share
              <span
                style={{
                  fontFamily: "SuisseIntl-Thin",
                  paddingLeft: "16px",
                  color: "#fff",
                }}
              >
                {((data.categoryNegative * 100) / data.categoryTotal).toFixed(
                  1
                )}
                %
              </span>
            </Typography>
            <Typography variant={"h3"} style={{ paddingLeft: "16px" }}>
              All topics
            </Typography>
            <Typography variant={"h5"} style={{ paddingLeft: "16px" }}>
              Number of posts
              <span
                style={{
                  fontFamily: "SuisseIntl-Thin",
                  paddingLeft: "16px",
                  color: "#fff",
                }}
              >
                {data.total}
              </span>
            </Typography>
            <Typography variant={"h5"} style={{ paddingLeft: "16px" }}>
              Positive posts, share
              <span
                style={{
                  fontFamily: "SuisseIntl-Thin",
                  paddingLeft: "16px",
                  color: "#fff",
                }}
              >
                {((data.positive * 100) / data.total).toFixed(1)}%
              </span>
            </Typography>
            <Typography variant={"h5"} style={{ paddingLeft: "16px" }}>
              Negative posts, share
              <span
                style={{
                  fontFamily: "SuisseIntl-Thin",
                  paddingLeft: "16px",
                  color: "#fff",
                }}
              >
                {((data.negative * 100) / data.total).toFixed(1)}%
              </span>
            </Typography>
          </div>
          <div
            style={{
              height: "fit-content",
              width: "100%",
            }}
          >
            <SocialChart isMobile={true} chartData={graphData} news={news} />
          </div>
        </div>
      </div>
    </div>
  );
};
