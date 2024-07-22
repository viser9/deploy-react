import { Button } from "./Button";

export default function () {
  return (
    <>
      <div className="w-[100%] border-b">
        <div className="flex items-center flex-row justify-between mx-auto px-10">
          <img
            src="https://pbs.twimg.com/profile_images/1792887366736289792/jU-DRtG4_400x400.jpg"
            width={75}
            height={75}
          ></img>
          <div className="space-x-2">
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
}
