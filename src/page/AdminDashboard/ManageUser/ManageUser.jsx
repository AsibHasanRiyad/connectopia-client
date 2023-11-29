
import UserTable from "./UserTable";
import useUser from "../../../hooks/useUser";

const ManageUser = () => {
  const [users , refetch] = useUser()
  console.log(users);
  return (
    <div>
      <div className="overflow-x-auto max-w-xs md:max-w-xl lg:max-w-full">
        <table className="table">
          <thead>
            <tr className=" text-green-500 text-lg">
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th> Subscription Status </th>
            </tr>
          </thead>
          <tbody className=" text-gray-100">
            {users?.map((user) => (
              <UserTable key={user._id} refetch={refetch} user={user}></UserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
