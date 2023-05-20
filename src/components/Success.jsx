import { useState, useEffect } from "react";
import Card from "./Card";

function Success({ image }) {
  const [copiedText, setCopiedText] = useState("");
  const link = `/images/${image._id}`;

  //handling successful copy
  useEffect(() => {
    if (copiedText) {
      const timeoutId = setTimeout(() => {
        setCopiedText("");
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [copiedText]);
  function copyToClipboard() {
    navigator.clipboard.writeText(link);
    setCopiedText(link);
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Card>
        <div className="h-[35px] w-[35px] mx-auto mt-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-green-500 "
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <h3 className="text-center mt-[11px] font-sans text-base font-medium text-gray">
          Upload your image
        </h3>
        <div className="  mt-[25px]">
          <img
            src={`/${image.path}`}
            alt="uploaded_image"
            className="object-cover w-[338px] h-[224px]  rounded-[12px]"
          />
        </div>
        {copiedText ? (
          <p className="text-green-500 font-sans text-[12px] font-light text-center mt-4 border border-green-400 bg-green-200 w-full rounded-sm h-8 flex items-center justify-center">
            Successfully copied to clipboard
          </p>
        ) : null}
        <div className="w-full mt-[25px] h-[34px] border border-very-light-gray bg-light-gray px-2 rounded-[8px] flex items-center justify-start relative">
          <p className="text-[#4F4F4F] truncate font-sans font-medium text-[8px] w-[235px] overflow-hidden">
            {link}
          </p>
          <button
            onClick={copyToClipboard}
            className=" absolute z-10 top-[2px] right-[2px] shadow drop-shadow-sm  px-6 py-2 bg-accent hover:opacity-70 rounded-[8px] text-primary text-[8px]  font-sans"
          >
            Copy Link
          </button>
        </div>
      </Card>
    </div>
  );
}

export default Success;
