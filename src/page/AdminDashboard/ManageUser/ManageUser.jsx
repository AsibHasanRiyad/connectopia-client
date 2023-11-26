
import UserTable from "./UserTable";
import useUser from "../../../hooks/useUser";

const ManageUser = () => {
  const [users , refetch] = useUser()
  console.log(users);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th> Subscription Status </th>
            </tr>
          </thead>
          <tbody>
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
