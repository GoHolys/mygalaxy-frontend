import { useState } from "react";
import PageNavigator from "../components/PageNavigator/PageNavigator";
import StatusComponent from "../components/Status/StatusComponent";
import Table from "../components/Table/Table";
import { columns } from "../consts/TableColumns/planets";
import { useAxiosFetch } from "../hooks/useFetch";
import { PlanetsData } from "../interfaces/planets";
import { calculatePagesCount } from "../utils/pagination";

export default function Planets() {
  const [currPage, setCurrPage] = useState(1);
  const [data, error, loading] = useAxiosFetch<PlanetsData>(
    `http://localhost:8080/planets/${currPage}`
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
