import { useParams } from "react-router-dom";
import { useGetMedicine } from "../Components/Medicines/useMedicine";
import Spinner from "../utils/Spinner";
import Error from "../utils/Error";
import MedicineDetailsHeader from "../Components/Medicines/MedicineDetailsHeader";
import MedicineInfoContainer from "../Components/Medicines/MedicineInfoContainer";
import { useState } from "react";
import Backdrop from "../utils/Backdrop";
import MedicineEditForm from "../Components/Medicines/MedicineEditForm";

function MedicineDetails() {
  const { id: medicineId } = useParams();
  const { data, isLoading, isError } = useGetMedicine(medicineId);
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

  const handleFormToggle = function () {
    setIsOpenEditForm((s) => !s);
  };

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="p-8 relative">
      <MedicineDetailsHeader data={data} onEdit={handleFormToggle} />
      <MedicineInfoContainer data={data} />
      {isOpenEditForm && (
        <>
          <Backdrop onClick={handleFormToggle} />
          <MedicineEditForm medicine={data} onClose={handleFormToggle} />
        </>
      )}
    </div>
  );
}

export default MedicineDetails;
