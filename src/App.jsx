import { useEffect, useState } from "react";
import Card from "./components/Card";
import DragandDrop from "./components/DragandDrop";
import Button from "./components/Button";
import Loader from "./components/Loader";

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  //handling errors
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [error]);

  function onUpload(image) {
    setIsUploading(true);
    const post = () => {
      setTimeout(function () {
        console.log("posting to server...", image);
        console.log("is uploading", isUploading);
        setIsUploading(false);
      }, 2000);
    };
    post();
  }
  if (isUploading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  } else {
    return (
      <>
        <div className="h-screen w-screen flex items-center justify-center">
          <Card>
            <h3 className="text-center mt-9 font-sans text-base font-medium text-gray">
              Upload your image
            </h3>
            <p className="text-center mt-4 font-sans text-[10px] font-medium text-gray">
              File should be Jpeg, Png...
            </p>
            {error ? (
              <p className="text-sm text-red-500 text-center font-sans mt-2">
                {error}
              </p>
            ) : null}

            <DragandDrop
              onUpload={onUpload}
              setError={setError}
              setIsUploading={setIsUploading}
            />

            <div className="text-center text-very-light-gray font-sans text-[12px] font-medium mt-9">
              Or
            </div>
            <Button onUpload={onUpload}>Choose file</Button>
          </Card>
        </div>
      </>
    );
  }
}

export default App;
