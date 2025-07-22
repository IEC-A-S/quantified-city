import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import type { FC, MouseEvent } from "react";

interface ICityItem {
  value: string;
  cities: string[];
  color: string;
  onChange: (city: string) => void;
}

export const CityMenu: FC<ICityItem> = ({ value, cities, color, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "1.2vh",
              height: "1.2vh",
              borderRadius: "50%",
              backgroundColor: color,
              marginRight: "1vh",
            }}
          ></div>
          <div
            style={{
              
              fontSize: "2.5vh",
              // fontSize: "24px",
              fontWeight: 600,
              textAlign: "center",
              color: "#121212",
              textTransform: "none",
            }}
          >
            {value}
          </div>
          <div
            style={{
              marginLeft: "1vh",
            }}
          >
            <img src={"/assets/smallArrowDown.svg"} alt="arrow down" />
          </div>
        </div>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {cities?.map((city, index) => (
          <MenuItem
            key={city}
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
