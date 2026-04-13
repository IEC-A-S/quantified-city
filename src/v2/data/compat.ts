import { CITY_DATA, POLICY_HINTS, type CityData } from "../../data";
import { getCityId } from "../../constants";
import { getCategoryKey, getCategoryLabel } from "../../utils/categories";
import {
  getV2City,
  getV2IndicatorsByCity,
  getV2IndicatorsByCityAndCategory,
} from "./selectors";

const POLICY_HINT_CITY_IDS = [
  "Dubai",
  "Expo City Dubai",
  "Valparaiso",
  "Dar es Salaam",
  "Adoni",
  "Natal",
  "Brazzaville",
  "Almaty",
  "Cape Town",
  "Mexico City",
  "Jakarta",
  "Panama",
  "Amman",
  "Bangkok",
  "Colombo",
  "Astana",
  "Lahore",
  "Nairobi",
] as const;

const LEGACY_CITY_DATA_ORDER = POLICY_HINT_CITY_IDS;

const LOCALIZED_POLICY_HINTS: Record<
  (typeof POLICY_HINT_CITY_IDS)[number],
  { E: string; S: string; G: string }
> = {
  Dubai: {
    E: "Снизить воздействие загрязнения воздуха, особенно SO2 и NO2:\r\n- стимулировать переход на электротранспорт,\r\n- развивать градостроительную политику, сокращающую необходимость дальних поездок по городу и обеспечивающую новые районы досуговой и социальной инфраструктурой.\r\n\r\nВнедрять современные технологии обращения со строительными отходами.",
    S: "Усилить социальную политику, направленную на сокращение бедности и обеспечение равенства в городе.",
    G: "Сбалансировать бюрократические процедуры с гендерной точки зрения.\r\n\r\nУсилить регулирование условий труда, прежде всего для низкоквалифицированного персонала.",
  },
  "Expo City Dubai": {
    E: "Снижать последствия загрязнения, особенно концентрации твердых частиц.\r\n- Расширять использование современной уборочной техники и технологий очистки воздуха внутри зданий.\r\n- Продолжать озеленение и высадку деревьев.",
    S: "Развивать политику в сфере здравоохранения, направленную на увеличение мощностей больниц и подготовку врачей.",
    G: "Упростить доступ МСП к размещению и аренде, запустить программу поддержки предпринимательства.\r\n\r\nСоздать единую платформу «одного окна» для всех муниципальных и государственных услуг.",
  },
  Valparaiso: {
    E: "Усилить контроль за выбросами SO2 и повысить экологические требования к судам, заходящим в порт.",
    S: "Реализовать программу развития общественных пространств в городе с созданием зон для отдыха.",
    G: "Создать экосистему для стартапов и предпринимательства.",
  },
  "Dar es Salaam": {
    E: "Разработать политику очистки источников питьевой воды, модернизации канализации и строительства очистных сооружений. Привлекать инвестиции в системы водоснабжения и водоотведения.",
    S: "Запустить программу повышения грамотности населения, развивать подготовку учителей и онлайн-образование.\r\n\r\nСодействовать развитию удаленной занятости.",
    G: "Повысить качество статистики и бухгалтерского учета.",
  },
  Adoni: {
    E: "Разработать политику рекультивации свалок и деградированных земель. Построить мусоросжигательные предприятия, которые также улучшат энергоснабжение отдельных районов.",
    S: "Запустить программу повышения безопасности дорожного движения и привлекать инвестиции для улучшения качества дорог.",
    G: "Развивать инфраструктуру мобильной связи.",
  },
  Natal: {
    E: "Развивать политику смягчения последствий стихийных бедствий с учетом роста частоты ураганов и повышения уровня моря.",
    S: "Усилить политику социальной инклюзии, развивать социальную и коммунальную инфраструктуру в зонах активного роста жилья.\r\n\r\nОрганизовывать волонтерские программы.",
    G: "Повысить прозрачность городских финансов и отчетности.",
  },
  Brazzaville: {
    E: "Усилить стратегию обращения с отходами и принять срочные меры по сохранению зеленых зон.",
    S: "Расширять мощности больниц и обеспечивать неформальные поселения базовой инфраструктурой.\r\n\r\nСоздать программу поддержки микропредприятий.",
    G: "Сделать обязательной публикацию городского бюджета и его обсуждение с заинтересованными сторонами.",
  },
  Almaty: {
    E: "Замещать уголь газом как основным источником энергии.",
    S: "Проводить транспортную политику, повышающую привлекательность общественного транспорта, реализовывать проекты LRT и BRT.",
    G: "Усилить контроль над финансовыми потоками и антикоррупционную политику.",
  },
  "Cape Town": {
    E: "Усилить стратегию обращения с отходами из-за относительно низкого уровня их переработки.",
    S: "Разработать комплексные программы по снижению детской смертности и повышению грамотности.\r\n\r\nУсилить политику социальной инклюзии.",
    G: "Разрабатывать городскую политику для повышения активности малых и средних предприятий.",
  },
  "Mexico City": {
    E: "Снижать последствия загрязнения воздуха, особенно SO2 и NO2.",
    S: "Реформировать систему здравоохранения и создать эффективную городскую службу скорой помощи.",
    G: "Уделить внимание ESG-планированию и отчетности.\r\n\r\nПовысить прозрачность городских финансов и отчетности.",
  },
  Jakarta: {
    E: "Снижать последствия высоких выбросов и концентраций CO2.\r\n\r\nУвеличивать площадь парков и зеленых зон.",
    S: "Развивать программы трансформации транспортной системы для снижения перегруженности дорог.\r\n\r\nСнижать риски высокой зависимости от импорта продовольствия.",
    G: "Повысить прозрачность городских финансов и отчетности.",
  },
  Panama: {
    E: "Улучшить политику рекультивации свалок и деградированных земель.",
    S: "Разработать программы повышения посещаемости школ и усилить подготовку учителей.\r\n\r\nУкрепить политику инклюзии, особенно в отношении женщин и беженцев.",
    G: "Повысить финансовую прозрачность городских государственных компаний.\r\n\r\nРасширять предоставление электронных госуслуг.",
  },
  Amman: {
    E: "Снижать последствия высоких концентраций NO2.\r\n\r\nУсилить стратегию обращения со строительными отходами.",
    S: "Разработать меры, позволяющие сократить число смертей в ДТП.",
    G: "Создать систему, обеспечивающую бесплатный вызов полиции, скорой помощи и пожарной службы.",
  },
  Bangkok: {
    E: "Улучшить систему обращения с отходами и внедрить более эффективные меры по снижению рисков стихийных бедствий.",
    S: "Реформировать систему скорой помощи и увеличить инвестиции в систему обязательного образования.",
    G: "Перестроить систему государственных услуг, чтобы стандартизировать процедуры и сократить время ожидания.",
  },
  Colombo: {
    E: "Несмотря на прогресс в снижении рисков стихийных бедствий, городу нужно уделить больше внимания загрязнению воздуха и воды.",
    S: "Ввести новые меры социальной поддержки для борьбы с бедностью и усилить позиции города по доступности продовольствия и благосостоянию.",
    G: "Усилить бюджетную политику и регулирование для долгосрочного планирования.\r\n\r\nИнвестировать в ESG-стратегии и отчетность.",
  },
  Astana: {
    E: "Стимулировать внедрение возобновляемых источников энергии с помощью льгот, субсидий и регуляторных механизмов.",
    S: "Развивать более быстрый, стабильный и вместительный общественный транспорт, включая линии BRT и LRT.",
    G: "Повышать участие жителей в принятии решений через инициативное бюджетирование и онлайн-платформы обратной связи.",
  },
  Lahore: {
    E: "Развитие возобновляемой энергетики и децентрализованной энергосистемы имеет ключевое значение.\r\n\r\nПовышение строительных стандартов поможет снизить загрязнение воздуха и улучшить энергоэффективность.",
    S: "Решения по управлению общественным транспортом должны приниматься с учетом развития города и комфорта жителей.\r\n\r\nИнституты градостроительного планирования должны играть ключевую роль в развитии Лахора.",
    G: "Для устойчивого роста нужны институциональные реформы, инклюзивные правила зонирования, инфраструктурные инвестиции и градостроительное планирование на основе данных.",
  },
  Nairobi: {
    E: "Снижать последствия загрязнения воздуха, особенно выбросов CO2 и концентрации CO. Продолжать высадку деревьев, развивать переработку и компостирование, инвестировать в объездные дороги для снижения трафика и выхлопов.",
    S: "Улучшать инфраструктуру коммунальных услуг, расширяя доступ к питьевой воде, санитарии и гигиене.\r\n\r\nРазвивать стратегии продовольственной безопасности и минимальные стандарты инфраструктурной обеспеченности.",
    G: "Повысить прозрачность ESG-практик и отчетности города.\r\n\r\nФормировать благоприятную деловую среду и активнее внедрять международный опыт устойчивого управления.",
  },
};

