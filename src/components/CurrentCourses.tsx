import { CourseCard } from "./CourseCard";

export default function () {
  return (
    <>
      <div className="flex flex-col space-y-2 my-5 items-center">
        <div className="m-4 text-3xl font-bold">New Course</div>
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <CourseCard
            title="fullstack dev"
            content="0-1 track full course"
            ima="https://d2szwvl7yo497w.cloudfront.net/courseThumbnails/adhoc.jpg"
          />
          <CourseCard
            title="fullstack dev2"
            content="1-100 track full course"
            ima="https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg"
          />
        </div>
      </div>
    </>
  );
}
