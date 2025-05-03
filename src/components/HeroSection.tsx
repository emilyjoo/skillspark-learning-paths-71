
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-skillspark-50 to-skillspark-100/50 opacity-70" />
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 700"
        >
          <g mask='url("#SvgjsMask1006")' fill="none">
            <path
              d="M-165.12 518.54L-82.62 518.54L-82.62 601.04L-165.12 601.04z"
              fill="rgba(142, 124, 245, 0.1)"
            ></path>
            <path
              d="M1337.31 325.7L1409.18 325.7L1409.18 397.57L1337.31 397.57z"
              fill="rgba(142, 124, 245, 0.1)"
            ></path>
            <path
              d="M123.86 305.86L222.98 305.86L222.98 338.37L123.86 338.37z"
              fill="rgba(142, 124, 245, 0.1)"
            ></path>
            <path
              d="M456.52 186.53L527.26 186.53L527.26 254.31L456.52 254.31z"
              fill="rgba(142, 124, 245, 0.1)"
            ></path>
            <path
              d="M839.92 560.63L959.01 560.63L959.01 657.3L839.92 657.3z"
              fill="rgba(142, 124, 245, 0.1)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1006">
              <rect width="1440" height="700" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Unleash Your Potential with Expert-Led Online Courses
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Gain the skills that matter most in today's digital world. Learn from industry experts
              and transform your career at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="text-lg bg-skillspark-500 hover:bg-skillspark-600">
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button asChild variant="outline" className="text-lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center text-gray-600">
              <div className="flex mr-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
              <span>
                Trusted by over <span className="font-bold">50,000+</span> students worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
