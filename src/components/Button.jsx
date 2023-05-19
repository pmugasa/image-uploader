function Button({ children, setUpload }) {
  return (
    <label htmlFor="file-upload" required>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => setUpload(e.target.value)}
      />
      <span className="absolute mt-4 left-[140px] cursor-pointer inline-block px-6 py-2 bg-accent rounded-lg text-[12px] text-white">
        {children}
      </span>
    </label>
  );
}
export default Button;
