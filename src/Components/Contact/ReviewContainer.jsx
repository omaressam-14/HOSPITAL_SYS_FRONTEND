import DoctorRate from "./DoctorRate";
import Review from "./Review";

function ReviewContainer({ doctor, handleShowReview, handleShowUpdateReview }) {
  return (
    <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr,2fr] w-[100%]  ">
      <DoctorRate doctor={doctor} toggleReview={handleShowReview} />
      {doctor.reviews.length > 0 ? (
        <div>
          {doctor.reviews.map((review) => {
            return (
              <Review
                review={review}
                key={review._id}
                handleShowUpdateReview={handleShowUpdateReview}
              />
            );
          })}
        </div>
      ) : (
        <p className="uppercase text-2xl text-center font-semibold">
          No Reviews yet
        </p>
      )}
    </div>
  );
}

export default ReviewContainer;
