import React, { useReducer, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddItem } from "../Redux/Slice";

function UserForm() {
  let uname = useRef();
  let uemail = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let nm = uname.current.value;
    let em = uemail.current.value;
    let obj = {
      name: nm,
      email: em,
    };
    dispatch(AddItem(obj));
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border p-5">
        <form onSubmit={handleSubmit}>
          <h3>Add New User</h3>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="form-control mb-2"
              ref={uname}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control mb-2"
              ref={uemail}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success mb-2">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
