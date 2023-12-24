import { useParams } from "react-router-dom";
import { useGetUser } from "../Components/Admin/useUsers";
import Spinner from "../utils/Spinner";
import Error from "../utils/Error";
import UserDetailHeader from "../Components/Users/UserDetailHeader";
import UserContactInfo from "../Components/Users/UserContactInfo";

function User() {
  const { id: userId } = useParams();
  const { data, isLoading, isError } = useGetUser(userId);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="m-8 xl:mx-[8rem] xl:my-[4rem] rounded-lg flex flex-col">
      <UserDetailHeader user={data} />
      <UserContactInfo user={data} />
    </div>
  );
}

export default User;
