import { CATEGORY_LABELS } from "../../utils/categories";

export const V2_CATEGORIES = Object.entries(CATEGORY_LABELS).map(
  ([key, label]) => ({
    id: key,
    label,
  })
);
