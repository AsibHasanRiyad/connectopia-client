import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserTable from "./UserTable";


const ManageUser = () => {
    const axiosSecure =useAxiosSecure()
    const {data:users} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    }) 
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
     {
        users?.map( user => <UserTable key={user._id} user={user}></UserTable> )
     }

    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default ManageUser;