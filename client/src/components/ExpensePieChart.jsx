import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = () => {
  // Dummy test data
  const data = {
    labels: ["Food", "Transport", "Shopping", "Bills", "Entertainment"],
    datasets: [
      {
        data: [500, 200, 300, 150, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF"
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
