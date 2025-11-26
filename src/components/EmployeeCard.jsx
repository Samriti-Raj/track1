import { Mail } from "lucide-react";

export default function EmployeeCard({ emp }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-slate-200">
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
          {emp.name.charAt(0)}
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
          {emp.department}
        </span>
      </div>
      
      <h2 className="text-xl font-bold text-slate-800 mb-1">{emp.name}</h2>
      <p className="text-sm text-slate-600 mb-4">{emp.role}</p>
      
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Mail className="w-4 h-4" />
        {emp.email}
      </div>
    </div>
  );
}