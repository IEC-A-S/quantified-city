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
              Доступность воды
            </Typography>
            <Typography className={classes.text}>
              Категория оценивает обеспеченность города водными ресурсами и
              устойчивость соответствующей инфраструктуры. В анализе учитываются
              доступ населения к воде, надежность систем водоснабжения и
              способность города поддерживать базовые потребности жителей в
              условиях роста нагрузки и внешних рисков.
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
              <div>Индикаторы категории</div>
              <div className={classes.fat} style={{ color: "#2D67FF" }}>
                Доступность воды
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
              <div className={classes.fat}>Располагаемый доход</div>
              <div>долл. США на человека в месяц</div>
            </Typography>
            <Typography className={classes.text}>
              Располагаемый доход домохозяйства включает заработок, доход от
              самозанятости, доход от капитала и государственные денежные
              трансферты за вычетом подоходных налогов и социальных взносов.
              Показатель пересчитывается на каждого члена домохозяйства с
              учетом различий в потребностях семей разного размера.
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
