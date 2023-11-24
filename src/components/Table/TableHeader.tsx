import { ColumnDefinitionType } from "./Table";

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
};

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    return (
      <th key={`headCell-${index}`} className="py-3 px-5">
        {column.header}
      </th>
    );
  });

  return (
    <thead className="bg-[#0A0A0A] w-full text-white font-bold  rounded-tl-xl rounded-tr-3xl">
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
