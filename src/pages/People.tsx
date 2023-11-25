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
    { key: "name", header: "Name", isLink: false, isSortable: false },
    { key: "height", header: "Height", isLink: false, isSortable: false },
    { key: "mass", header: "Mass", isLink: false, isSortable: false },
    {
      key: "hair_color",
      header: "Hair Color",
      isLink: false,
      isSortable: false,
    },
    {
      key: "skin_color",
      header: "Skin Color",
      isLink: false,
      isSortable: false,
    },
    { key: "eye_color", header: "Eye Color", isLink: false, isSortable: false },
    {
      key: "birth_year",
      header: "Birth Year",
      isLink: false,
      isSortable: false,
    },
    { key: "gender", header: "Gender", isLink: false, isSortable: false },
    { key: "homeworld", header: "Homeworld", isLink: true, isSortable: false },
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
