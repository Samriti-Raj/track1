import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Tasks from "./pages/Tasks";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "employees" && <Employees />}
      {currentPage === "tasks" && <Tasks />}
    </div>
  );
}