export interface CompatibleIndicator {
  category: string;
  categoryId: string;
  indicator: string;
  unit?: string;
  value: number;
  natural_value: number;
  meta: {
    id?: number;
    component?: string;
    categoryLabel: string;
    scope?: number;
    dimension?: string;
    type?: string;
    unit?: string;
    sourceType?: string;
    source?: string;
  };
}

export interface CompatibleIndicatorCityDataset {
  city: string;
  data: CompatibleIndicator[];
}

export const getCompatibleCityData = (cityRef?: string | null): CityData | undefined => {
  const cityId = getCityId(cityRef);
  const v2City = getV2City(cityRef);

  const matchedCity =
    CITY_DATA.find((city) => getCityId(city.City) === cityId) ??
    CITY_DATA.find((city) => city.City === v2City?.label);

  if (matchedCity) {
    return matchedCity as CityData;
  }

  const legacyIndex = LEGACY_CITY_DATA_ORDER.indexOf(
    cityId as (typeof LEGACY_CITY_DATA_ORDER)[number]
  );

  return legacyIndex >= 0 ? (CITY_DATA[legacyIndex] as CityData | undefined) : undefined;
};

export const getCompatibleCityLabel = (cityRef?: string | null) =>
  getV2City(cityRef)?.label ?? getCompatibleCityData(cityRef)?.City ?? cityRef ?? "";

