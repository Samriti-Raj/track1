
import { Users, Calendar } from "lucide-react";
import tasksData from "../data/tasks.json";
import employeesData from "../data/employees.json";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-black mb-2">Tasks</h1>
          <p className="text-lg text-black">Track and manage all tasks</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasksData.map((task) => {
            const emp = employeesData.find((e) => e.id === task.assignedTo);
            return (
              <div
                key={task.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-green-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-black">{task.title}</h2>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                <p className="text-black mb-4">{task.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-black">
                    <Users className="w-4 h-4" />
                    <span>Assigned to: <span className="font-medium text-black">{emp.name}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline: <span className="font-medium text-black">{task.deadline}</span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}