function MedicineDetailInfo({ head, body }) {
  return (
    <div className="flex gap-4 text-[1.1rem]">
      <p className="font-semibold text-gray-400">{head}:</p>
      <p className="font-bold text-gray-700">{body}</p>
    </div>
  );
}

export default MedicineDetailInfo;
