import { NavLink } from "react-router-dom";
import { links } from "../../consts/links";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5 mt-6 justify-center">
        {links.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-red-500" : " bg-blue-500"
                }  text-white font-bold py-2 px-4 rounded active:bg-violet-700`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
