import { CourseCard } from "./CourseCard";

export default function () {
  return (
    <>
      <div className="flex flex-col space-y-2 my-5 items-center">
        <div className="m-4 text-3xl font-bold">Upcoming Courses</div>
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <CourseCard
            title="Blockchain dev"
            content="Everything you need to know about blockchain"
            ima="https://framerusercontent.com/images/SXS9VsLLyqtTZPcilolqkjWkUOg.webp?scale-down-to=512"
          />
          <CourseCard
            title="Machine Learning"
            content="Learn how to build machine learning models"
            ima="https://framerusercontent.com/images/mU2dusENfcJqAT3DrdwXU87FbxI.png?scale-down-to=512"
          />
        </div>
      </div>
    </>
  );
}
