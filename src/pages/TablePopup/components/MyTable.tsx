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
import cityDataArr from "../../../data/indicatorsData.json";
import newValuesForIndicators from "../../../data/indeicatorsData_newValues.json";
import newIndicatorsDescription from "../../../data/indicatorDescriptionData.json";
import { useSelectedCityData } from "../../../hooks/useSelectedCityData";

const city = "Dubai";

const createData = (
  id: number | undefined,
  group: string | undefined,
  category: string | undefined,
  indicator: string | undefined,
  scope: number | undefined,
  dimension: string | undefined,
  type: string | undefined,
  unit: string | undefined,
  natural_value: number | string | undefined
) => {
  return {
    id,
    group,
    category,
    indicator,
    scope,
    dimension,
    type,
    unit,
    natural_value,
  };
};

export const MyTable = ({ isMobile }) => {
  const { classes } = useImageSectionStyles();
  const selectedCity = useSelectedCityData();
  const city = selectedCity.City;


  const indicatorsDataNewValues = cityDataArr.map((cityData) => {
    const indicatorsData = cityData.data.map((indicator) => {
      const newValues = newValuesForIndicators.find(
        (newValues) =>
          newValues.City === cityData.city &&
          newValues.Indicator === indicator.indicator
      );
      const newDescription = newIndicatorsDescription.find(
        (newDescription) =>
          newDescription.City === cityData.city &&
          newDescription.Indicator === indicator.indicator
      );
      if (newValues?.Value === 0) {
        return {
          ...indicator,
          value: newValues?.Assessment ? newValues.Assessment : indicator.value,
          natural_value: 0,
          unit: newDescription?.Unit ? newDescription.Unit : indicator.unit,
        };
      } else {
        return {
          ...indicator,
          value: newValues?.Assessment ? newValues.Assessment : indicator.value,
          natural_value: newValues?.Value ? newValues.Value : indicator.natural_value,
          unit: newDescription?.Unit ? newDescription.Unit : indicator.unit,
        };
      }
    });
    return {
      ...cityData,
      data: indicatorsData,
    };
  }
  );

  const indicatorsData = indicatorsDataNewValues.find(
    (cityData) => cityData.city === city
  )!.data;

  const [filteredColumn, setFilteredColumn] = useState("");

  //map through indicatorsData and create array of objects with vallues from TABLE_DATA and indicatorsData where indicator is the same

  const getUniqueValues = (key: string) => {
    const values = rowsInit.map((row) => row[key]);
    return [...new Set(values)];
  };

  const indicatorsDataArr = indicatorsData.map((indicator) => {
    const indicatorData = newIndicatorsDescription.find(
      (item) => item.Indicator === indicator.indicator
    );
    return {
      id: indicatorData?.ID,
      group: indicatorData?.Component,
      category: indicatorData?.Category,
      indicator: indicatorData?.Indicator,
      scope: indicatorData?.Scope,
      dimension: indicatorData?.Dimension,
      type: indicatorData?.["Type of Variable"],
      unit: indicatorData?.Unit,
      natural_value: indicator.natural_value,
    };
  });

  const rowsInit = indicatorsDataArr.map((item) => {
    return createData(
      item.id,
      item.group,
      item.category,
      item.indicator,
      item.scope,
      item.dimension,
      item.type,
      item.unit,
      item.natural_value
    );
  });

  const [rows, setRows] = useState(rowsInit);

  const tableCellMobileStyle = {
    
    fontWeight: 600,
    fontSize: isMobile ? "12px" : "2vh",
    textTransform: "none",
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
              title={"Category"}
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
              title={"Component"}
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
              title={"Indicator"}
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
              title={"Scope"}
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
              title={"Dimension"}
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
              title={"Type"}
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
              title={"Unit"}
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
              title={"Value"}
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
              {row.dimension}
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
