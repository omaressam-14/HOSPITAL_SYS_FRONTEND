function Button({ children, className, onCLick, disabled, category, type }) {
  let style = "";
  if (category === "cancel")
    style = `bg-red-500 rounded-lg hover:bg-red-300 text-white py-2 px-4 font-bold text-center transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`;
  if (category === "create")
    style = `bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg text-center transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`;

  return (
    <button
      className={`${
        !category
          ? `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center ${className} disabled:bg-gray-400 disabled:cursor-not-allowed`
          : `${style} ${className}`
      }`}
      onClick={onCLick}
      disabled={disabled}
      type={type}>
      {children}
    </button>
  );
}

export default Button;
