import { parseStringOrNumber } from "./parseUtil";

export function sortData<T extends Record<string, string>>(
  data: T[],
  sortColumn: keyof T | null,
  sortOrder: null | "asc" | "desc"
) {
  if (sortColumn) {
    if (sortOrder === "asc") {
      return data.sort((a, b) =>
        parseStringOrNumber(a[sortColumn]) > parseStringOrNumber(b[sortColumn])
          ? -1
          : 1
      );
    }
    return data.sort((a, b) =>
      parseStringOrNumber(a[sortColumn]) > parseStringOrNumber(b[sortColumn])
        ? 1
        : -1
    );
  }
  return data;
}
