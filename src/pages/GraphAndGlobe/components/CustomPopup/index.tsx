import type { FC } from "react";
import { Dialog, DialogContent, Typography, IconButton } from "@mui/material";
import { usePopupStyles } from "./styles";
import WestIcon from "@mui/icons-material/West";
import { CategoryChart } from "../CategoryChart";
import { StarGraph } from "../StarGraph";
import { IndicatorChart } from "../IndicatorChart";
import { CITY_NAMES } from "../../../../data";

export const CustomPopup: FC = () => {
  const { classes, cx } = usePopupStyles();

  return (
    <>
      <IconButton className={classes.closeBtn}>
        <WestIcon style={{ color: "#fff" }} />
      </IconButton>
      <Dialog open={true} onClose={() => void 0} scroll="body">
        <DialogContent>
          <div
            className={cx(classes.content, classes.blue)}
            style={{ height: 805 }}
          >
            <Typography component="h2" className={classes.fat}>
              Water availability
            </Typography>
            <Typography className={classes.text}>
              The Wealth category assesses a city’s economic well-being, and
              income distribution. This issue is crucial for the growing
              economies in the Global South facing vast disparities and poverty
              challenges. We capture and measure data on income distribution,
              poverty rates, and economic opportunities based on the
              international practices . This assessment aims to evaluate the
              cities' capacity to address economic disparities, reduce poverty,
              and enhance economic well-being for their residents while
              considering their unique economic challenges
            </Typography>

            <CategoryChart
              category="Water availability"
              currentCity="Dubai"
              cities={CITY_NAMES}
            />
          </div>
          <div
            className={cx(classes.content, classes.white)}
            style={{ height: 805 }}
          >
            <Typography component="h2">
              <div>Indicators of </div>
              <div className={classes.fat} style={{ color: "#2D67FF" }}>
                Water availability
              </div>
            </Typography>

            <StarGraph
              category="Water availability"
              currentCity="Dubai"
              cities={CITY_NAMES}
            />
          </div>
          <div
            className={cx(classes.content, classes.blue)}
            style={{ height: 860 }}
          >
            <Typography component="h2">
              <div className={classes.fat}>Disposable income</div>
              <div>$ per capita per month</div>
            </Typography>
            <Typography className={classes.text}>
              Household disposable income consists of earnings, self-employment,
              capital income and public cash transfers; income taxes and social
              security contributions paid by households are deducted. The income
              of the household is attributed to each of its members, with an
              adjustment to reflect differences in needs for households of
              different sizes. Based on OECD factbook 2015
            </Typography>

            <IndicatorChart
              cities={CITY_NAMES}
              currentCity="Dubai"
              category="Water availability"
              indicator="Percentage of population with access to drinking water"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
