import { useNewsStyles } from "./components/styles";
import { useState } from "react";
import { MainMenu } from "../../components/MainMenu";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { Button, IconButton, InputBase } from "@mui/material";
import { NewsItem } from "./components/NewsItem";
import { NEWS_DATA } from "./data";

export const News = () => {
  const { classes } = useNewsStyles();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div>
      {menuVisible && <MainMenu setVisible={setMenuVisible} />}
      <Header invertColors={true} setMenuVisible={setMenuVisible} />
      <div className={classes.contentWrapper}>
        <div className={classes.title}>
          <span className={classes.titleBold}>News</span>
        </div>
        <div className={classes.filtersAndProjectsWrapper}>
          <div className={classes.filtersWrapper}>
            <Button
              style={{
                fontFamily: "SuisseIntl-Light",
                fontSize: "1.8vh",
                textTransform: "none",
                border: "1px solid #BFBFBF",
                color: "#000",
                borderRadius: "50px",
                padding: "0 20px",
                textWrap: "nowrap",
                height: "4vh",
              }}
            >
              Choose saved filter
              <img
                src={"/assets/arrowDownIcon.svg"}
                alt={"arrowDown"}
                style={{
                  marginLeft: "1vw",
                }}
              />
            </Button>
            <Filters setFilteredNews={() => {}} />
          </div>
          <div className={classes.projectsWrapper}>
            <div
              style={{
                fontFamily: "SuisseIntl-Light",
                fontSize: "1.8vh",
                textTransform: "none",
                border: "1px solid #BFBFBF",
                color: "#000",
                borderRadius: "50px",
                height: "4vh",
                width: "100%",
                textWrap: "nowrap",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <InputBase
                sx={{ ml: 2, flex: 10, width: "90%", fontSize: "1.vh" }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <img
                src={"/assets/loupeIcon.svg"}
                alt={"filterIcon"}
                style={{
                  marginRight: "1vw",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2vh",
              }}
            >
              {NEWS_DATA.map((newsItem) => (
                <NewsItem newsItem={newsItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
