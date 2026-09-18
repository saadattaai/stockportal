import { useState } from "react";
import { Link } from "react-router-dom";

function Expenses() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "Shopping",
            category: "Shopping",
            amount: 320,
            date: "2026-09-17",
          },
          {
            id: 2,
            title: "Internet Bill",
            category: "Bills",
            amount: 80,
            date: "2026-09-12",
          },
        ];
  });

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Shopping");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const saveData = (data) => {
    setExpenses(data);
    localStorage.setItem("expenses", JSON.stringify(data));
  };

  const addExpense = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      category,
      amount: Number(amount),
      date,
    };

    saveData([newExpense, ...expenses]);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter(
      (expense) => expense.id !== id
    );

    saveData(updated);
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          <h1 className="text-xl font-bold text-gray-900">
            Expense Manager
          </h1>

          <Link
            to="/dashboard"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-4 md:p-8">
        <div className="mb-6 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white shadow-lg">
          <p className="text-sm opacity-80">
            Total Expenses
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            ${totalExpense.toLocaleString()}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-gray-900">
              Add Expense
            </h2>

            <form
              onSubmit={addExpense}
              className="space-y-4"
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Shopping"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-500"
                >
                  <option>Shopping</option>
                  <option>Food</option>
                  <option>Bills</option>
                  <option>Transport</option>
                  <option>Entertainment</option>
                  <option>Health</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Amount
                </label>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="500"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-600"
              >
                + Add Expense
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-gray-900">
              Expense History
            </h2>

            <div className="space-y-3">
              {expenses.length === 0 ? (
                <p className="py-10 text-center text-gray-400">
                  No expense records found.
                </p>
              ) : (
                expenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {expense.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {expense.category} • {expense.date}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="font-bold text-red-500">
                        -${Number(expense.amount).toLocaleString()}
                      </span>

                      <button
                        onClick={() =>
                          deleteExpense(expense.id)
                        }
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Expenses;