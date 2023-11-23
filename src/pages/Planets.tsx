import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { PlanetsData, PlanetI } from "../interfaces/planets";

export default function Planets() {
  const [data, error, loading] = useAxiosFetch<PlanetsData>(
    "http://localhost:8080/planets/"
  );

  const columns: ColumnDefinitionType<PlanetI, keyof PlanetI>[] = [
    { key: "name", header: "Name", width: 150 },
    { key: "rotation_period", header: "Rotation Period", width: 150 },
    { key: "orbital_period", header: "Orbital Period", width: 150 },
    { key: "diameter", header: "Diameter", width: 150 },
    { key: "climate", header: "Climate", width: 150 },
    { key: "gravity", header: "Gravity", width: 150 },
    { key: "terrain", header: "Terrain", width: 150 },
    { key: "surface_water", header: "Surface Water", width: 150 },
    { key: "population", header: "Population", width: 150 },
  ];

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div className="">
      <Table data={data!.planets.results} columns={columns} />
    </div>
  );
}
