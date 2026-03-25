import cityDataArr from "../indicatorsData.json";
import newValuesForIndicators from "../indeicatorsData_newValues.json";
import newIndicatorsDescription from "../indicatorDescriptionData.json";
import boxplotData from "./timeLossInTrafficData.json";
import testJson1 from "./testJson1.json";
import testJson2 from "./testJson2.json";

let city = "Дубай";
import triLineData from "./TransportResiliensPopupData.json";
const dataArr = triLineData
  .filter((cityData) => {
    if (cityData.city === city) {
      return cityData;
    }
  })
  .map((cityData) => {
    return cityData.data;
  });
//console.log(dataArr);

import { CITY_DATA } from "../index";

export const TestPage = () => {
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
          natural_value: newValues?.Value
            ? newValues.Value
            : indicator.natural_value,
          unit: newDescription?.Unit ? newDescription.Unit : indicator.unit,
        };
      }
    });
    return {
      ...cityData,
      data: indicatorsData,
    };
  });

  const TransportCategoryData = indicatorsDataNewValues.map((cityData) => {
    const TransportCategoryData = cityData.data.filter((indicator) => {
      if (indicator.category === "Транспорт") {
        if (
          indicator.indicator !==
            "Соотношение стоимости ежемесячного пользования общественным транспортом (самый дешевый вариант) к среднемесячному доходу" &&
          indicator.indicator !==
            "Процент городских дорог, которые разделены и/или имеют выделенные полосы для велосипедистов"
        ) {
          return indicator;
        }
      }
    });
    return {
      ...cityData,
      data: TransportCategoryData,
    };
  });

  //console.log(TransportCategoryData);
  const city = "Дубай";
  const timeLossInTrafficByCity = boxplotData
    .filter((cityData) => {
      if (cityData.city === city) {
        return cityData;
      }
    })
    .map((cityData) => {
      return cityData.time_loss;
    });

  const TransportResilienceIndex = CITY_DATA.find((cityData) => {
    if (cityData.City === city) {
      //return "Transport Resilience Index" from item
      return cityData;
    }
  });
  //console.log(TransportResilienceIndex?.["Transport Resilience Index"]);

  const allIndicatorsData = testJson1.map((indicatorValuesData) => {
    const indicatorDescriptionData = testJson2.find(
      (indicatorDescriptionData) => {
        if (
          indicatorDescriptionData.City === indicatorValuesData.City &&
          indicatorDescriptionData.ID === indicatorValuesData.ID
        ) {
          return indicatorDescriptionData;
        }
      }
    );
    switch (indicatorValuesData.Value) {
      case "1. Нет планов, направленных на достижение каких-либо компонентов Цели 3 или повышение LEaB":
        indicatorValuesData.Value = "1";
        break;
      case "2. Страна/город имеет план, направленный на достижение каких-либо компонентов Цели 3":
        indicatorValuesData.Value = "2";
        break;
      case "3. Страна/город имеет план, непосредственно направленный на повышение LEaB":
        indicatorValuesData.Value = "3";
        break;
      default:
        break;
    }
    return {
      ID: indicatorValuesData.ID,
      City: indicatorValuesData.City,
      Indicator: indicatorValuesData.Indicator,
      Value: indicatorValuesData.Value,
      NaturalValue: indicatorValuesData.Assessment,
      Category: indicatorDescriptionData!.Category,
      Component: indicatorDescriptionData!.Component,
      Scope: indicatorDescriptionData!.Scope,
      Dimension: indicatorDescriptionData!.Dimension,
      Key: indicatorDescriptionData!["Key/Supportive"],
      Unit: indicatorDescriptionData!.Unit,
      TypeOfVariable: indicatorDescriptionData!["Type of Variable"],
      SourceType: indicatorDescriptionData!["Source Type"],
      Source: indicatorDescriptionData!.Source,
    };
  });

  const uniqueCities = Array.from(
    new Set(allIndicatorsData.map((item) => item.City))
  );

  const AssesmentStringToNumber = (value: string) => {
    switch (value) {
      case "Очень низкий":
        return 1;
      case "Низкий":
        return 2;
      case "Средний":
        return 3;
      case "Высокий":
        return 4;
      case "Очень высокий":
        return 5;
      default:
        break;
    }
  };

  const indicatorsData = uniqueCities.map((city) => {
    const indicatorsData = allIndicatorsData
      .filter((indicatorData) => {
        if (indicatorData.City === city) {
          return indicatorData;
        }
      })
      .map((indicatorData) => {
        const value = Number(indicatorData.Value);
        const naturalValue = AssesmentStringToNumber(
          indicatorData.NaturalValue
        );

        return {
          category: indicatorData.Category,
          indicator: indicatorData.Indicator,
          unit: indicatorData.Unit,
          value: value,
          natural_value: naturalValue,
        };
      });
    return {
      city: city,
      data: indicatorsData,
    };
  });

  //console.log(indicatorsData);

  const indicatorsDescriptionData = allIndicatorsData.map((indicatorData) => {
    return {
      ID: indicatorData.ID,
      Component: indicatorData.Component,
      Category: indicatorData.Category,
      Indicator: indicatorData.Indicator,
      Scope: indicatorData.Scope,
      Dimension: indicatorData.Dimension,
      "Key/Supportive": indicatorData.Key,
      Unit: indicatorData.Unit,
      "Type of Variable": indicatorData.TypeOfVariable,
      "Source Type": indicatorData.SourceType,
      Source: indicatorData.Source,
      City: indicatorData.City,
    };
  });

  //console.log(indicatorsDescriptionData);

  const indeicatorsData_newValues = allIndicatorsData.map((indicatorData) => {
    const value = Number(indicatorData.Value);
    const naturalValue = AssesmentStringToNumber(indicatorData.NaturalValue);

    return {
      ID: indicatorData.ID,
      Indicator: indicatorData.Indicator,
      City: indicatorData.City,
      Value: value,
      Assessment: naturalValue,
    };
  });

  //console.log(indeicatorsData_newValues);

  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <pre>
        {/* {JSON.stringify(indicatorsData, null, 2)} */}
        {/* {JSON.stringify(indicatorsDescriptionData, null, 2)} */}
        {/* {JSON.stringify(indeicatorsData_newValues, null, 2)} */}
        {/* {TransportResilienceIndex?.["Transport Resilience Index"]} */}
      </pre>
    </div>
  );
};
