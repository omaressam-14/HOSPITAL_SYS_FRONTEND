import StarRating from "../../utils/StarRating";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import useUser from "../ProtectedRoute/useUser";
import { useDeleteReview, useUpdateReview } from "./useReviews";
const publicPath = import.meta.env.VITE_REACT_PUBLIC;

function Review({ review, handleShowUpdateReview }) {
  const { user } = useUser();
  //

  // deleting review mutationfn
  const { mutate: rdelete, isLoading: isDeleting } = useDeleteReview();
  // updating review mutationfn
  const { mutate: rupdate, isLoading: isUpdating } = useUpdateReview();
  //

  return (
    <div className="flex flex-col justify-center items-start gap-2 bg-slate-100 p-4 rounded-lg mb-4 ">
      <div className="flex gap-4 items-center justify-center ">
        {/* <img src={review.user.photo} className="w-8" /> */}
        <img
          src={`${publicPath}/users/${review.user.photo}`}
          className="w-14 rounded-full"
        />
        <p className="capitalize">{review.user.name}</p>
      </div>
      <StarRating size={16} rating={review.rating} />
      <p>{review.review}</p>
      {user?._id == review.user._id && (
        <div className="flex self-end gap-2  py-2 px-4 rounded-lg justify-between border-[1.5px] border-gray-400">
          <button
            disabled={isDeleting || isUpdating}
            onClick={() => handleShowUpdateReview(review)}
            className="border-r-[1px] border-gray-500 pr-2 cursor-pointer disabled:cursor-not-allowed">
            <MdEdit
              size={24}
              color="#0077b6"
              className="hover:scale-125 transition-all duration-300"
            />
          </button>
          <button
            disabled={isDeleting || isUpdating}
            role="button"
            className="cursor-pointer disabled:cursor-not-allowed"
            onClick={() => rdelete(review._id)}>
            <MdDelete
              size={24}
              color="#ef233c"
              className="hover:scale-125 transition-all duration-300"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
