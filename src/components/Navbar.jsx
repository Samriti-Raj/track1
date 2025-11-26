
import { Users, ClipboardList, LayoutDashboard, Briefcase } from "lucide-react";

export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "employees", label: "Employees", icon: Users },
    { id: "tasks", label: "Tasks", icon: ClipboardList }
  ];

  return (
    <nav className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <Briefcase className="w-7 h-7 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              TaskFlow Manager
            </h1>
          </div>

          <div className="flex gap-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-base font-semibold transition-all ${
                  currentPage === id
                    ? "bg-white text-green-600 shadow-lg"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}