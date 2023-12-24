import MedicineDetailInfo from "./MedicineDetailInfo";

function MedicineInfoContainer({ data }) {
  return (
    <div className="flex flex-col gap-8 mt-8 ">
      <MedicineDetailInfo head="name" body={data.name} />
      <MedicineDetailInfo head="price" body={data.price} />
      <MedicineDetailInfo head="quantity" body={data.quantity} />
    </div>
  );
}

export default MedicineInfoContainer;