export const getCompatibleCityId = (cityRef?: string | null) =>
  getV2City(cityRef)?.id ?? getCityId(cityRef);

export const getCompatiblePolicyHints = (cityRef?: string | null) => {
  const cityId = getCompatibleCityId(cityRef);
  const localizedHints =
    cityId &&
    cityId in LOCALIZED_POLICY_HINTS
      ? LOCALIZED_POLICY_HINTS[cityId as keyof typeof LOCALIZED_POLICY_HINTS]
      : null;

  if (localizedHints) {
    return {
      city: cityId,
      ...localizedHints,
    };
  }

  return (
    POLICY_HINTS.find((hint) => getCityId(hint.city) === cityId) ??
    POLICY_HINTS[POLICY_HINT_CITY_IDS.indexOf(cityId as (typeof POLICY_HINT_CITY_IDS)[number])] ??
    null
  );
};

export const getCompatibleIndicators = (
  cityRef?: string | null
): CompatibleIndicator[] =>
  getV2IndicatorsByCity(cityRef).map((indicator) => ({
    category: indicator.categoryLabel,
    categoryId: indicator.categoryId,
    indicator: indicator.label,
    unit: indicator.meta.unit ?? indicator.unit,
    value: indicator.rawValue,
    natural_value: indicator.assessmentScore ?? 0,
    meta: indicator.meta,
  }));

export const getCompatibleIndicatorDataset = (): CompatibleIndicatorCityDataset[] => {
  const groupedIndicators = new Map<string, CompatibleIndicator[]>();

  for (const city of CITY_DATA) {
    groupedIndicators.set(city.City, getCompatibleIndicators(city.City));
  }

  return Array.from(groupedIndicators.entries()).map(([city, data]) => ({
    city,
    data,
  }));
};

export const getCompatibleIndicatorsByCategory = (
  cityRef?: string | null,
  categoryRef?: string | null
): CompatibleIndicator[] => {
  const categoryId = getCategoryKey(categoryRef ?? "");
  const categoryLabel = getCategoryLabel(categoryRef ?? "");

  return getV2IndicatorsByCityAndCategory(cityRef, categoryRef).map((indicator) => ({
    category: categoryLabel,
    categoryId,
    indicator: indicator.label,
    unit: indicator.meta.unit ?? indicator.unit,
    value: indicator.rawValue,
    natural_value: indicator.assessmentScore ?? 0,
    meta: indicator.meta,
  }));
};

export const getCompatibleIndicatorTableRows = (cityRef?: string | null) =>
  getCompatibleIndicators(cityRef).map((indicator) => ({
    id: indicator.meta.id,
    group: indicator.meta.component,
    category: indicator.meta.categoryLabel,
    indicator: indicator.indicator,
    scope: indicator.meta.scope,
    dimension: indicator.meta.dimension,
    type: indicator.meta.type,
    unit: indicator.meta.unit,
    natural_value: indicator.value,
  }));
