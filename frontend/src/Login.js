import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [token,setToken]=useState()
    const history=useNavigate()
    function handleSubmit(){
        axios.post("http://localhost:4000/login",{email,password})
            .then(res=>setToken(res.data.token))
        if(token){
            localStorage.setItem("email",email)
            history("/home")
        }
        else{
            console.log("Please enter correct credentials");
        }
    }
    console.log(token);
    return(
        <div>
            <h3>Login here</h3>
            <label>Email:</label><br></br>
            <input onChange={(e)=>setEmail(e.target.value)} type="email"></input><br></br>
            <label>Password:</label><br></br>
            <input onChange={(e)=>setPassword(e.target.value)} type="text"></input><br></br>
            <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
    )
}
export default Login;