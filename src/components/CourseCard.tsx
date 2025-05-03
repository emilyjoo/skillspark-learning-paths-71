
import { Course } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
  isEnrolled?: boolean;
}

export const CourseCard = ({ course, isEnrolled = false }: CourseCardProps) => {
  const { id, title, instructorName, rating, studentsCount, thumbnail, price, duration, level } = course;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-skillspark-500 text-white px-2 py-1 rounded text-xs font-medium uppercase">
          {level}
        </div>
      </div>
      <CardHeader className="pt-4 pb-2">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-lg line-clamp-2 hover:text-skillspark-600 transition-colors">
            <Link to={`/courses/${id}`}>{title}</Link>
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">By {instructorName}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-between text-sm mb-1">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{rating}</span>
            <span className="text-muted-foreground ml-1">({studentsCount} students)</span>
          </div>
          <span className="text-sm">{duration}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        {isEnrolled ? (
          <Button asChild variant="outline" className="w-full">
            <Link to={`/learn/${id}`}>Continue Learning</Link>
          </Button>
        ) : (
          <>
            <span className="font-bold text-lg">${price}</span>
            <Button asChild className="bg-skillspark-500 hover:bg-skillspark-600">
              <Link to={`/courses/${id}`}>View Course</Link>
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
