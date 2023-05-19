function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-[9rem] w-[24rem] rounded-xl bg-white shadow drop-shadow-xl px-[32px]">
        <h3 className=" mt-[36px] font-sans text-base font-medium text-gray">
          Uploading...
        </h3>
        <div className="w-[340px] h-[6px] rounded-[8px] mt-[31px] bg-loader-bg">
          <div className="bg-accent h-[6px] w-[1px] rounded-[8px] animate-side"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
