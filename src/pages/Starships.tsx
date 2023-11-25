import { useState } from "react";
import PageNavigator from "../components/PageNavigator/PageNavigator";
import StatusComponent from "../components/Status/StatusComponent";
import Table from "../components/Table/Table";
import { columns } from "../consts/TableColumns/starships";
import { useAxiosFetch } from "../hooks/useFetch";
import { StarshipsData } from "../interfaces/starships";
import { calculatePagesCount } from "../utils/pagination";

export default function Starships() {
  const [currPage, setCurrPage] = useState(1);
  const [data, error, loading] = useAxiosFetch<StarshipsData>(
    `http://localhost:8080/starships/${currPage}`
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
        <Table data={data!.starships.results} columns={columns} />
      </div>
      <div className="flex justify-center mb-5">
        <PageNavigator
          currPage={currPage}
          totalPages={calculatePagesCount(10, data!.starships.count)}
          setCurrPage={setCurrPage}
        />
      </div>
    </div>
  );
}
