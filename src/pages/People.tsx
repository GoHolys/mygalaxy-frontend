import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { PeopleData, PersonI } from "../interfaces/people";

export default function People() {
  const [data, error, loading] = useAxiosFetch<PeopleData>(
    "http://localhost:8080/people/"
  );

  const columns: ColumnDefinitionType<PersonI, keyof PersonI>[] = [
    { key: "name", header: "Name", width: 150, isLink: false },
    { key: "height", header: "Height", width: 150, isLink: false },
    { key: "mass", header: "Mass", width: 150, isLink: false },
    { key: "hair_color", header: "Hair Color", width: 150, isLink: false },
    { key: "skin_color", header: "Skin Color", width: 150, isLink: false },
    { key: "eye_color", header: "Eye Color", width: 150, isLink: false },
    { key: "birth_year", header: "Birth Year", width: 150, isLink: false },
    { key: "gender", header: "Gender", width: 150, isLink: false },
    { key: "homeworld", header: "Homeworld", width: 150, isLink: true },
  ];

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div className="">
      <Table data={data!.people.results} columns={columns} />
    </div>
  );
}
