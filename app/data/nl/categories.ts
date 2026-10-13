import type { CategoryContent } from "../categories";
import type { ServiceCategory } from "../services/types";

// Pages métier en néerlandais (/nl/verwarming…) : traduction de
// app/data/categories.ts, à faire relire par un néerlandophone. Ne pas importer
// ../services (index) ici : seulement des types (dépendance circulaire).

export const categoryLabelsNl: Record<ServiceCategory, string> = {
  chauffage: "Verwarming",
  electricite: "Elektriciteit",
  plomberie: "Sanitair",
  climatisation: "Airco",
  professionnels: "Professionals",
};

export const categoriesNl: Partial<Record<ServiceCategory, CategoryContent>> = {};
