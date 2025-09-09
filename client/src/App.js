import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ text: "", amount: "", category: "" });

  // Fetch transactions
  useEffect(() => {
    axios.get("http://localhost:5000/api/transactions")
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add transaction
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/transactions", form);
    setTransactions([...transactions, res.data]);
    setForm({ text: "", amount: "", category: "" });
  };

  // Delete transaction
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    setTransactions(transactions.filter(t => t._id !== id));
  };

  // Chart data
  const categories = [...new Set(transactions.map(t => t.category))];
  const chartData = {
    labels: categories,
    datasets: [{
      data: categories.map(c => transactions
        .filter(t => t.category === c)
        .reduce((acc, t) => acc + t.amount, 0)),
      backgroundColor: ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa"]
    }]
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>💰 Expense Tracker</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Text" 
          value={form.text} 
          onChange={e => setForm({ ...form, text: e.target.value })} 
          required 
        />
        <input 
          placeholder="Amount" 
          type="number"
          value={form.amount} 
          onChange={e => setForm({ ...form, amount: Number(e.target.value) })} 
          required 
        />
        <input 
          placeholder="Category" 
          value={form.category} 
          onChange={e => setForm({ ...form, category: e.target.value })} 
          required 
        />
        <button type="submit">Add</button>
      </form>

      <h2>Transactions</h2>
      <ul>
        {transactions.map(t => (
          <li key={t._id}>
            {t.text} — ₹{t.amount} ({t.category}) 
            <button onClick={() => handleDelete(t._id)}>❌</button>
          </li>
        ))}
      </ul>

      <h2>Category Breakdown</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default App;
