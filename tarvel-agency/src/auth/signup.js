import React,{useState} from "react" ; 
const Signup =()=>{
    const [UserName , setUserName]=useState("")
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const [confirmePassword , setConfirmePassword ]=useState("")


    const handleSignup =(e)=>{
    e.preventDefault()
    };

return (
    <div>
    <h2> Sign Up</h2>
    <form onSubmit={handleSignup}>
     <input
     type="text"
     placeholder="enter your name"
     value={UserName}
     onChange={(e)=>{setUserName(e.target.value)}}
     />

   <input
     type="text"
     placeholder="enter your email"
     value={email}
     onChange={(e)=>{setEmail(e.target.value)}}
     />

<input
     type="text"
     placeholder="enter your password"
     value={password}
     onChange={(e)=>{setPassword(e.target.value)}}
     />

<input
     type="text"
     placeholder="confirme your password"
     value={confirmePassword}
     onChange={(e)=>{setConfirmePassword(e.target.value)}}
     />
<button type="submit">Sign Up</button>
    </form>
    </div>
)
    
}