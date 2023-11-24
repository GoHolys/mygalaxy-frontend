import { NavLink } from "react-router-dom";
import { links } from "../../consts/links";

export default function Navbar() {
  return (
    <ul className="flex gap-x-5 justify-center">
      {links.map((item) => (
        <li key={item.title}>
          <NavLink
            to={item.url}
            className={({ isActive }) =>
              `${
                isActive ? "bg-red-500" : "bg-blue-500"
              }  text-white font-bold py-2 px-4 rounded `
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
