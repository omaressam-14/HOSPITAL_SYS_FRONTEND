import EditButton from "./EditButton";
import InfoItem from "./InfoItem";

function AddressInfo({ user }) {
  return (
    <>
      <h1 className="font-semibold text-xl text-gray-700 mb-4">Address</h1>
      <div className="grid grid-cols-[2fr,2fr,1fr] grid-rows-2">
        <InfoItem head="Country" value={user.address.country} />
        <InfoItem head="State" value={user.address.state} />
        <div className="col-span-1 row-span-3">
          <EditButton />
        </div>
        <InfoItem head="City" value={user.address.city} />
        <InfoItem head="Postal Code" value={user.address.postalCode} />
      </div>
    </>
  );
}

export default AddressInfo;
