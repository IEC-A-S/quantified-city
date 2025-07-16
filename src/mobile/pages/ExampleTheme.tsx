import { Button, Divider, Switch, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { RatingBubble } from "../components/RatingBubble";
import { StatusBubble } from "../components/StatusBubble";

export const useLayoutStyles = makeStyles()({
  root: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    padding: "16px",
    boxSizing: "border-box",
    backgroundColor: "rgba(21, 52, 175, 1)",
    overflow: "scroll",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "16px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    marginTop: "16px",
  },
});

export const ExampleTheme = () => {
  const { classes } = useLayoutStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Mobile Theme
      </Typography>
      <div className={classes.column}>
        <Divider />
        <Typography variant="h2">Texts</Typography>
        <Typography variant="h1">h1 Urban Page</Typography>
        <Typography variant="h2">h2 Urban Page</Typography>
        <Typography variant="h3">h3 Urban Page</Typography>
        <Typography variant="h4">h4 Urban Page</Typography>
        <Typography variant="h5">h5 Urban Page</Typography>
      </div>
      <div className={classes.column}>
        <Divider />
        <Typography variant="h2">Buttons</Typography>

        <div className={classes.row}>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
        </div>
        <div className={classes.row}>
          <Button variant="outlined">
            Outlined
            <img
              src={"./assets/arrowDownIcon.svg"}
              alt="arrow"
              style={{
                filter: "invert(1)",
              }}
            />
          </Button>
          <Button variant="contained">
            Contained
            <img src={"./assets/closeIcon.svg"} alt="arrow" />
          </Button>
          <Button variant="text">
            Outlined
            <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
          </Button>
        </div>
        <div className={classes.row}>
          <Button variant="contained">
            Button
            <img
              src={"./assets/downloadIcon.svg"}
              alt="arrow"
              style={{
                width: "12px",
              }}
            />
          </Button>
          <Button
            variant="contained"
            style={{
              background: "#3752BA",
              fontFamily: "SuisseIntl-Thin",
            }}
          >
            Geoanalytics
          </Button>
          <Button
            variant="outlined"
            style={{
              background: "transparent",
              fontFamily: "SuisseIntl-Thin",
            }}
          >
            Table view
          </Button>
        </div>
      </div>
      <div className={classes.column}>
        <Divider />
        <Typography variant="h2">Ratings</Typography>
        <div className={classes.row}>
          <RatingBubble rating={"A1"} />
          <RatingBubble rating={"A2"} />
          <RatingBubble rating={"A3"} />
          <RatingBubble rating={"B1"} />
          <RatingBubble rating={"B2"} />
          <RatingBubble rating={"B3"} />
          <RatingBubble rating={"C1"} />
          <RatingBubble rating={"C2"} />
          <RatingBubble rating={"C3"} />
        </div>
        <div className={classes.row}>
          <RatingBubble rating={"A1"} size={"small"} />
          <RatingBubble rating={"A2"} size={"small"} />
          <RatingBubble rating={"A3"} size={"small"} />
          <RatingBubble rating={"B1"} size={"small"} />
          <RatingBubble rating={"B2"} size={"small"} />
          <RatingBubble rating={"B3"} size={"small"} />
          <RatingBubble rating={"C1"} size={"small"} />
          <RatingBubble rating={"C2"} size={"small"} />
          <RatingBubble rating={"C3"} size={"small"} />
        </div>
      </div>
      <div className={classes.column}>
        <Divider />
        <Typography variant="h2">Status</Typography>
        <div className={classes.row}>
          <div className={classes.column}>
            <Typography variant="h4">Text status</Typography>
            <StatusBubble text={"very large"} />
            <StatusBubble text={"large"} fillColor="#fff" textColor="#000" />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <Typography variant="h4">Outlined</Typography>
            <StatusBubble status={"Very low"} variant="outlined" />
            <StatusBubble status={"Low"} variant="outlined" />
            <StatusBubble status={"Average"} variant="outlined" />
            <StatusBubble status={"Strong"} variant="outlined" />
            <StatusBubble status={"Very strong"} variant="outlined" />
          </div>
          <div className={classes.column}>
            <Typography variant="h4">Opacity</Typography>
            <StatusBubble status={"Very low"} variant="opacity" />
            <StatusBubble status={"Low"} variant="opacity" />
            <StatusBubble status={"Average"} variant="opacity" />
            <StatusBubble status={"Strong"} variant="opacity" />
            <StatusBubble status={"Very strong"} variant="opacity" />
          </div>
          <div className={classes.column}>
            <Typography variant="h4">Solid white</Typography>
            <StatusBubble status={"Very low"} variant="solid" />
            <StatusBubble status={"Low"} variant="solid" />
            <StatusBubble status={"Average"} variant="solid" />
            <StatusBubble status={"Strong"} variant="solid" />
            <StatusBubble status={"Very strong"} variant="solid" />
          </div>
          <div className={classes.column}>
            <Typography variant="h4">Solid black</Typography>
            <StatusBubble
              status={"Very low"}
              variant="solid"
              textColor="black"
            />
            <StatusBubble status={"Low"} variant="solid" textColor="black" />
            <StatusBubble
              status={"Average"}
              variant="solid"
              textColor="black"
            />
            <StatusBubble status={"Strong"} variant="solid" textColor="black" />
            <StatusBubble
              status={"Very strong"}
              variant="solid"
              textColor="black"
            />
          </div>
        </div>
      </div>
      <div className={classes.column}>
        <Divider />
        <Typography variant="h2">Switches</Typography>
        <Switch size={"medium"} />
      </div>
    </div>
  );
};
