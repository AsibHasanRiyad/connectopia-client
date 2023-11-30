
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserTable from "./UserTable";
// import useUser from "../../../hooks/useUser";
import { useEffect, useState } from "react";

const ManageUser = () => {
  // const [users , refetch] = useUser()
  // console.log(users);
  const [users, setUsers] = useState([])
  const [totalUser, setTotalUser] = useState(0)
  const [currentPage, setCurrentPage] = useState(0);
  const axiosSecure = useAxiosSecure()
 


  useEffect(() => {
    fetch("http://localhost:5001/usersCount")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.count);
        setTotalUser(data.count);
      });
  }, []);


  const userPerPage = 10;
  const numberOfPage = Math.ceil(totalUser / userPerPage);
  // console.log(numberOfPage);
  const pages = [];
  for (let i = 0; i < numberOfPage; i++) {
    pages.push(i);
  }

  useEffect(() => {
    const post = async () => {
      const res = await axiosSecure.get(
        `/users?page=${currentPage}&size=${userPerPage}`
      );
      setUsers(res.data);
    };
    post();
  }, [axiosSecure, currentPage]);

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
              <UserTable key={user._id} user={user}></UserTable>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-center items-center my-6">
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "btn btn-circle bg-blue-500 text-xl border-none text-white hover:bg-blue-500  mr-3 "
                : "btn btn-circle bg-green-500 text-xl border-none text-white hover:bg-blue-500 mr-3"
            }
            key={page}
          >
            {" "}
            {page}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ManageUser;
