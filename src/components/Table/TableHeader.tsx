import { ColumnDefinitionType } from "./Table";

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
  handleHeaderClick(clickedCol: keyof T): void;
};

const TableHeader = <T, K extends keyof T>({
  columns,
  handleHeaderClick,
}: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    return (
      <th
        key={`headCell-${index}`}
        className="py-3 px-5"
        onClick={() => handleHeaderClick(column.key)}
      >
        {column.header}
      </th>
    );
  });

  return (
    <thead className="bg-[#0A0A0A] w-full text-white font-bold">
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
