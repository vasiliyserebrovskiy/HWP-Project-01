import { cn } from "clsx-for-tailwind";
import { useState } from "react";

export default function ToggleCard() {
  const [isBlue, setIsBlue] = useState(false);

  const rectangleClass = cn("h-24 w-48 flex justify-center items-center", {
    "bg-blue-400": isBlue,
    "bg-yellow-300": !isBlue,
  });

  function handleClick() {
    setIsBlue((prev) => !prev);
  }

  return (
    <section className="flex items-center flex-col gap-3">
      <h2 className="">Toggle card</h2>
      <div className="border-2 border-green-800">
        <div className={rectangleClass}>Some text</div>
      </div>
      <button
        type="button"
        className="px-6 py-3 bg-blue-900 text-white rounded-2xl 
             hover:bg-blue-700 active:bg-red-800 
             shadow-lg hover:shadow-xl active:shadow-inner 
             transition-all duration-200 ease-in-out"
        onClick={handleClick}
      >
        Toggle card color
      </button>
    </section>
  );
}
