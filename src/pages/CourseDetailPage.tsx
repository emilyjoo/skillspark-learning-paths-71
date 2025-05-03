
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LessonList } from "@/components/LessonList";
import { mockCourses } from "@/data/mockData";

export const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-skillspark-500 hover:bg-skillspark-600">
          <Link to="/courses">Browse Courses</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Course Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                <span className="bg-skillspark-50 text-skillspark-700 px-2 py-1 rounded">
                  {course.category}
                </span>
                <span className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{course.rating} ({course.studentsCount} students)</span>
                </span>
                <span>{course.duration}</span>
                <span className="capitalize">{course.level}</span>
                <span>Updated {new Date(course.createdAt).toLocaleDateString()}</span>
              </div>
              
              <p className="text-gray-600 mb-6">
                Instructor: <span className="font-medium">{course.instructorName}</span>
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold">${course.price}</span>
                </div>
                <Button className="w-full bg-skillspark-500 hover:bg-skillspark-600 mb-3">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full">
                  Add to Wishlist
                </Button>
                <div className="mt-4 text-sm text-center">
                  <p>30-day money-back guarantee</p>
                  <p>Full lifetime access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg border p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Course</h2>
              <p className="mb-6">{course.description}</p>
              
              <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li className="flex items-start">
                  <span className="text-skillspark-500 mr-2">✓</span>
                  <span>Build professional websites from scratch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-skillspark-500 mr-2">✓</span>
                  <span>Create responsive designs for all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-skillspark-500 mr-2">✓</span>
                  <span>Understand modern web development practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-skillspark-500 mr-2">✓</span>
                  <span>Apply best practices for performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-skillspark-500 mr-2">✓</span>
                  <span>Deploy your projects to production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-skillspark-500 mr-2">✓</span>
                  <span>Work with real-world examples and projects</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3">Requirements</h3>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Basic computer skills</li>
                <li>No prior programming experience needed</li>
                <li>A computer with internet access</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3">Who This Course is For</h3>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Beginners interested in web development</li>
                <li>Students looking to build practical skills</li>
                <li>Professionals wanting to expand their skillset</li>
                <li>Anyone curious about creating websites</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold mb-4">Instructor</h2>
              <div className="flex items-start gap-4">
                <img
                  src="https://i.pravatar.cc/150?img=48"
                  alt={course.instructorName}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{course.instructorName}</h3>
                  <p className="text-muted-foreground mb-2">{course.category} Instructor</p>
                  <div className="flex items-center gap-4 mb-3">
                    <div>
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium">4.8</span> Instructor Rating
                    </div>
                    <div>
                      <span className="font-medium">24</span> Courses
                    </div>
                    <div>
                      <span className="font-medium">12,540</span> Students
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Jane Smith is an experienced web developer with over 10 years of industry experience.
                    She has worked with major tech companies and specializes in frontend development and
                    teaching beginners how to code. Her teaching approach focuses on practical, real-world
                    examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg border p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Course Content</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>{course.lessons.length} lessons</span>
                  <span>{course.duration} total length</span>
                </div>
              </div>
              <LessonList lessons={course.lessons} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
