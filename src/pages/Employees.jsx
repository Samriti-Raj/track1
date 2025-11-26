
import { useState } from "react";
import { Search, Mail } from "lucide-react";
import employeesData from "../data/employees.json";

export default function Employees() {
  const [search, setSearch] = useState("");

  const filtered = employeesData.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.role.toLowerCase().includes(search.toLowerCase()) ||
    e.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold text-black mb-2">Employees</h1>
            <p className="text-lg text-black">Manage your team members</p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
            <input
              type="text"
              placeholder="Search employees..."
              className="pl-10 pr-4 py-3 w-72 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((emp) => (
            <div
              key={emp.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-green-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold">
                  {emp.name.charAt(0)}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  {emp.department}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-black mb-1">{emp.name}</h2>
              <p className="text-sm text-black mb-4">{emp.role}</p>
              
              <div className="flex items-center gap-2 text-sm text-black">
                <Mail className="w-4 h-4" />
                {emp.email}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}