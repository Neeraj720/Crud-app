import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Redux/Slice";

function Update() {
  let {id} = useParams()
  let user = useSelector((state) => state.crudData.value)
  let isExistUser = user.find((user) => user.id == id)
  let {name,email} = isExistUser
  const [uname,setUname] = useState(name)
  const [uemail,setUemail] = useState(email)
  const navigate = useNavigate()
  const dispatch = useDispatch() 
  const handleUpdate = (e) =>{
    e.preventDefault()
    dispatch(updateUser({
      id:id,
      name:uname,
      email:uemail
    }))
    navigate('/')
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border p-5">
        <form onSubmit={handleUpdate}>
          <h3>Update User</h3>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="form-control mb-2"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control mb-2"
              value={uemail}
              onChange={(e) => setUemail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success mb-2">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
