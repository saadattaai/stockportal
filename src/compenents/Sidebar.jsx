
import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Home", path: "/" },
    { name: "Income", path: "/income" },
    { name: "Expenses", path: "/expenses" },
    { name: "Todo List", path: "/todo" },
    { name: "Projects", path: "/projects" },
    { name: "Profile", path: "/profile" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="fixed bottom-0 left-0 top-16 hidden w-64 bg-gray-950 text-white md:block">
      <div className="p-5">

        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold">
            F
          </div>

          <div>
            <h2 className="font-bold">Finance</h2>
            <p className="text-xs text-gray-500">
              Management
            </p>
          </div>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Main Menu
        </p>

        <nav className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

      </div>
    </aside>
  );
}

export default Sidebar;

