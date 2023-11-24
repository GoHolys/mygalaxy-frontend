import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { Starship, StarshipsData } from "../interfaces/starships";

export default function Starships() {
  const [data, error, loading] = useAxiosFetch<StarshipsData>(
    "http://localhost:8080/starships/"
  );

  const columns: ColumnDefinitionType<Starship, keyof Starship>[] = [
    { key: "name", header: "Name"},
    { key: "model", header: "Model"},
    { key: "manufacturer", header: "Manufacturer"},
    { key: "cost_in_credits", header: "Cost in Credits"},
    { key: "length", header: "Length"},
    {
      key: "max_atmosphering_speed",
      header: "Max Atmosphering Speed",
    },
    { key: "crew", header: "Crew"},
    { key: "passengers", header: "Passengers"},
    { key: "cargo_capacity", header: "Cargo Capacity"},
    { key: "consumables", header: "Consumables"},
    { key: "hyperdrive_rating", header: "Hyperdrive Rating"},
    { key: "MGLT", header: "MGLT"},
    { key: "starship_class", header: "Starship Class"},
  ];

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div className="flex justify-center">
      <Table data={data!.starships.results} columns={columns} />
    </div>
  );
}
