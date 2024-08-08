import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../Helpers/Localstorage";
import { deleteItem } from "../Redux/Slice";

function UserHome() {
  const data = useSelector((state) => state.crudData.value);
  // console.log("User data at Home page :" + JSON.stringify(data));
  let dispatch = useDispatch()
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/view/${id}`);
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id) =>{
    dispatch(deleteItem(id))
  }
  useEffect(() => {
    saveToLocalStorage("crudData", data);
  }, [data]);
  return (
    <div className="container">
      <h2 className="text-center mt-2" style={{ color: "grey" }}>
        Crud Application Using Redux
      </h2>
      <Link to="/userForm" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-warning"
                    onClick={() => handleView(user.id)}
                  >
                    View
                  </button>{" "}
                  &nbsp;
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="btn btn-success"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserHome;
