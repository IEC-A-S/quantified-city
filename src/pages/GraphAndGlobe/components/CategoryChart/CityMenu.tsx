import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import type { MouseEvent, FC } from "react";

interface IProps {
  isMobile?: boolean;
  cities: string[];
  value: string;
  onChange(newCity: string): void;
}

export const CityMenu: FC<IProps> = ({ isMobile, cities, value, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        width: isMobile ? "0vw" : "220",
        marginTop: 0,
      }}
    >
      {isMobile ? (
        <Button
          onClick={handleClick}
          style={{
            textTransform: "none",
            color: "#fff",
            padding: 0,
            width: isMobile ? "5vw" : "220",
            minWidth: "0px",
            textWrap: "wrap",
            // fontSize: "2.5vh",
            
            fontSize: isMobile ? "2vw" : "2.5vh",
            fontWeight: 400,
            background: "transparent",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {value}
          <KeyboardArrowDownIcon />
        </Button>
      ) : (
        <Button
          onClick={handleClick}
          endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          style={{
            textTransform: "none",
            color: "#fff",
            // fontSize: "2.5vh",
            
            fontSize: isMobile ? "10px" : "2.5vh",
            fontWeight: 400,
            background: "transparent",
          }}
        >
          {value}
        </Button>
      )}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {cities.map((city) => (
          <MenuItem
            key={city}
            selected={city === value}
            onClick={() => {
              handleClose();
              onChange(city);
            }}
          >
            {city}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
