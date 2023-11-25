/* eslint-disable react/prop-types */


const UserTable = ({user}) => {
    const {name, email, image,status} = user
  return (
    <>
      <tr>
        <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={image}
                  alt="Avatar"
                />
              </div>
            </div>
        </td>
        <td>
         <h1>{name}</h1>
        </td>
        <td>{email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Make Admin</button>
        </th>
        <td>
         <h1>{status}</h1>
        </td>
      </tr>
    </>
  );
};

export default UserTable;
