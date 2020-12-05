import React, { useState, useEffect } from "react";
import axios from "axios";

const Registration = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users/")
      .then((response) => {
        console.log(response);
        // console.log(response.email);
        // console.log(response.phone);
        // console.log(response.password);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleName = (event) => {
    setState((state) => ({
      ...state,
      name: event.target.value,
    }));
  };

  const handleEmail = (event) => {
    setState((state) => ({
      ...state,
      email: event.target.value,
    }));
  };

  const handlePhone = (event) => {
    setState((state) => ({
      ...state,
      phone: event.target.value,
    }));
  };

  const handlePassword = (event) => {
    setState((state) => ({
      ...state,
      password: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Hi');

    const register={
      name: state.name,
      email: state.email,
      phone: state.phone,
      password: state.password
    }
    console.log(register);

    axios.post('http://localhost:5000/api/v1/users',register)
    .then(response=>console.log(response));

    window.location='/';

    // axios
    //   .post("/", {
    //     name: state.name,
    //     email: state.email,
    //     phone: state.phone,
    //     password: state.password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form action="http://localhost:3000/login">
        <div className="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="name"
            className="form-control"
            value={state.name}
            onChange={handleName}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            value={state.email}
            onChange={handleEmail}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPhone">Phone</label>
          <input
            type="phone"
            className="form-control"
            value={state.phone}
            onChange={handlePhone}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            value={state.password}
            onChange={handlePassword}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
