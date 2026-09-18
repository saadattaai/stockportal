
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/react";

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b bg-white shadow-sm">
      <div className="flex h-full items-center justify-between px-4 md:px-8">

        <Link
          to="/dashboard"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
            F
          </div>

          <h1 className="text-xl font-bold text-gray-900">
            Finance Dashboard
          </h1>
        </Link>

        <div className="flex items-center gap-4">

          <Link
            to="/dashboard"
            className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 md:block"
          >
            Dashboard
          </Link>

          <Link
            to="/notifications"
            className="rounded-xl px-3 py-2 text-sm text-gray-500 hover:bg-gray-100"
          >
            Notifications
          </Link>

          <UserButton />

        </div>

      </div>
    </header>
  );
}

export default Navbar;