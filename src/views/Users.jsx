import { useEffect, useState } from "react";
import { useGetAllUsers } from "../Components/Admin/useUsers";
import UserCard from "../Components/Users/UserCard";
import UserRoleMenu from "../Components/Users/UserRoleMenu";
import Spinner from "../utils/Spinner";
import SearchBar from "../utils/SearchBar";
import CreateUserForm from "../Components/Users/CreateUserForm";

function Users() {
  const [activeRole, setActiveRole] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const {
    data: users,
    isLoading,
    refetch,
    isRefetching,
  } = useGetAllUsers(activeRole);

  useEffect(
    function () {
      refetch();
    },
    [refetch, activeRole]
  );

  if (isRefetching) return <Spinner />;
  if (isLoading) return <Spinner />;

  return (
    <div className="sm:my-8 sm:mx-16">
      <SearchBar
        CreateComponent={CreateUserForm}
        setFilteredData={setFilteredData}
        data={users}
      />
      <UserRoleMenu setActive={setActiveRole} activeRole={activeRole} />
      <div className="bg-gray-50 rounded-lg p-4 w-[100%] flex flex-col gap-4">
        {(filteredData?.length === 0 || users?.length === 0) && (
          <p className="text-center">No User Found</p>
        )}
        {filteredData
          ? filteredData?.map((user) => {
              return <UserCard key={user._id} user={user} />;
            })
          : users?.map((user) => {
              return <UserCard key={user._id} user={user} />;
            })}
      </div>
    </div>
  );
}

export default Users;
