import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ExpensePieChart from "./ExpensePieChart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">My Expense Tracker</h1>
      <ExpensePieChart />
    </div>
  );
}

export default App;
