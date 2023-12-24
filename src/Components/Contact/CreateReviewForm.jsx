import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useCreateReview } from "./useReviews";

function CreateReviewForm({ onCloseForm }) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id: doctorId } = useParams();

  const reviewText = watch("review");

  //
  const { mutate, isLoading: isCreating } = useCreateReview(onCloseForm);
  //
  // handle form Submittion
  const onSubmit = (data) => {
    data.user = Cookies.get("userid");
    data.doctor = doctorId;
    data.rating = Number(data.rating);
    mutate({ docId: doctorId, body: data });
  };
  return (
    <div className="z-50 bg-gray-100 h-auto w-[90%] lg:w-[30%] absolute left-0 right-0 ml-auto mr-auto flex items-center p-8 rounded-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex items-center justify-center w-[100%] ">
        <div className="w-[100%] flex flex-col gap-8">
          <div className="flex gap-4 items-center ">
            <label className="label">Rating :</label>
            <select
              disabled={isCreating}
              {...register("rating", { required: true })}
              className=" w-auto font-bold bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="w-[100%] flex flex-col">
            <label className="label mb-1" htmlFor="textarea">
              Review:
            </label>
            {errors.review && (
              <p className="input-error capitalize mb-2">
                {errors.review.message}
              </p>
            )}
            <textarea
              disabled={isCreating}
              {...register("review", { required: "please provide the review" })}
              className="outline-none border-[1px] border-gray-700 p-2 rounded-md resize-none w-[80%] h-[10rem]"
              type="textarea"
              id="textarea"
              placeholder="input your review"
            />
          </div>
          <div className="flex gap-4 justify-end">
            <Button
              disabled={isCreating}
              type="button"
              category="cancel"
              onCLick={onCloseForm}>
              Cancel
            </Button>
            <Button
              disabled={isCreating || !reviewText || reviewText?.length < 5}
              type="submit"
              category="create">
              {isCreating ? "...Loading" : "Post"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateReviewForm;
