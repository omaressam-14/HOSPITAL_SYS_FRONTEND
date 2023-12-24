function Backdrop({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="z-40 fixed inset-0 bg-black opacity-50 cursor-pointer"></div>
  );
}

export default Backdrop;
