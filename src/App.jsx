import { useEffect, useState } from "react";
import Card from "./components/Card";
import DragandDrop from "./components/DragandDrop";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Success from "./components/Success";
import axios from "axios";

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [imgLink, setImgLink] = useState("");
  const [error, setError] = useState("");
  const formats = ["jpg", "webp", "svg", "png"];

  //handling errors
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [error]);

  async function onUpload(image) {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", image[0]);
      const response = await axios.post(
        "http://localhost:3001/images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTimeout(function () {
        console.log("posting to server...", image[0]);
        setImgLink(response.data.path);
        setIsUploading(false);
        setIsUploaded(true);
      }, 2000);
    } catch (error) {
      setIsUploaded(false);
      setIsUploading(false);
      setError("Error uploading file." + " " + error.message);
    }
  }

  if (isUploading) {
    return <Loader />;
  } else if (isUploaded) {
    return <Success imgLink={imgLink} />;
  } else {
    return (
      <>
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <form encType="multi-part/form-data">
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
          </form>
          <footer className="mt-4 font-sans font-medium text-gray text-lg">
            Made by Pete✌🏾
          </footer>
        </div>
      </>
    );
  }
}

export default App;
