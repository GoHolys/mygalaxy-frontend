import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import { sortData } from "../../utils/sortData";

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  isLink?: boolean;
};

type TableProps<T, K extends keyof T> = {
  data: Array<T & { url: string }>;
  columns: Array<ColumnDefinitionType<T & { url: string }, K>>;
};

const Table = <T, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>): JSX.Element => {
  const [sort, setSort] = useState<{
    sortCol: keyof T | null;
    sortOrder: "asc" | "desc" | null;
  }>({
    sortCol: null,
    sortOrder: null,
  });

  function handleHeaderClick(clickedCol: keyof T) {
    setSort({
      sortCol: clickedCol,
      sortOrder:
        sort.sortCol === clickedCol
          ? sort.sortOrder === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  }

  return (
    <table className=" [&>tbody>*:nth-child(odd)]:bg-[#f3f3f3] table-auto border border-collapse max-w-lg">
      <TableHeader columns={columns} handleHeaderClick={handleHeaderClick} />
      <TableRows
        data={sortData(data, sort.sortCol, sort.sortOrder)}
        columns={columns}
      />
    </table>
  );
};

export default Table;
