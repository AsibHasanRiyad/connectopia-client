/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsersGear } from "react-icons/fa6";

const UserTable = ({ user , refetch}) => {
  const { name, email, image, status } = user;
  const axiosSecure = useAxiosSecure();
  const handelRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}`)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
              title: "Successful!",
              text: `${user.name} is now an Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar" />
            </div>
          </div>
        </td>
        <td>
          <h1>{name}</h1>
        </td>
        <td>{email}</td>
        <th>
          {user.role === "admin" ? (
            <p>Admin</p>
          ) : (
            <button  onClick={() => handelRole(user)} className="btn btn-circle btn-outline">
               <FaUsersGear className=" text-2xl" />
          </button>
          )}
        </th>
        <td>
          <h1>{status}</h1>
        </td>
      </tr>
    </>
  );
};

export default UserTable;
