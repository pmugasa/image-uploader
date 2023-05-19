import { useRef, useEffect, useState } from "react";

function App() {
  const [upload, setUpload] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const formats = ["jpeg", "webp", "svg", "png"];
  console.log(upload);

  const drop = useRef(null);
  useEffect(() => {
    //adding events to the drop
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);
    return () => {
      drop.current.removeEventListener("dragover", handleDragOver);
      drop.current.removeEventListener("drop", handleDrop);
    };
  }, []);

  //handling errors
  useEffect(() => {
    if (errorMsg) {
      const timeoutId = setTimeout(() => {
        setErrorMsg("");
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [errorMsg]);

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    //convert file list to an array
    const images = [...e.dataTransfer.files];
    console.log("images", images);

    //check if the number of images is less than
    if (images.length > 1) {
      setErrorMsg(`Only 1 image can be uploaded at a time`);

      return;
    }

    //check if uploaded image is not one  of the  allowed formats
    if (
      formats &&
      images.some(
        (img) =>
          !formats.some((format) =>
            img.name.toLowerCase().endsWith(format.toLowerCase())
          )
      )
    ) {
      setErrorMsg(
        `Only following file formats are acceptable: ${formats.join(",")}`
      );

      return;
    }

    //if it passses all the above
    if (images && images.length) {
      onUpload(images);
    } else {
      onUpload(upload);
    }
  }

  function onUpload(image) {
    console.log("file to be uploaded", image);
  }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="h-[32rem] w-[25rem] rounded-xl bg-white shadow drop-shadow-xl">
          <h3 className="text-center mt-9 font-sans text-base font-medium text-gray">
            Upload your image
          </h3>
          <p className="text-center mt-4 font-sans text-[10px] font-medium text-gray">
            File should be Jpeg, Png...
          </p>
          {errorMsg ? (
            <p className="text-sm text-red-500 text-center font-sans mt-2">
              {errorMsg}
            </p>
          ) : null}
          <label htmlFor="file-upload" required ref={drop}>
            <div className="mx-auto w-[21rem] h-[14rem] bg-light-gray mt-4 rounded-xl border-dashed border-2 border-grayish-blue flex flex-col items-center justify-center">
              <div className="w-[114px] h-[88px] mx-auto mt-[40px]">
                <img
                  src="/image.svg"
                  alt="drop_image"
                  className="object-cover"
                />
              </div>

              <p className="text-very-light-gray font-sans text-[12px] font-medium mt-auto mb-[40px]">
                Drag & Drop your image here
              </p>
            </div>
            <div className="text-center text-very-light-gray font-sans text-[12px] font-medium mt-9">
              Or
            </div>

            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => setUpload(e.target.value)}
            />
            <span className="absolute mt-4 left-[140px] cursor-pointer inline-block px-6 py-2 bg-accent rounded-lg text-[12px] text-white">
              Choose a file
            </span>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
