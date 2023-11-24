import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { PlanetsData, PlanetI } from "../interfaces/planets";

export default function Planets() {
  const [data, error, loading] = useAxiosFetch<PlanetsData>(
    "http://localhost:8080/planets/"
  );

  const columns: ColumnDefinitionType<PlanetI, keyof PlanetI>[] = [
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

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div className="flex justify-center">
      <Table data={data!.planets.results} columns={columns} />
    </div>
  );
}
