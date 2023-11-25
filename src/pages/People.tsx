import { useState } from "react";
import Table, { ColumnDefinitionType } from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { PeopleData, PersonI } from "../interfaces/people";
import PageNavigator from "../components/PageNavigator/PageNavigator";
import { calculatePagesCount } from "../utils/pagination";
import StatusComponent from "../components/Status/StatusComponent";

export default function People() {
  const [currPage, setCurrPage] = useState(1);
  const [data, error, loading] = useAxiosFetch<PeopleData>(
    `http://localhost:8080/people/${currPage}`
  );

  const columns: ColumnDefinitionType<PersonI, keyof PersonI>[] = [
    { key: "name", header: "Name" },
    { key: "height", header: "Height" },
    { key: "mass", header: "Mass" },
    {
      key: "hair_color",
      header: "Hair Color",
    },
    {
      key: "skin_color",
      header: "Skin Color",
    },
    { key: "eye_color", header: "Eye Color" },
    {
      key: "birth_year",
      header: "Birth Year",
    },
    { key: "gender", header: "Gender" },
    { key: "homeworld", header: "Homeworld" },
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
        <Table data={data!.people.results} columns={columns} />
      </div>
      <div className="flex justify-center mb-5">
        <PageNavigator
          currPage={currPage}
          totalPages={calculatePagesCount(10, data!.people.count)}
          setCurrPage={setCurrPage}
        />
      </div>
    </div>
  );
}
