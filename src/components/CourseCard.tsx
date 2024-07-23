import { Button } from "./Button";

export const CourseCard = ({
  title,
  content,
  ima,
  event,
}: {
  title: String;
  content: String;
  ima: string;
  event: () => void;
}) => {
  return (
    <>
      <div className="max-w-sm w-80 h-94 rounded overflow-hidden shadow-lg">
        <div className="w-full h-48 overflow-hidden">
          <img
            src={ima}
            alt="Sunset in the mountains"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{content}</p>
        </div>
        <div className="flex justify-center pb-4">
          <Button onClick={event}>See course</Button>
        </div>
      </div>
    </>
  );
};
