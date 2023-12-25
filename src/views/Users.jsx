import { useEffect, useState } from "react";
import { useGetAllUsers } from "../Components/Admin/useUsers";
import UserCard from "../Components/Users/UserCard";
import UserRoleMenu from "../Components/Users/UserRoleMenu";
import Spinner from "../utils/Spinner";
import SearchBar from "../utils/SearchBar";
import CreateUserForm from "../Components/Users/CreateUserForm";
import Pagination from "../utils/Pagination";
import { RESULT_PER_PAGE } from "./../utils/CONSTANSTS";

function Users() {
  const limit = RESULT_PER_PAGE;
  const [activeRole, setActiveRole] = useState("");
  const [acitvePage, setActivePage] = useState(1);
  const [filteredData, setFilteredData] = useState("");

  const { data, isLoading, refetch, isRefetching } = useGetAllUsers(
    activeRole,
    acitvePage,
    limit
  );

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
        data={data?.data}
      />
      <UserRoleMenu
        setActivePage={setActivePage}
        setActive={setActiveRole}
        activeRole={activeRole}
      />
      <div className="bg-gray-50 rounded-lg p-4 w-[100%] flex flex-col gap-4">
        {(filteredData?.length === 0 || data?.results === 0) && (
          <p className="text-center">No User Found</p>
        )}
        {filteredData
          ? filteredData?.map((user) => {
              return <UserCard key={user._id} user={user} />;
            })
          : data?.data?.map((user) => {
              return <UserCard key={user._id} user={user} />;
            })}
      </div>
      <Pagination count={data?.totalResults} setActivePage={setActivePage} />
    </div>
  );
}

export default Users;
