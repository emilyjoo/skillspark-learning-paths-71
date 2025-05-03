
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { mockEnrollments, mockCourses } from "@/data/mockData";
import { BookOpen, Book, Calendar, User } from "lucide-react";

export const DashboardOverview = () => {
  const enrollments = mockEnrollments;
  const courses = enrollments.map(enrollment => {
    const course = mockCourses.find(c => c.id === enrollment.courseId);
    return {
      ...course,
      progress: enrollment.progress,
      enrollmentDate: enrollment.enrollmentDate
    };
  });

  const inProgressCourses = courses
    .filter(course => course.progress && course.progress < 100)
    .sort((a, b) => b.progress - a.progress);

  const recentActivity = [
    { id: 1, type: "lesson_completed", courseName: "Introduction to Web Development", date: "2023-05-15T14:30:00Z" },
    { id: 2, type: "quiz_completed", courseName: "Data Science with Python", date: "2023-05-14T10:15:00Z" },
    { id: 3, type: "course_started", courseName: "UI/UX Design Fundamentals", date: "2023-05-12T09:45:00Z" },
  ];

  const upcomingEvents = [
    { id: 1, title: "Live Q&A Session - Web Development", date: "2023-05-20T15:00:00Z" },
    { id: 2, title: "Assignment Due - Data Visualization Project", date: "2023-05-25T23:59:00Z" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enrollments.length}</div>
            <p className="text-xs text-muted-foreground">
              {enrollments.length > 0 ? "+1 in the last month" : "No courses yet"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {enrollments.filter(e => e.progress === 100).length}
            </div>
            <p className="text-xs text-muted-foreground">
              {enrollments.some(e => e.progress === 100) 
                ? "Congratulations!" 
                : "Keep learning!"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5</div>
            <p className="text-xs text-muted-foreground">
              +2.5 hours last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Web Development Basics
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* In Progress Courses */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
            <CardDescription>Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {inProgressCourses.length > 0 ? (
              inProgressCourses.slice(0, 3).map(course => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between">
                    <Link to={`/learn/${course.id}`} className="font-medium hover:text-skillspark-600 transition-colors">
                      {course.title}
                    </Link>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              ))
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4">No courses in progress</p>
                <Button asChild className="bg-skillspark-500 hover:bg-skillspark-600">
                  <Link to="/courses">Browse Courses</Link>
                </Button>
              </div>
            )}
            
            {inProgressCourses.length > 0 && (
              <Button asChild variant="outline" className="w-full mt-2">
                <Link to="/dashboard/courses">View All Courses</Link>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your learning activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-center gap-4 pb-4 border-b last:border-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === "lesson_completed" 
                      ? "bg-green-100" 
                      : activity.type === "quiz_completed"
                      ? "bg-blue-100"
                      : "bg-purple-100"
                  }`}>
                    {activity.type === "lesson_completed" ? (
                      <BookOpen className="h-5 w-5 text-green-600" />
                    ) : activity.type === "quiz_completed" ? (
                      <Book className="h-5 w-5 text-blue-600" />
                    ) : (
                      <User className="h-5 w-5 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">
                      {activity.type === "lesson_completed" 
                        ? "Completed a lesson" 
                        : activity.type === "quiz_completed"
                        ? "Completed a quiz"
                        : "Started a new course"
                      }
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.courseName}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(activity.date).toLocaleDateString()} at {new Date(activity.date).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Schedule for your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingEvents.map(event => (
              <Card key={event.id} className="bg-muted/40">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <span className="text-sm">{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
