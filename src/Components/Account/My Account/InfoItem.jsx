function InfoItem({ head, value }) {
  return (
    <div className="flex flex-col mb-4">
      <p className="text-gray-500 capitalize">{head}</p>
      <p className="font-semibold text-gray-700 capitalize">{value}</p>
    </div>
  );
}

export default InfoItem;
