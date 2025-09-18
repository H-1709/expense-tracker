import { useState } from "react";
import ExpensePieChart from "./components/ExpensePieChart";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    if (!category || !amount) return;

    const newExpense = { category, amount: Number(amount) };
    setExpenses([...expenses, newExpense]);

    // reset inputs
    setCategory("");
    setAmount("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          My Expense Tracker
        </h1>

        {/* Form */}
        <form
          onSubmit={addExpense}
          className="flex gap-2 mb-6 justify-center"
        >
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded w-1/3 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-1/3 focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          >
            Add
          </button>
        </form>

        {/* Chart */}
        <ExpensePieChart expenses={expenses} />
      </div>
    </div>
  );
}

export default App;