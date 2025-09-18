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
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">My Expense Tracker</h1>

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
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      {/* Chart */}
      <ExpensePieChart expenses={expenses} />
    </div>
  );
}

export default App;
