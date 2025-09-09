import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ title: "", amount: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/transactions").then((res) => {
      setTransactions(res.data);
    });
  }, []);

  const addTransaction = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/transactions", form);
    setTransactions([...transactions, res.data]);
    setForm({ title: "", amount: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          💸 Expense Tracker
        </h1>

        {/* Form */}
        <form onSubmit={addTransaction} className="mb-6">
          <input
            type="text"
            placeholder="Enter title..."
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg mb-2"
          />
          <input
            type="number"
            placeholder="Enter amount..."
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg mb-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Transaction
          </button>
        </form>

        {/* Transactions */}
        <ul className="space-y-2">
          {transactions.map((t) => (
            <li
              key={t._id}
              className="flex justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <span className="font-medium">{t.title}</span>
              <span
                className={`${
                  t.amount < 0 ? "text-red-500" : "text-green-600"
                } font-bold`}
              >
                {t.amount < 0 ? "-" : "+"}₹{Math.abs(t.amount)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
