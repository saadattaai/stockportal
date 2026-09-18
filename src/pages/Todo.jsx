import { useState } from "react";
import { Link } from "react-router-dom";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");

    return saved
      ? JSON.parse(saved)
      : [
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
        ];
  });

  const [input, setInput] = useState("");

  const saveData = (data) => {
    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data));
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    saveData([...todos, newTodo]);

    setInput("");
  };

  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );

    saveData(updated);
  };

  const deleteTodo = (id) => {
    const updated = todos.filter(
      (todo) => todo.id !== id
    );

    saveData(updated);
  };

  const clearCompleted = () => {
    const updated = todos.filter(
      (todo) => !todo.completed
    );

    saveData(updated);
  };

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const pending = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          <h1 className="text-xl font-bold text-gray-900">
            Todo Manager
          </h1>

          <Link
            to="/dashboard"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl p-4 md:p-8">
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Tasks
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {todos.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {completed}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Pending
            </p>

            <h2 className="mt-2 text-3xl font-bold text-orange-500">
              {pending}
            </h2>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Todo List
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Manage your daily tasks
              </p>
            </div>

            <button
              onClick={clearCompleted}
              className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
            >
              Clear Completed
            </button>
          </div>

          <form
            onSubmit={addTodo}
            className="mb-6 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-5 font-bold text-white hover:bg-indigo-700"
            >
              Add
            </button>
          </form>

          <div className="space-y-3">
            {todos.length === 0 ? (
              <div className="rounded-xl border border-dashed p-10 text-center text-gray-400">
                No tasks available.
              </div>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center gap-3 rounded-xl border p-4 transition ${
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
                    className="h-5 w-5 accent-indigo-600"
                  />

                  <p
                    className={`flex-1 text-sm font-medium ${
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
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Todo;