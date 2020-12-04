import React from "react";

const CreateUser = () => {
  return (
    <div>
    <h1>Create New User</h1>
    <form action="http://localhost:3000/homepage">
      <div class="form-group">
        <label for="exampleInputName">Name</label>
        <input
          type="name"
          class="form-control"
        //   value={state.name}
        //   onChange={handleName}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
        //   value={state.email}
        //   onChange={handleEmail}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPhone">Phone</label>
        <input
          type="phone"
          class="form-control"
        //   value={state.phone}
        //   onChange={handlePhone}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
        //   value={state.password}
        //   onChange={handlePassword}
        />
      </div>
      <button type="submit" class="btn btn-success">
        Submit
      </button>
    </form>
  </div>
  )
};

export default CreateUser;
