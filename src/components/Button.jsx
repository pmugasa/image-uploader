function Button({ children, onUpload, formats, setError }) {
  function postData(image) {
    //convert file list to an array
    const images = [...image];

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
        `Only following file formats are acceptable: ${formats.join(", ")}`
      );

      return;
    }

    //if it passses all the above
    if (images && images.length) {
      onUpload(images);
    }
  }
  return (
    <label htmlFor="file-upload" required>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => postData(e.target.files)}
      />
      <span className="absolute mt-4 left-[140px] cursor-pointer inline-block px-6 py-2 bg-accent rounded-lg text-[12px] text-white">
        {children}
      </span>
    </label>
  );
}
export default Button;
