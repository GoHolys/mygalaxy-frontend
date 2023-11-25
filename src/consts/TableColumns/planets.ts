import { ColumnDefinitionType } from "../../components/Table/Table";
import { PlanetI } from "../../interfaces/planets";

export const columns: ColumnDefinitionType<PlanetI, keyof PlanetI>[] = [
  { key: "name", header: "Name" },
  { key: "rotation_period", header: "Rotation Period" },
  { key: "orbital_period", header: "Orbital Period" },
  { key: "diameter", header: "Diameter" },
  { key: "climate", header: "Climate" },
  { key: "gravity", header: "Gravity" },
  { key: "terrain", header: "Terrain" },
  { key: "surface_water", header: "Surface Water" },
  { key: "population", header: "Population" },
];
