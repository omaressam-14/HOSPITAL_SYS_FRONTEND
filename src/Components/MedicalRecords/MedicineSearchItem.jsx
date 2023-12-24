const public_path = import.meta.env.VITE_REACT_PUBLIC;
function MedicineSearchItem({ medicine, setMedicines, onClose }) {
  const handleAdd = function () {
    setMedicines((s) => (s.includes(medicine) ? s : [...s, medicine]));
    onClose();
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg mb-4">
      <div className="flex gap-4 items-center">
        <img
          src={`${public_path}/medicines/${medicine.photo}`}
          className="rounded-full w-[6rem] h-[6rem]"
        />

        <div className="flex flex-col gap-4">
          <p className="font-semibold text-xl capitalize text-gray-700">
            {medicine.name}
          </p>
          <p className="font-thin text-blue-400 text-lg">{medicine.price}</p>
        </div>
      </div>
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-300">
        Add
      </button>
    </div>
  );
}

export default MedicineSearchItem;
