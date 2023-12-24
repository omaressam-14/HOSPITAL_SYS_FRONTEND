import { useParams } from "react-router-dom";
import useDoctor from "../Components/Contact/useDoctor";
import Spinner from "../utils/Spinner";
import DoctorInfo from "../Components/Contact/DoctorInfo";
import AppointmentForm from "../Components/Contact/AppointmentForm";
import { useState } from "react";
import Backdrop from "../utils/Backdrop";
import CreateReviewForm from "../Components/Contact/CreateReviewForm";
import ReviewContainer from "../Components/Contact/ReviewContainer";
import UpdateReviewForm from "../Components/Contact/UpdateReviewForm";

function Contact() {
  const { id } = useParams();
  const { doctor, isLoading } = useDoctor(id);
  const [showReview, setShowReview] = useState(false);
  const [showUpdateReview, setShowUpdateReview] = useState(false);
  let [activeReview, setActiveReview] = useState({});

  const handleShowReview = function () {
    setShowReview((s) => !s);
  };

  const handleUpdateReviewShow = function (props = "") {
    activeReview = Object.keys(props).includes("_id")
      ? setActiveReview(props)
      : setActiveReview({});
    setShowUpdateReview((s) => !s);
  };

  if (isLoading) return <Spinner />;
  return (
    <div className="m-8 gap-6 flex flex-col">
      <div className="md:grid md:grid-cols-[3fr,1fr] md:gap-8 w-[100%] flex flex-col gap-5">
        <DoctorInfo doctor={doctor} />
        <AppointmentForm />
      </div>
      {/* reviews container */}
      <ReviewContainer
        doctor={doctor}
        handleShowReview={handleShowReview}
        handleShowUpdateReview={handleUpdateReviewShow}
      />
      {/*  */}
      {showReview && (
        <>
          <CreateReviewForm onCloseForm={handleShowReview} />
          <Backdrop onClick={handleShowReview} />
        </>
      )}
      {/*  */}
      {showUpdateReview && (
        <>
          <UpdateReviewForm
            onCloseForm={handleUpdateReviewShow}
            review={activeReview}
          />
          <Backdrop onClick={handleUpdateReviewShow} />
        </>
      )}
    </div>
  );
}

export default Contact;
