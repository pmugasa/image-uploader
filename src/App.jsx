import { useEffect, useState } from "react";
import Card from "./components/Card";
import DragandDrop from "./components/DragandDrop";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Success from "./components/Success";

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [error, setError] = useState("");
  const formats = ["jpg", "webp", "svg", "png"];

  //handling errors
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 2000);

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

        setIsUploading(false);
        setIsUploaded(true);
      }, 3000);
    };
    post();
  }
  if (isUploading) {
    return <Loader />;
  } else if (isUploaded) {
    return <Success />;
  } else {
    return (
      <>
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <Card>
            <h3 className="text-center mt-9 font-sans text-base font-medium text-gray">
              Upload your image
            </h3>
            <p className="text-center mt-4 font-sans text-[10px] font-medium text-gray">
              File should be Jpeg, Png...
            </p>
            {error ? (
              <p className="text-[10px] text-red-500 font-sans font-light p-4 mt-4 border border-red-400 bg-red-200 w-full rounded-sm h-10 flex items-center justify-center">
                {error}
              </p>
            ) : null}

            <DragandDrop
              onUpload={onUpload}
              setError={setError}
              setIsUploading={setIsUploading}
              formats={formats}
            />

            <div className="text-center text-very-light-gray font-sans text-[12px] font-medium mt-9">
              Or
            </div>
            <Button onUpload={onUpload} formats={formats} setError={setError}>
              Choose file
            </Button>
          </Card>
          <footer className="mt-4 font-sans font-medium text-gray text-lg">
            Made by Pete✌🏾
          </footer>
        </div>
      </>
    );
  }
}

export default App;
