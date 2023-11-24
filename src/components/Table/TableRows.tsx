import { ReactNode } from "react";
import { ColumnDefinitionType } from "./Table";
import { useNavigate } from "react-router-dom";

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

const TableRows = <T extends { url: string }, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>): JSX.Element => {
  const navigate = useNavigate();

  const handleRowClick = (e: React.MouseEvent, url: string) => {
    const subUrl = url.split("/api/")[1];
    console.log(subUrl);
    navigate(`/${subUrl}`);
    e.stopPropagation();
  };

  const rows = data.map((row, index) => {
    return (
      <tr
        key={`row-${index}`}
        onClick={(e) => handleRowClick(e, row.url)}
        className="cursor-pointer border-b-[#dddddd] border-2"
      >
        {columns.map((column, index2) => {
          return (
            <td
              className="py-3 px-5"
              key={`cell-${index2}`}
              onClick={(e) =>
                column.isLink
                  ? handleRowClick(e, row[column.key] as string)
                  : null
              }
            >
              {row[column.key] as ReactNode}
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
