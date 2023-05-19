import { useRef, useEffect, useState } from "react";
import Card from "./components/Card";
import DragandDrop from "./components/DrapandDrop";
import Button from "./components/Button";
import Loader from "./components/Loader";

function App() {
  const [upload, setUpload] = useState("");
  const [isUploading, setIsUploading] = useState(true);
  const [errorMsg, setError] = useState("");

  console.log(upload);

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

  async function onUpload(image) {
    console.log("file to be uploaded", image);
  }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        {isUploading ? (
          <Loader />
        ) : (
          <Card>
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

            <DragandDrop
              onUpload={onUpload}
              setError={setError}
              upload={upload}
            />

            <div className="text-center text-very-light-gray font-sans text-[12px] font-medium mt-9">
              Or
            </div>
            <Button setUpload={setUpload}>Choose file</Button>
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
