import React,{useState} from "react";
//import axios from "axios";

const Registration = () => {
  const [state,setState]= useState({
name:'',
email:'',
phone:"",
password:'',
})



const handleName = (event)=>{
setState((state)=>({
  ...state,
  name: event.target.value
}))}

const handleEmail = (event)=>{
  setState((state)=>({
    ...state,
    email: event.target.value
  }))}

  const handlePhone = (event)=>{
    setState((state)=>({
      ...state,
      phone: event.target.value
    }))}

    const handlePassword = (event)=>{
      setState((state)=>({
        ...state,
        password: event.target.value
      }))}

    const handleSubmit=(e)=>{
      e.preventDefault();
    }

  return (
      <div>
    <form >
      <div class="form-group">
        <label for="exampleInputName">Name</label>
        <input
          type="name"
          class="form-control"
          value={state.name}
          onChange={handleName}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          value={state.email}
          onChange={handleEmail}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPhone">Phone</label>
        <input type="phone" class="form-control" value={state.phone} onChange={handlePhone}/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          value={state.password}
          onChange={handlePassword}
        />
      </div>
      <button type="submit" class="btn btn-success" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
    </div>
  );
};

export default Registration;
