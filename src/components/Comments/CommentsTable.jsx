/* eslint-disable react/prop-types */

import Button from "../Shared/Button";

const CommentsTable = ({ com }) => {
  const { comment, postedTime, email, image, name } = com;
  const commentMax = comment.slice(0, 20);
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          <h1>
            {comment.length > 20 ? (
              <div>
                {" "}
                <h1>{commentMax}</h1>
                <button
                  className=" text-blue-600"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  See More.....
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <p className="py-4">
                      {comment}
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Button type={'primary'} title={'Close'}></Button>
                      </form>
                    </div>
                  </div>
                </dialog>{" "}
              </div>
            ) : (
              <h1>{comment}</h1>
            )}
          </h1>
        </td>
        <td>{postedTime}</td>
        <th>
          <h1>Feed Back</h1>
        </th>
        <td>
          <h1>Report</h1>
        </td>
      </tr>
    </>
  );
};

export default CommentsTable;
