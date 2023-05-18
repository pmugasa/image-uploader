function App() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="h-[30rem] w-[25rem] rounded-xl bg-white shadow drop-shadow-xl ">
          <h3 className="text-center mt-9 font-sans text-base font-medium text-gray">
            Upload your image
          </h3>
          <p className="text-center mt-4 font-sans text-[10px] font-medium text-gray">
            File should be Jpeg, Png...
          </p>

          <div className="mx-auto w-[21rem] h-[14rem] bg-light-gray mt-8 rounded-xl border-dashed border-2 border-grayish-blue flex flex-col items-center justify-center">
            <div className="w-[114px] h-[88px] mx-auto mt-[40px]">
              <img src="/image.svg" alt="drop_image" className="object-cover" />
            </div>

            <p className="text-very-light-gray font-sans text-[12px] font-medium mt-auto mb-[40px]">
              Drag & Drop your image here
            </p>
          </div>
          <div className="text-center text-very-light-gray font-sans text-[12px] font-medium mt-9">
            Or
          </div>
          <label
            className="absolute mt-4 left-[140px] cursor-pointer inline-block px-6 py-2 bg-accent rounded-lg text-[12px] text-white"
            required
          >
            <input type="file" className="hidden" />
            <span>Choose a file</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
