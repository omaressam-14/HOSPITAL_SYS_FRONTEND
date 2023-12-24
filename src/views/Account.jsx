import AddressInfo from "../Components/Account/My Account/AddressInfo";
import ImageInformation from "../Components/Account/My Account/ImageInformation";
import InfoCard from "../Components/Account/My Account/InfoCard";
import PersonalInformation from "../Components/Account/My Account/PersonalInformation";
import useUser from "../Components/ProtectedRoute/useUser";
import Error from "../utils/Error";
import Spinner from "../utils/Spinner";

function Account() {
  const { user, isLoading, isError } = useUser();

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="flex flex-col w-[90%] m-auto gap-5">
      <h1 className="mt-8 font-semibold text-xl text-gray-700">My Profile</h1>

      {/*  */}
      <InfoCard>
        <ImageInformation user={user} />
      </InfoCard>
      {/*  */}
      <InfoCard>
        <PersonalInformation user={user} />
      </InfoCard>
      {/*  */}
      <InfoCard>
        <AddressInfo user={user} />
      </InfoCard>
    </div>
  );
}

export default Account;
