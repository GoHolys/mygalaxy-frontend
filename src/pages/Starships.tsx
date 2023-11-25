import { useState } from "react";
import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { StarshipI, StarshipsData } from "../interfaces/starships";
import PageNavigator from "../components/PageNavigator/PageNavigator";
import { calculatePagesCount } from "../utils/pagination";

export default function Starships() {
  const [currPage, setCurrPage] = useState(1);
  const [data, error, loading] = useAxiosFetch<StarshipsData>(
    `http://localhost:8080/starships/${currPage}`
  );

  const columns: ColumnDefinitionType<StarshipI, keyof StarshipI>[] = [
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

  if (loading) {
    return <h1 className="text-center text-3xl font-bold">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-3xl font-bold">error</h1>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-5">
        <Table data={data!.starships.results} columns={columns} />
      </div>
      <div className="flex justify-center">
        <PageNavigator
          currPage={currPage}
          totalPages={calculatePagesCount(10, data!.starships.count)}
          setCurrPage={setCurrPage}
        />
      </div>
    </div>
  );
}
