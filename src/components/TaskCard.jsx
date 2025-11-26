
import { Users, Calendar } from "lucide-react";

export default function TaskCard({ task, employee }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-slate-200">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-slate-800">{task.title}</h2>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            task.status === "completed"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {task.status}
        </span>
      </div>

      <p className="text-slate-600 mb-4">{task.description}</p>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <Users className="w-4 h-4" />
          <span>Assigned to: <span className="font-medium text-slate-800">{employee.name}</span></span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Calendar className="w-4 h-4" />
          <span>Deadline: <span className="font-medium text-slate-800">{task.deadline}</span></span>
        </div>
      </div>
    </div>
  );
}