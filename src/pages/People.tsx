import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { PeopleData, PersonI } from "../interfaces/people";

export default function People() {
  const [data, error, loading] = useAxiosFetch<PeopleData>(
    "http://localhost:8080/people/"
  );

  const columns: ColumnDefinitionType<PersonI, keyof PersonI>[] = [
    { key: "name", header: "Name", isLink: false },
    { key: "height", header: "Height", isLink: false },
    { key: "mass", header: "Mass", isLink: false },
    { key: "hair_color", header: "Hair Color", isLink: false },
    { key: "skin_color", header: "Skin Color", isLink: false },
    { key: "eye_color", header: "Eye Color", isLink: false },
    { key: "birth_year", header: "Birth Year", isLink: false },
    { key: "gender", header: "Gender", isLink: false },
    { key: "homeworld", header: "Homeworld", isLink: true },
  ];

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div
      className="flex justify-center"
    >
      <Table data={data!.people.results} columns={columns} />
    </div>
  );
}
