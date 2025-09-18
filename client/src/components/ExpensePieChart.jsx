import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ expenses }) => {
  // Group by category
  const categories = {};
  expenses.forEach((exp) => {
    categories[exp.category] = (categories[exp.category] || 0) + exp.amount;
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40"
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold text-center mb-4">Expense Breakdown</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpensePieChart;
