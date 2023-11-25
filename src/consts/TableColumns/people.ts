import { ColumnDefinitionType } from "../../components/Table/Table";
import { PersonI } from "../../interfaces/people";

export const columns: ColumnDefinitionType<PersonI, keyof PersonI>[] = [
  { key: "name", header: "Name", isLink: false },
  { key: "height", header: "Height", isLink: false },
  { key: "mass", header: "Mass", isLink: false },
  {
    key: "hair_color",
    header: "Hair Color",
    isLink: false,
  },
  {
    key: "skin_color",
    header: "Skin Color",
    isLink: false,
  },
  { key: "eye_color", header: "Eye Color", isLink: false },
  {
    key: "birth_year",
    header: "Birth Year",
    isLink: false,
  },
  { key: "gender", header: "Gender", isLink: false },
  { key: "homeworld", header: "Homeworld", isLink: true },
];
