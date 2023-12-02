import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const CourseCard = ({ title, description, categories }: any) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2">
    <Image width={300} height={300} className="w-full" src="/images/course.jpg" alt="Course Image" />
    <div className="px-3 py-4">
      <h1 className="font-bold text-base mb-2 line-clamp-2">
        {title}
      </h1>
      <p className="text-gray-700 text-base line-clamp-2 md:line-clamp-3">
        {description}
      </p>
    </div>
    <div className="px-3 pt-2 pb-2">
      {categories.map((category: string, index: number) => (
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {category}
        </span>
      ))}
    </div>
  </div>
);

const AllCourses = () => {
  const courses = [
    { title: "Advanced diploma in hardware and networking networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", categories: ["Physics", "Diploma"] },
    // Add more courses as needed
  ];

  return (
    <div className=" flex space-x-0 overflow-x-auto my-4 py-2 w-full ">
      {courses.map((course, index) => (
        <div key={index} className="flex-shrink-0 w-3/5 md:w-1/3 lg:w-1/4 xl:w-1/6 max-2xl:w-1/12 px-2">
        <CourseCard {...course} />
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
