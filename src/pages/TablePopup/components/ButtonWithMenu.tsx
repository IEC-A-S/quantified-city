import { Button, Menu, MenuItem } from "@mui/material";
import type { FC } from "react";
import { useState } from "react";
import { TABLE_DATA } from "../data";

interface IButtonWithMenu {
  title: string;
  menuItems: string[];
  indicatorsDataArr: any;
  setRows: (rows: any) => void;
  accessorKey: string;
  filteredColumn?: string;
  disabled?: boolean;
  isMobile?: boolean;
  setFilteredColumn?: (column: string) => void;
}

export const ButtonWithMenu: FC<IButtonWithMenu> = ({
  title,
  menuItems,
  indicatorsDataArr,
  accessorKey,
  setRows,
  filteredColumn,
  disabled,
  isMobile,
  setFilteredColumn,
}) => {
  const filteredByKey = (key: string, value: string) => {
    setFilteredColumn!(key);
    return indicatorsDataArr.filter(
      (item) => item[key as keyof typeof item] === value
    );
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent) => {
    if (disabled) return;
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortedMenuItems = menuItems.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  });

  return (
    <div
      key={title}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={disabled ? undefined : handleClick}
        style={{
          fontFamily: "SuisseIntl-Light",
          fontWeight: 600,
          fontSize: isMobile ? "12px" : "2vh",
          textTransform: "none",
          color:
            filteredColumn === accessorKey ? "#2D67FF" : "rgba(0, 0, 0, 0.6)",
        }}
      >
        {title}
        {disabled ? null : (
          <img
            src={"/assets/arrowDownIcon.svg"}
            alt="arrowDownIcon"
            style={{ marginLeft: "1vh" }}
          />
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {sortedMenuItems.map((item) => (
          <MenuItem
            key={item}
            onClick={() => {
              // console.log("accessorKey", accessorKey);
              // console.log("item", item);
              setRows(filteredByKey(accessorKey, item));
              handleClose();
            }}
            style={
              isMobile
                ? {
                    fontFamily: "SuisseIntl-Light",
                    fontSize: "12px",
                    margin: "0",
                  }
                : {}
            }
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
      {filteredColumn === accessorKey && (
        <img
          src={"/assets/remove_filter.svg"}
          alt="crossIcon"
          style={{
            width: "1.5vh",
            cursor: "pointer",
          }}
          onClick={() => {
            setRows(indicatorsDataArr);
            setFilteredColumn!("");
          }}
        />
      )}
    </div>
  );
};
