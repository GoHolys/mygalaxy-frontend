import { ColumnDefinitionType } from "../../components/Table/Table";
import { PersonI } from "../../interfaces/people";

export const columns: ColumnDefinitionType<PersonI, keyof PersonI>[] = [
    { key: "name", header: "Name" },
    { key: "height", header: "Height" },
    { key: "mass", header: "Mass" },
    {
      key: "hair_color",
      header: "Hair Color",
    },
    {
      key: "skin_color",
      header: "Skin Color",
    },
    { key: "eye_color", header: "Eye Color" },
    {
      key: "birth_year",
      header: "Birth Year",
    },
    { key: "gender", header: "Gender" },
    { key: "homeworld", header: "Homeworld" },
  ];