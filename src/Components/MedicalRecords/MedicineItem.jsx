function MedicineItem({ medicine, handleDelete }) {
  return (
    <div className="flex gap-4 bg-green-400 text-white px-4 py-2 rounded-full">
      <p>{medicine.name}</p>
      <button onClick={() => handleDelete(medicine._id)} className="text-black">
        x
      </button>
    </div>
  );
}

export default MedicineItem;
