
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};
