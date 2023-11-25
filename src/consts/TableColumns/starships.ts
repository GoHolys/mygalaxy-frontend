import { ColumnDefinitionType } from "../../components/Table/Table";
import { StarshipI } from "../../interfaces/starships";

export const columns: ColumnDefinitionType<StarshipI, keyof StarshipI>[] = [
  { key: "name", header: "Name" },
  { key: "model", header: "Model" },
  { key: "manufacturer", header: "Manufacturer" },
  { key: "cost_in_credits", header: "Cost in Credits" },
  { key: "length", header: "Length" },
  {
    key: "max_atmosphering_speed",
    header: "Max Atmosphering Speed",
  },
  { key: "crew", header: "Crew" },
  { key: "passengers", header: "Passengers" },
  { key: "cargo_capacity", header: "Cargo Capacity" },
  { key: "consumables", header: "Consumables" },
  { key: "hyperdrive_rating", header: "Hyperdrive Rating" },
  { key: "MGLT", header: "MGLT" },
  { key: "starship_class", header: "Starship Class" },
];
