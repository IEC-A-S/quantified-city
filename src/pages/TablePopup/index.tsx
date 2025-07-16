import { usePopupStyles } from "./components/styles";
import { Paper, TableContainer, Typography } from "@mui/material";
import type { FC } from "react";
import { MyTable } from "./components/MyTable";
import { useSelectedCityData } from "../../hooks/useSelectedCityData";

interface TablePopupProps {
  setTablePopupOpen: (open: boolean) => void;
  isMobile?: boolean;
}
export const TablePopup: FC<TablePopupProps> = ({
  setTablePopupOpen,
  isMobile,
}) => {
  const { classes } = usePopupStyles();
  const selectedCity = useSelectedCityData();
  const city = selectedCity.City;

  const category = "Urban resilience index";

  const mobileStyles = {
    backToUrban: {
      fontSize: "14px",
    },
    returnBack: {
      gap: "16px",
      top: "16px",
      left: "16px",
    },
    content: {
      margin: 0,
      boxSizing: "border-box",
      padding: "16px",
      paddingTop: "9vh",
      width: "100%",
    },
    whiteSection: {
      borderRadius: "16px",
    },
    titleWrapper: {
      flexDirection: "column",
      gap: "8px",
      marginTop: "16px",
      marginLeft: "16px",
    },
    title: {
      fontSize: "18px",
      lineHeight: "18px",
      letterSpacing: "0",
    },
    titleSpan: {
      fontSize: "18px",
      lineHeight: "18px",
      letterSpacing: "0",
      color: "#2D67FF",
    },
  };

  return (
    <div className={classes.backgroundWrapper}>
      <div
        className={classes.returnBack}
        onClick={() => {
          const landing = document.getElementById("landing");
          landing.scrollTo({
            top: landing.clientHeight * 2,
          });
          setTablePopupOpen(false);
        }}
        style={isMobile ? mobileStyles.returnBack : {}}
      >
        <img
          className={classes.returnBackIcon}
          src="/assets/returnBackIcon.svg"
          alt="return back"
        />
        {isMobile ? (
          <Typography variant={"h4"}>Back to Urban resilience index</Typography>
        ) : (
          <Typography className={classes.returnBackText}>
            Back to Urban resilience index
          </Typography>
        )}
      </div>
      <div
        className={classes.content}
        style={isMobile ? mobileStyles.content : {}}
      >
        <div
          className={classes.whiteSection}
          style={isMobile ? mobileStyles.whiteSection : {}}
        >
          <div
            className={classes.titleWrapper}
            style={isMobile ? mobileStyles.titleWrapper : {}}
          >
            <div
              className={classes.title}
              style={isMobile ? mobileStyles.title : {}}
            >
              {city}: Indicators of{" "}
            </div>
            <div
              className={classes.title}
              style={
                isMobile
                  ? mobileStyles.titleSpan
                  : {
                      color: "#2D67FF",
                    }
              }
            >
              {category}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "fit-content",
              display: "flex",
            }}
          >
            <TableContainer
              component={Paper}
              sx={{
                width: "100%",
                height: isMobile ? "76vh" : "52vh",
                marginLeft: isMobile ? "16px" : "8vh",
                marginRight: isMobile ? "16px" : "8vh",
                marginTop: isMobile ? "16px" : "4vh",
                marginBottom: isMobile ? "16px" : "4vh",
              }}
            >
              <MyTable isMobile={isMobile} />
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
