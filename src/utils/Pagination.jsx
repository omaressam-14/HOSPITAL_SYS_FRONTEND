import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { RESULT_PER_PAGE } from "./../utils/CONSTANSTS";

function Pagination({ count, setActivePage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / RESULT_PER_PAGE);

  function handleNextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    setActivePage(next);
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function handlePrevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    setActivePage(prev);
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  //
  return (
    <div className="w-[100%] flex items-center justify-between mt-4">
      <button
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        className="flex items-center gap-2 text-gray-600 hover:text-white transition-all duration-300 px-2 py-1 rounded-lg bg-transparent hover:bg-indigo-600 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-600">
        <IoIosArrowBack />
        Prev
      </button>
      <button
        disabled={currentPage === pageCount}
        onClick={handleNextPage}
        className="flex items-center gap-2 text-gray-600 hover:text-white transition-all duration-300 px-2 py-1 rounded-lg bg-transparent hover:bg-indigo-600 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-600">
        Next
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;
