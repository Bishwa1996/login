import React,{useState} from "react";

const Login = ()=>{
  const[values,setValues] = useState({
    email:"",
    password:"",
  })

const handleEmail=(event)=>{
setValues((values)=>({
  ...values,
  email: event.target.value
}))
}

const handlePassword=(event)=>{
  setValues((values)=>({
    ...values,
    password: event.target.value
  }
  ))

}

return(
    <form>
  <div class="form-group">
    <label>Email</label>
    <input type="email" className="form-control" value={values.email} onChange={handleEmail} />
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" className="form-control" value={values.password} onChange={handlePassword}/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
)
}

export default Login;