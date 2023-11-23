import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { Starship, StarshipsData } from "../interfaces/starships";

export default function Starships() {
  const [data, error, loading] = useAxiosFetch<StarshipsData>(
    "http://localhost:8080/starships/"
  );


  const columns: ColumnDefinitionType<Starship, keyof Starship>[] = [
    { key: "name", header: "Name", width: 150 },
    { key: "model", header: "Model", width: 150 },
    { key: "manufacturer", header: "Manufacturer", width: 150 },
    { key: "cost_in_credits", header: "Cost in Credits", width: 150 },
    { key: "length", header: "Length", width: 150 },
    {
      key: "max_atmosphering_speed",
      header: "Max Atmosphering Speed",
      width: 150,
    },
    { key: "crew", header: "Crew", width: 150 },
    { key: "passengers", header: "Passengers", width: 150 },
    { key: "cargo_capacity", header: "Cargo Capacity", width: 150 },
    { key: "consumables", header: "Consumables", width: 150 },
    { key: "hyperdrive_rating", header: "Hyperdrive Rating", width: 150 },
    { key: "MGLT", header: "MGLT", width: 150 },
    { key: "starship_class", header: "Starship Class", width: 150 },
  ];

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div className="">
      <Table data={data!.starships.results} columns={columns} />;
    </div>
  );
}
