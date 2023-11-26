import Image from "next/image";

const CourseCard = ({ title, description, categories }:any) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2">
    <Image width={400} height={300} className="w-full" src="/images/course.jpg" alt="Course Image" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {categories.map((category:string, index:number) => (
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {category}
        </span>
      ))}
    </div>
  </div>
);

const AllCourses = () => {
  const courses = [
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", categories: ["Physics", "Diploma"] },
    { title: "Advanced diploma in hardware and networking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", categories: ["Physics", "Diploma"] },
    // Add more courses as needed
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default AllCourses;
