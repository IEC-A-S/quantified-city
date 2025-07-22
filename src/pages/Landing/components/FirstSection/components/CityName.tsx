import { Typography } from "@mui/material";
import { useFirstSectionStyles } from "./styles";

interface ICityNameProps {
  cityName: string;
  countryName: string;
}

export const CityName = ({ cityName, countryName }: ICityNameProps) => {
  const { classes } = useFirstSectionStyles();

  return (
    <div className={classes.titleWrapper}>
      <Typography className={classes.bigText}>
        {cityName}{" "}
      </Typography>
      <Typography className={classes.bigTextSubtitle}>{countryName}</Typography>
    </div>
  );
};
