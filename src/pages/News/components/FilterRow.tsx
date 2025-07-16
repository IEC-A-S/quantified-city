import { Checkbox } from "@mui/material";
import { useNewsStyles } from "./styles";
import type { FC } from "react";

interface FilterRowProps {
  title: string;
  checked?: boolean;
  onChange?: (key: string) => void;
}

export const FilterRow: FC<FilterRowProps> = ({ title, checked, onChange }) => {
  const { classes } = useNewsStyles();

  const handleChange = () => {
    // console.log("handleChange");
    onChange && onChange(title);
  };

  return (
    <div>
      <div className={classes.filterRow}>
        <Checkbox
          checked={checked}
          style={{
            marginLeft: "0",
          }}
          onChange={handleChange}
        />
        <div>{title}</div>
      </div>
    </div>
  );
};
