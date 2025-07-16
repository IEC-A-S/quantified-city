import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContentStyles } from "../styles";
import { useAspect } from "@react-three/drei";
import { useState } from "react";

interface CustomSelectProps {
  value: string;
  label: string;
  options: string[];
  onChange(event: any): void;
}

export const CustomSelect = ({
  value,
  label,
  options,
  onChange,
}: CustomSelectProps) => {
  const { classes } = useContentStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        className={classes.filterSelect}
        open={open}
        value={value}
        onOpen={handleOpen}
        onChange={onChange}
        variant="outlined"
        label={label}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: 0,
            },
        }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{label}</em>;
          }

          return selected;
        }}
      >
        <MenuItem disabled={true} value="">
          <em>{label}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
