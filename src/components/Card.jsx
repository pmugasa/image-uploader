function Card({ children }) {
  return (
    <div className=" h-[32rem] w-[25rem] rounded-xl bg-white px-[31px] shadow drop-shadow-xl">
      {children}
    </div>
  );
}
export default Card;
