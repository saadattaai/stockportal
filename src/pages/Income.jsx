
import { Link } from "react-router-dom";

function Income() {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b bg-white shadow-sm">
        <div className="flex h-full items-center justify-between px-4 md:px-8">

          <Link
            to="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
              F
            </div>

            <h1 className="text-xl font-bold text-gray-900">
              Finance Dashboard
            </h1>
          </Link>

          <Link
            to="/dashboard"
            className="rounded-xl bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700"
          >
            Dashboard
          </Link>

        </div>
      </header>

      <aside className="fixed bottom-0 left-0 top-16 hidden w-64 bg-gray-950 text-white md:block">

        <div className="p-5">

          <h2 className="mb-6 text-xl font-bold">
            Finance
          </h2>

          <nav className="space-y-2">

            <Link
              to="/dashboard"
              className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              to="/"
              className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/income"
              className="block rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white"
            >
              Income
            </Link>

            <Link
              to="/expenses"
              className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Expenses
            </Link>

            <Link
              to="/todo"
              className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Todo List
            </Link>

            <Link
              to="/projects"
              className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Projects
            </Link>

            <Link
              to="/profile"
              className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Profile
            </Link>

            <Link
              to="/analytics"
              className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Analytics
            </Link>

            <Link
              to="/settings"
              className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Settings
            </Link>

          </nav>

        </div>

      </aside>

      <main className="pt-16 md:ml-64">

        <div className="p-6 md:p-10">

          <div className="mb-8">

            <p className="font-semibold text-indigo-600">
              Finance Management
            </p>

            <h1 className="mt-1 text-4xl font-bold text-gray-900">
              Income
            </h1>

            <p className="mt-2 text-gray-500">
              Manage all your income records.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white shadow-lg">

              <p className="text-sm opacity-80">
                Total Income
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                $8,700
              </h2>

              <p className="mt-2 text-sm opacity-80">
                This month
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <p className="text-sm text-gray-500">
                Income Sources
              </p>

              <h2 className="mt-3 text-4xl font-bold text-gray-900">
                3
              </h2>

              <p className="mt-2 text-sm text-green-600">
                Active sources
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <p className="text-sm text-gray-500">
                Average Income
              </p>

              <h2 className="mt-3 text-4xl font-bold text-gray-900">
                $2,900
              </h2>

              <p className="mt-2 text-sm text-indigo-600">
                Per transaction
              </p>

            </div>

          </div>

          <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Income History
                </h2>

                <p className="mt-1 text-gray-500">
                  Your recent income transactions
                </p>
              </div>

              <Link
                to="/dashboard"
                className="rounded-xl border px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Back
              </Link>

            </div>

            <div className="space-y-3">

              <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">

                <div>
                  <h3 className="font-bold text-gray-900">
                    Monthly Salary
                  </h3>

                  <p className="text-sm text-gray-500">
                    Salary • Sep 18
                  </p>
                </div>

                <p className="font-bold text-green-600">
                  +$5,000
                </p>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">

                <div>
                  <h3 className="font-bold text-gray-900">
                    Freelance Project
                  </h3>

                  <p className="text-sm text-gray-500">
                    Freelance • Sep 15
                  </p>
                </div>

                <p className="font-bold text-green-600">
                  +$1,200
                </p>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">

                <div>
                  <h3 className="font-bold text-gray-900">
                    Business Income
                  </h3>

                  <p className="text-sm text-gray-500">
                    Business • Sep 10
                  </p>
                </div>

                <p className="font-bold text-green-600">
                  +$2,500
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Income;