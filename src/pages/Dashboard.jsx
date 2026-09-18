import { useState } from "react";
import Chart from "react-apexcharts";
import { UserButton } from "@clerk/react";
import { NavLink, Link } from "react-router-dom";

function Dashboard() {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Complete dashboard design",
      completed: true,
    },
    {
      id: 2,
      text: "Add income and expense chart",
      completed: false,
    },
    {
      id: 3,
      text: "Review monthly expenses",
      completed: false,
    },
  ]);

  const addTodo = () => {
    if (!todoInput.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todoInput,
        completed: false,
      },
    ]);

    setTodoInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const chartOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      fontFamily: "Inter, sans-serif",
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
      ],
    },

    yaxis: {
      labels: {
        formatter: (value) => `$${value}`,
      },
    },

    tooltip: {
      y: {
        formatter: (value) => `$${value}`,
      },
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
    },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
    },
  };

  const chartSeries = [
    {
      name: "Income",
      data: [
        4500,
        5200,
        6100,
        5800,
        7200,
        6800,
        7900,
      ],
    },
    {
      name: "Expense",
      data: [
        2100,
        2600,
        2900,
        3100,
        3400,
        3200,
        3800,
      ],
    },
  ];

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "▦",
    },
    {
      name: "Home",
      path: "/",
      icon: "⌂",
    },
    {
      name: "Income",
      path: "/income",
      icon: "↗",
    },
    {
      name: "Expenses",
      path: "/expenses",
      icon: "↘",
    },
    {
      name: "Todo List",
      path: "/todo",
      icon: "✓",
    },
    {
      name: "Projects",
      path: "/projects",
      icon: "▣",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "◉",
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: "▥",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "⚙",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b bg-white shadow-sm">

        <div className="flex h-full items-center justify-between px-4 md:px-8">

          {/* Logo */}

          <Link
            to="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              D
            </div>

            <h1 className="text-xl font-bold text-gray-900">
              Finance Dashboard
            </h1>
          </Link>

          {/* Navbar Links */}

          <div className="flex items-center gap-3">

            <Link
              to="/dashboard"
              className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-indigo-600 md:block"
            >
              Dashboard
            </Link>

            <Link
              to="/income"
              className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-green-600 transition hover:bg-green-50 md:block"
            >
              Income
            </Link>

            <Link
              to="/expenses"
              className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 md:block"
            >
              Expenses
            </Link>

            <Link
              to="/notifications"
              className="rounded-xl px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-indigo-600"
            >
              Notifications
            </Link>

            <UserButton />

          </div>

        </div>

      </header>

      {/* ================= SIDEBAR ================= */}

      <aside className="fixed bottom-0 left-0 top-16 hidden w-64 border-r bg-gray-950 text-white md:block">

        <div className="relative h-full p-5">

          {/* Sidebar Logo */}

          <Link
            to="/dashboard"
            className="mb-7 flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
              F
            </div>

            <div>
              <h2 className="font-bold">
                Finance
              </h2>

              <p className="text-xs text-gray-500">
                Management
              </p>
            </div>

          </Link>

          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Main Menu
          </p>

          {/* Sidebar Links */}

          <nav className="space-y-2">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >

                <span className="w-5 text-center">
                  {item.icon}
                </span>

                {item.name}

              </NavLink>

            ))}

          </nav>

          {/* Bottom Sidebar */}

          <div className="absolute bottom-5 left-5 right-5">

            <div className="mb-4 border-t border-gray-800"></div>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <span>👤</span>
              My Account
            </NavLink>

          </div>

        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="pt-16 md:ml-64">

        <div className="p-4 md:p-8">

          {/* ================= WELCOME ================= */}

          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <div>

              <p className="text-sm font-medium text-indigo-600">
                Overview
              </p>

              <h2 className="mt-1 text-3xl font-bold text-gray-900">
                Dashboard
              </h2>

              <p className="mt-1 text-gray-500">
                Track your income, expenses and daily tasks.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex gap-3">

              <Link
                to="/income"
                className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                + Income
              </Link>

              <Link
                to="/expenses"
                className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-red-600"
              >
                + Expense
              </Link>

            </div>

          </div>

          {/* ================= STATS ================= */}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Income */}

            <Link
              to="/income"
              className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
            >

              <p className="text-sm text-gray-500">
                Total Income
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                $39,500
              </h3>

              <p className="mt-2 text-sm font-medium text-green-600">
                +12.5% this month
              </p>

              <p className="mt-3 text-xs font-semibold text-green-600">
                View Income →
              </p>

            </Link>

            {/* Expenses */}

            <Link
              to="/expenses"
              className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >

              <p className="text-sm text-gray-500">
                Total Expense
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                $19,100
              </h3>

              <p className="mt-2 text-sm font-medium text-red-500">
                +8.2% this month
              </p>

              <p className="mt-3 text-xs font-semibold text-red-500">
                View Expenses →
              </p>

            </Link>

            {/* Balance */}

            <Link
              to="/analytics"
              className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >

              <p className="text-sm text-gray-500">
                Total Balance
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                $20,400
              </h3>

              <p className="mt-2 text-sm font-medium text-green-600">
                Available balance
              </p>

              <p className="mt-3 text-xs font-semibold text-indigo-600">
                View Analytics →
              </p>

            </Link>

            {/* Todo */}

            <Link
              to="/todo"
              className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
            >

              <p className="text-sm text-gray-500">
                Pending Tasks
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                {
                  todos.filter(
                    (todo) => !todo.completed
                  ).length
                }
              </h3>

              <p className="mt-2 text-sm font-medium text-indigo-600">
                Tasks remaining
              </p>

              <p className="mt-3 text-xs font-semibold text-indigo-600">
                View Todo →
              </p>

            </Link>

          </div>

          {/* ================= CHART + TODO ================= */}

          <div className="mt-6 grid gap-6 xl:grid-cols-3">

            {/* Chart */}

            <div className="rounded-2xl border bg-white p-5 shadow-sm xl:col-span-2">

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Income & Expenses
                  </h3>

                  <p className="text-sm text-gray-500">
                    Monthly financial overview
                  </p>

                </div>

                <Link
                  to="/analytics"
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
                >
                  Analytics →
                </Link>

              </div>

              <Chart
                options={chartOptions}
                series={chartSeries}
                type="area"
                height={350}
              />

            </div>

            {/* Todo */}

            <div className="rounded-2xl border bg-white p-5 shadow-sm">

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Todo List
                  </h3>

                  <p className="text-sm text-gray-500">
                    Manage your daily tasks
                  </p>

                </div>

                <Link
                  to="/todo"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View All →
                </Link>

              </div>

              <div className="mb-5 flex gap-2">

                <input
                  type="text"
                  value={todoInput}
                  onChange={(e) =>
                    setTodoInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addTodo();
                    }
                  }}
                  placeholder="Add a new task..."
                  className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

                <button
                  onClick={addTodo}
                  className="rounded-xl bg-indigo-600 px-4 font-bold text-white transition hover:bg-indigo-700"
                >
                  +
                </button>

              </div>

              <div className="space-y-3">

                {todos.map((todo) => (

                  <div
                    key={todo.id}
                    className={`flex items-center gap-3 rounded-xl border p-3 ${
                      todo.completed
                        ? "border-green-100 bg-green-50"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >

                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() =>
                        toggleTodo(todo.id)
                      }
                      className="h-4 w-4 accent-indigo-600"
                    />

                    <p
                      className={`flex-1 text-sm ${
                        todo.completed
                          ? "text-gray-400 line-through"
                          : "text-gray-700"
                      }`}
                    >
                      {todo.text}
                    </p>

                    <button
                      onClick={() =>
                        deleteTodo(todo.id)
                      }
                      className="text-sm font-semibold text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>

                  </div>

                ))}

              </div>

              <Link
                to="/todo"
                className="mt-5 block rounded-xl bg-indigo-50 px-4 py-3 text-center text-sm font-bold text-indigo-600 transition hover:bg-indigo-100"
              >
                Open Complete Todo List →
              </Link>

            </div>

          </div>

          {/* ================= RECENT TRANSACTIONS ================= */}

          <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold text-gray-900">
                  Recent Transactions
                </h3>

                <p className="text-sm text-gray-500">
                  Latest income and expenses
                </p>

              </div>

              <Link
                to="/analytics"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View All →
              </Link>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>

                  <tr className="border-b text-sm text-gray-500">

                    <th className="px-3 py-3">
                      Description
                    </th>

                    <th className="px-3 py-3">
                      Category
                    </th>

                    <th className="px-3 py-3">
                      Date
                    </th>

                    <th className="px-3 py-3 text-right">
                      Amount
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {/* Salary */}

                  <tr className="border-b transition hover:bg-green-50">

                    <td className="px-3 py-4">

                      <Link
                        to="/income"
                        className="font-medium text-gray-900 hover:text-green-600"
                      >
                        Salary
                      </Link>

                    </td>

                    <td className="px-3 py-4 text-gray-500">
                      Income
                    </td>

                    <td className="px-3 py-4 text-gray-500">
                      Sep 18
                    </td>

                    <td className="px-3 py-4 text-right font-semibold text-green-600">
                      +$5,000
                    </td>

                  </tr>

                  {/* Shopping */}

                  <tr className="border-b transition hover:bg-red-50">

                    <td className="px-3 py-4">

                      <Link
                        to="/expenses"
                        className="font-medium text-gray-900 hover:text-red-500"
                      >
                        Shopping
                      </Link>

                    </td>

                    <td className="px-3 py-4 text-gray-500">
                      Expense
                    </td>

                    <td className="px-3 py-4 text-gray-500">
                      Sep 17
                    </td>

                    <td className="px-3 py-4 text-right font-semibold text-red-500">
                      -$320
                    </td>

                  </tr>

                  {/* Freelance */}

                  <tr className="transition hover:bg-green-50">

                    <td className="px-3 py-4">

                      <Link
                        to="/income"
                        className="font-medium text-gray-900 hover:text-green-600"
                      >
                        Freelance
                      </Link>

                    </td>

                    <td className="px-3 py-4 text-gray-500">
                      Income
                    </td>

                    <td className="px-3 py-4 text-gray-500">
                      Sep 15
                    </td>

                    <td className="px-3 py-4 text-right font-semibold text-green-600">
                      +$1,200
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* ================= QUICK NAVIGATION ================= */}

          <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

            <div className="mb-5">

              <h3 className="text-xl font-bold text-gray-900">
                Quick Navigation
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Click any option to directly open that page.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <Link
                to="/income"
                className="rounded-2xl border border-green-100 bg-green-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="font-bold text-green-700">
                  Income
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your income
                </p>

                <p className="mt-3 text-sm font-bold text-green-600">
                  Open →
                </p>
              </Link>

              <Link
                to="/expenses"
                className="rounded-2xl border border-red-100 bg-red-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="font-bold text-red-600">
                  Expenses
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your expenses
                </p>

                <p className="mt-3 text-sm font-bold text-red-500">
                  Open →
                </p>
              </Link>

              <Link
                to="/todo"
                className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="font-bold text-indigo-700">
                  Todo List
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your tasks
                </p>

                <p className="mt-3 text-sm font-bold text-indigo-600">
                  Open →
                </p>
              </Link>

              <Link
                to="/analytics"
                className="rounded-2xl border border-purple-100 bg-purple-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="font-bold text-purple-700">
                  Analytics
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  View financial analytics
                </p>

                <p className="mt-3 text-sm font-bold text-purple-600">
                  Open →
                </p>
              </Link>

              <Link
                to="/projects"
                className="rounded-2xl border border-blue-100 bg-blue-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="font-bold text-blue-700">
                  Projects
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Manage projects
                </p>

                <p className="mt-3 text-sm font-bold text-blue-600">
                  Open →
                </p>
              </Link>

              <Link
                to="/profile"
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="font-bold text-gray-800">
                  Profile
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your profile
                </p>

                <p className="mt-3 text-sm font-bold text-gray-700">
                  Open →
                </p>
              </Link>

              <Link
                to="/settings"
                className="rounded-2xl border border-orange-100 bg-orange-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="font-bold text-orange-700">
                  Settings
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Manage settings
                </p>

                <p className="mt-3 text-sm font-bold text-orange-600">
                  Open →
                </p>
              </Link>

              <Link
                to="/"
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="font-bold text-gray-800">
                  Home
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Go back to home
                </p>

                <p className="mt-3 text-sm font-bold text-indigo-600">
                  Open →
                </p>
              </Link>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;