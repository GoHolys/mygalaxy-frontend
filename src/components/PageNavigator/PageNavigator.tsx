import React from "react";

interface PageNavigator {
  totalPages: number;
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PageNavigator({
  totalPages,
  currPage,
  setCurrPage,
}: PageNavigator) {
  return (
    <ul className="flex self-center gap-x-10">
      {Array.from({ length: totalPages }).map((_, i) => (
        <li
          className={`${currPage === i + 1 && "text-blue-600"}`}
          onClick={() => setCurrPage(i + 1)}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
}
