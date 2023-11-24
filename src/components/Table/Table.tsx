import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

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
  return (
    <table className=" [&>tbody>*:nth-child(odd)]:bg-[#f3f3f3] table-auto border border-collapse max-w-lg">
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  );
};

export default Table;
