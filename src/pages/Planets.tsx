import { useState } from "react";
import PageNavigator from "../components/PageNavigator/PageNavigator";
import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { PlanetsData, PlanetI } from "../interfaces/planets";
import { calculatePagesCount } from "../utils/pagination";
import StatusComponent from "../components/Status/StatusComponent";

export default function Planets() {
  const [currPage, setCurrPage] = useState(1);
  const [data, error, loading] = useAxiosFetch<PlanetsData>(
    `http://localhost:8080/planets/${currPage}`
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

  if (loading) {
    return <StatusComponent message="Loading..." />;
  }

  if (error) {
    return <StatusComponent message="Error" />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-5">
        <Table data={data!.planets.results} columns={columns} />
      </div>
      <div className="flex justify-center mb-5">
        <PageNavigator
          currPage={currPage}
          totalPages={calculatePagesCount(10, data!.planets.count)}
          setCurrPage={setCurrPage}
        />
      </div>
    </div>
  );
}
