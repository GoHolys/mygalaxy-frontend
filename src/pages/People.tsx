import { useState } from "react";
import PageNavigator from "../components/PageNavigator/PageNavigator";
import StatusComponent from "../components/Status/StatusComponent";
import Table from "../components/Table/Table";
import { useAxiosFetch } from "../hooks/useFetch";
import { PeopleData } from "../interfaces/people";
import { calculatePagesCount } from "../utils/pagination";
import { columns } from "../consts/TableColumns/people";

export default function People() {
  const [currPage, setCurrPage] = useState(1);
  const [data, error, loading] = useAxiosFetch<PeopleData>(
    `http://localhost:8080/people/${currPage}`
  );

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
