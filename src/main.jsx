
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ClerkProvider } from "@clerk/react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Income from "./pages/Income.jsx";
import Expenses from "./pages/Expenses.jsx";
import Todo from "./pages/Todo.jsx";

function SimplePage({ title, description }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-2 text-gray-500">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <a
            href="/dashboard"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Dashboard
          </a>

          <a
            href="/income"
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Income
          </a>

          <a
            href="/expenses"
            className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
          >
            Expenses
          </a>

          <a
            href="/todo"
            className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
          >
            Todo
          </a>

        </div>

      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<App />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/income"
        element={<Income />}
      />

      <Route
        path="/expenses"
        element={<Expenses />}
      />

      <Route
        path="/todo"
        element={<Todo />}
      />

      <Route
        path="/projects"
        element={
          <SimplePage
            title="Projects"
            description="Manage your projects."
          />
        }
      />

      <Route
        path="/profile"
        element={
          <SimplePage
            title="Profile"
            description="Manage your profile."
          />
        }
      />

      <Route
        path="/analytics"
        element={
          <SimplePage
            title="Analytics"
            description="View your financial analytics."
          />
        }
      />

      <Route
        path="/settings"
        element={
          <SimplePage
            title="Settings"
            description="Manage your settings."
          />
        }
      />

      <Route
        path="/notifications"
        element={
          <SimplePage
            title="Notifications"
            description="View your notifications."
          />
        }
      />

    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);