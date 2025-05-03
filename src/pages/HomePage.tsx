
import { useState } from "react";
import { Link } from "react-router-dom";
import { CourseCard } from "@/components/CourseCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { HeroSection } from "@/components/HeroSection";
import { mockCourses } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(mockCourses.map((course) => course.category))
  );

  const filteredCourses = selectedCategory
    ? mockCourses.filter((course) => course.category === selectedCategory)
    : mockCourses;

  const featuredCourses = filteredCourses.slice(0, 3);
  const popularCourses = [...filteredCourses]
    .sort((a, b) => b.studentsCount - a.studentsCount)
    .slice(0, 3);

  return (
    <div>
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of top-rated courses to boost your skills
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-skillspark-500 hover:bg-skillspark-600">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Popular</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of students already learning with these top courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-skillspark-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
                alt="Teach on SkillSpark"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Become an Instructor</h2>
              <p className="text-lg text-gray-600 mb-6">
                Share your expertise with our global community. Create engaging courses,
                build your audience, and earn revenue while making a difference in students' lives.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-skillspark-500 mr-2">&#10003;</span>
                  <span>Reach students around the world</span>
                </li>
                <li className="flex items-center">
                  <span className="text-skillspark-500 mr-2">&#10003;</span>
                  <span>Earn revenue from course sales</span>
                </li>
                <li className="flex items-center">
                  <span className="text-skillspark-500 mr-2">&#10003;</span>
                  <span>Get support with course creation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-skillspark-500 mr-2">&#10003;</span>
                  <span>Join our community of expert instructors</span>
                </li>
              </ul>
              <Button asChild className="bg-skillspark-500 hover:bg-skillspark-600">
                <Link to="/become-instructor">Start Teaching Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose SkillSpark?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing high-quality education that helps you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-skillspark-100 inline-block p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-skillspark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-skillspark-100 inline-block p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-skillspark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Study at your own pace and access content anytime, anywhere
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-skillspark-100 inline-block p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-skillspark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Practical Skills</h3>
              <p className="text-gray-600">
                Gain job-ready skills through hands-on projects and assignments
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-skillspark-100 inline-block p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-skillspark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with fellow learners and get help when you need it
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
