import { Button } from "./Button";

export const Modal = ({ close }: { close: () => void }) => {
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-10 flex justify-center items-center"
      onClick={close}
    >
      <div
        className="bg-white shadow w-[400px] flex flex-col gap-4 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h1 className="font-bold">Enter your Email here</h1>
          <button onClick={close} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>
        <form
          className="w-full px-4"
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <input
            className="rounded-md bg-slate-200 w-full p-2"
            type="email"
            placeholder="Your email"
            required
          />
          <div className="p-4 flex justify-center">
            <Button onClick={()=>null}>Pre-register now</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
