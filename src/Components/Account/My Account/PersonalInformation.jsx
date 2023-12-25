import EditButton from "./EditButton";
import InfoItem from "./InfoItem";

function PersonalInformation({ user }) {
  return (
    <>
      <h1 className="font-semibold text-xl text-gray-700 mb-4">
        Personal Information
      </h1>
      <div className="grid grid-cols-[2fr,2fr,1fr] grid-rows-2">
        <InfoItem head="Name" value={user.name} />
        <InfoItem
          head="Email"
          value={<p className="lowercase">{user.email}</p>}
        />
        <div className="col-span-1 row-span-3">
          <EditButton />
        </div>
        <InfoItem head="Phone" value={user.phone} />
        <InfoItem head="Age" value={user.age} />
      </div>
    </>
  );
}

export default PersonalInformation;
