import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Registration(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const history=useNavigate()
    function handleSubmit(){
        axios.post("http://localhost:4000/register",{email,password,confirmPassword})
            .then(res=>console.log(res.data))
        history("/login")
    }
    return(
        <div>
            <h3>Register here</h3>
            <label>Email:</label><br></br>
            <input onChange={(e)=>setEmail(e.target.value)} type="email"></input><br></br>
            <label>Password:</label><br></br>
            <input onChange={(e)=>setPassword(e.target.value)} type="text"></input><br></br>
            <label>Confirm Password:</label><br></br>
            <input onChange={(e)=>setConfirmPassword(e.target.value)} type="text"></input><br></br>
            <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
    )
}
export default Registration;