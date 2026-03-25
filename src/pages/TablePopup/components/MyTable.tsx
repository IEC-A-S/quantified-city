import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useImageSectionStyles } from "../../Landing/components/ImageSection/components/styles";
import { ButtonWithMenu } from "./ButtonWithMenu";
import { useSelectedCityData } from "../../../hooks/useSelectedCityData";
import { getCompatibleIndicatorTableRows } from "../../../v2/data/compat";

interface MyTableProps {
  isMobile?: boolean;
}

type TableRowData = ReturnType<typeof getCompatibleIndicatorTableRows>[number];

const TABLE_COLUMN_LABELS: Record<string, string> = {
  Category: "Категория",
  Component: "Компонент",
  Indicator: "Индикатор",
  Scope: "Охват",
  Dimension: "Измерение",
  Type: "Тип",
  Unit: "Единица",
  Value: "Значение",
};

const TABLE_VALUE_LABELS: Record<string, string> = {
  "Current state": "Текущее состояние",
  "Ability & willingness": "Способность и готовность",
  "Ability & Willingness": "Способность и готовность",
};

const getTableLabel = (value: string) => TABLE_VALUE_LABELS[value] ?? value;

export const MyTable = ({ isMobile }: MyTableProps) => {
  const { classes } = useImageSectionStyles();
  const selectedCity = useSelectedCityData();
  const rowsInit = getCompatibleIndicatorTableRows(selectedCity.City);

  const [filteredColumn, setFilteredColumn] = useState("");

  const getUniqueValues = (key: keyof TableRowData) => {
    const values = rowsInit.map((row) => row[key]);
    return [...new Set(values)];
  };
  const indicatorsDataArr = rowsInit;

  const [rows, setRows] = useState(rowsInit);

  const tableCellMobileStyle = {
    fontWeight: 600,
    fontSize: isMobile ? "12px" : "2vh",
    textTransform: "none" as const,
    padding: "3px 14px",
  };

  const tableHeadMobileStyle = {
    padding: "8px 0px",
    backgroundColor: "#fff",
  };

  return (
    <Table aria-label="simple table" stickyHeader={true}>
      <TableHead>
        <TableRow>
          <TableCell align="left" style={isMobile ? tableHeadMobileStyle : {}}>
            <ButtonWithMenu
              isMobile={isMobile}
              title={TABLE_COLUMN_LABELS.Category}
              accessorKey={"category"}
              menuItems={getUniqueValues("category")}
              indicatorsDataArr={indicatorsDataArr}
              filteredColumn={filteredColumn}
              setRows={setRows}
              setFilteredColumn={setFilteredColumn}
            />
          </TableCell>
          <TableCell align="left" style={isMobile ? tableHeadMobileStyle : {}}>
            <ButtonWithMenu
              isMobile={isMobile}
              title={TABLE_COLUMN_LABELS.Component}
              accessorKey={"group"}
              menuItems={getUniqueValues("group")}
              indicatorsDataArr={indicatorsDataArr}
              filteredColumn={filteredColumn}
              setRows={setRows}
              setFilteredColumn={setFilteredColumn}
            />
          </TableCell>
          <TableCell align="left" style={isMobile ? tableHeadMobileStyle : {}}>
            <ButtonWithMenu
              isMobile={isMobile}
              disabled={true}
              title={TABLE_COLUMN_LABELS.Indicator}
              accessorKey={"indicator"}
              menuItems={getUniqueValues("indicator")}
              indicatorsDataArr={indicatorsDataArr}
              setRows={setRows}
              filteredColumn={filteredColumn}
              setFilteredColumn={setFilteredColumn}
            />
          </TableCell>
          <TableCell
            align="center"
            style={isMobile ? tableHeadMobileStyle : {}}
          >
            <ButtonWithMenu
              isMobile={isMobile}
              title={TABLE_COLUMN_LABELS.Scope}
              accessorKey={"scope"}
              menuItems={getUniqueValues("scope")}
              indicatorsDataArr={indicatorsDataArr}
              setRows={setRows}
              filteredColumn={filteredColumn}
              setFilteredColumn={setFilteredColumn}
            />
          </TableCell>
          <TableCell
            align="center"
            style={isMobile ? tableHeadMobileStyle : {}}
          >
            <ButtonWithMenu
              isMobile={isMobile}
              title={TABLE_COLUMN_LABELS.Dimension}
              accessorKey={"dimension"}
              menuItems={getUniqueValues("dimension")}
              indicatorsDataArr={indicatorsDataArr}
              setRows={setRows}
              filteredColumn={filteredColumn}
              setFilteredColumn={setFilteredColumn}
            />
          </TableCell>
          <TableCell align="left" style={isMobile ? tableHeadMobileStyle : {}}>
            <ButtonWithMenu
              isMobile={isMobile}
              title={TABLE_COLUMN_LABELS.Type}
              accessorKey={"type"}
              menuItems={getUniqueValues("type")}
              indicatorsDataArr={indicatorsDataArr}
              setRows={setRows}
              filteredColumn={filteredColumn}
              setFilteredColumn={setFilteredColumn}
            />
          </TableCell>
          <TableCell align="left" style={isMobile ? tableHeadMobileStyle : {}}>
            <ButtonWithMenu
              isMobile={isMobile}
              title={TABLE_COLUMN_LABELS.Unit}
              accessorKey={"unit"}
              menuItems={getUniqueValues("unit")}
              indicatorsDataArr={indicatorsDataArr}
              setRows={setRows}
              filteredColumn={filteredColumn}
              setFilteredColumn={setFilteredColumn}
            />
          </TableCell>
          <TableCell align="left" style={isMobile ? tableHeadMobileStyle : {}}>
            <ButtonWithMenu
              isMobile={isMobile}
              disabled={true}
              title={TABLE_COLUMN_LABELS.Value}
              accessorKey={"natural_value"}
              menuItems={getUniqueValues("natural_value")}
              indicatorsDataArr={indicatorsDataArr}
              setRows={setRows}
            />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell
              align="left"
              style={isMobile ? tableCellMobileStyle : {}}
            >
              {row.category}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={isMobile ? tableCellMobileStyle : {}}
            >
              {row.group}
            </TableCell>
            <TableCell
              align="left"
              style={isMobile ? tableCellMobileStyle : {}}
            >
              {row.indicator}
            </TableCell>
            <TableCell
              align="center"
              style={isMobile ? tableCellMobileStyle : {}}
            >
              {row.scope}
            </TableCell>
            <TableCell
              align="center"
              style={isMobile ? tableCellMobileStyle : {}}
            >
              {getTableLabel(row.dimension)}
            </TableCell>
            <TableCell
              align="left"
              style={isMobile ? tableCellMobileStyle : {}}
            >
              {row.type}
            </TableCell>
            <TableCell
              align="left"
              style={isMobile ? tableCellMobileStyle : {}}
            >
              {row.unit}
            </TableCell>
            <TableCell
              align="left"
              style={isMobile ? tableCellMobileStyle : {}}
            >
              {Number.isInteger(row.natural_value)
                ? row.natural_value
                : Number(row.natural_value)?.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
