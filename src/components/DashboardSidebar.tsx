
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { User, BookOpen, Book, PieChart } from "lucide-react";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}

const SidebarItem = ({ href, icon, children, active }: SidebarItemProps) => (
  <Link to={href}>
    <Button
      variant={active ? "default" : "ghost"}
      size="sm"
      className={cn(
        "w-full justify-start gap-2 mb-1",
        active && "bg-skillspark-500 hover:bg-skillspark-600 text-primary-foreground"
      )}
    >
      {icon}
      {children}
    </Button>
  </Link>
);

export const DashboardSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-64 border-r min-h-screen p-4">
      <h2 className="font-semibold text-lg mb-6">Student Dashboard</h2>
      <div className="space-y-1">
        <SidebarItem 
          href="/dashboard" 
          icon={<PieChart className="h-4 w-4" />} 
          active={pathname === "/dashboard"}
        >
          Overview
        </SidebarItem>
        <SidebarItem 
          href="/dashboard/courses" 
          icon={<Book className="h-4 w-4" />} 
          active={pathname === "/dashboard/courses"}
        >
          My Courses
        </SidebarItem>
        <SidebarItem 
          href="/dashboard/learning" 
          icon={<BookOpen className="h-4 w-4" />} 
          active={pathname === "/dashboard/learning"}
        >
          Continue Learning
        </SidebarItem>
        <SidebarItem 
          href="/dashboard/profile" 
          icon={<User className="h-4 w-4" />} 
          active={pathname === "/dashboard/profile"}
        >
          Profile Settings
        </SidebarItem>
      </div>
    </div>
  );
};
