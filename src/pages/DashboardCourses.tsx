
import { useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { mockCourses, mockEnrollments } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export const DashboardCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Get enrolled courses from mock data
  const enrolledCourseIds = mockEnrollments.map(enrollment => enrollment.courseId);
  const enrolledCourses = mockCourses.filter(course => enrolledCourseIds.includes(course.id));

  // Filter courses by search query
  const filteredCourses = enrolledCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Derived course lists
  const inProgressCourses = filteredCourses.filter(course => {
    const enrollment = mockEnrollments.find(e => e.courseId === course.id);
    return enrollment && enrollment.progress < 100;
  });

  const completedCourses = filteredCourses.filter(course => {
    const enrollment = mockEnrollments.find(e => e.courseId === course.id);
    return enrollment && enrollment.progress === 100;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      
      <div className="mb-8">
        <Input
          placeholder="Search your courses..."
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Courses ({filteredCourses.length})</TabsTrigger>
          <TabsTrigger value="in-progress">
            In Progress ({inProgressCourses.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedCourses.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} isEnrolled={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or enroll in some courses
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="in-progress">
          {inProgressCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressCourses.map(course => (
                <CourseCard key={course.id} course={course} isEnrolled={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courses in progress</h3>
              <p className="text-muted-foreground">
                Start learning one of your enrolled courses
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed">
          {completedCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map(course => (
                <CourseCard key={course.id} course={course} isEnrolled={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No completed courses</h3>
              <p className="text-muted-foreground">
                Keep learning to complete your enrolled courses
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
