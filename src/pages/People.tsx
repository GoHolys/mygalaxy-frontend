import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { PeopleData, Person } from "../interfaces/people";

export default function People() {
  const [data, error, loading] = useAxiosFetch<PeopleData>(
    "http://localhost:8080/people/"
  );

  const columns: ColumnDefinitionType<Person, keyof Person>[] = [
    { key: "name", header: "Name", width: 150 },
    { key: "height", header: "Height", width: 150 },
    { key: "mass", header: "Mass", width: 150 },
    { key: "hair_color", header: "Hair Color", width: 150 },
    { key: "skin_color", header: "Skin Color", width: 150 },
    { key: "eye_color", header: "Eye Color", width: 150 },
    { key: "birth_year", header: "Birth Year", width: 150 },
    { key: "gender", header: "Gender", width: 150 },
    { key: "homeworld", header: "Homeworld", width: 150 },
    { key: "films", header: "Films", width: 150 },
    { key: "species", header: "Species", width: 150 },
    { key: "vehicles", header: "Vehicles", width: 150 },
    { key: "starships", header: "Starships", width: 150 },
    { key: "created", header: "Created", width: 150 },
    { key: "edited", header: "Edited", width: 150 },
    { key: "url", header: "URL", width: 150 },
  ];

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div>
      <Table data={data!.people.results} columns={columns} />
    </div>
  );
}
