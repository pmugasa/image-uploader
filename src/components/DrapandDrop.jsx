import { useState, useRef, useEffect } from "react";

function DragandDrop({ onUpload, setError, upload }) {
  const [dragging, setDragging] = useState(false);

  const formats = ["jpeg", "webp", "svg", "png"];

  const drop = useRef(null);
  useEffect(() => {
    //adding events to the drop
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);
    drop.current.addEventListener("dragenter", handleDragEnter);
    drop.current.addEventListener("dragleave", handleDragLeave);
    return () => {
      drop.current.removeEventListener("dragover", handleDragOver);
      drop.current.removeEventListener("drop", handleDrop);
      drop.current.removeEventListener("dragenter", handleDragEnter);
      drop.current.removeEventListener("dragleave", handleDragLeave);
    };
  }, []);

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
      setError(`Only 1 image can be uploaded at a time`);

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
      setError(
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

  function handleDragEnter(e) {
    e.stopPropagation();

    setDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  }

  return (
    <>
      <div
        ref={drop}
        className={
          dragging
            ? "mx-auto w-[22rem] h-[14rem] bg-blue-100 mt-4 rounded-xl border-solid border-2 border-grayish-blue flex flex-col items-center justify-center"
            : "mx-auto w-[21rem] h-[14rem] bg-light-gray mt-4 rounded-xl border-dashed border-2 border-grayish-blue flex flex-col items-center justify-center"
        }
      >
        <div className="w-[114px] h-[88px] mx-auto mt-[40px]">
          <img src="/image.svg" alt="drop_image" className="object-cover" />
        </div>

        <p className="text-very-light-gray font-sans text-[12px] font-medium mt-auto mb-[40px]">
          Drag & Drop your image here
        </p>
      </div>
    </>
  );
}

export default DragandDrop;
