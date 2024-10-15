import React , {useState} from "react"
const Login=()=>{
    const [userName , setUserName]= useState("")
    const [email , setEmail]= useState("")
    const [password , setPassword]= useState("")
    
const handleLogin =(e)=>{
e.preventDefault()
}

return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
    <input 
    type="text"
    placeholder="enter your name"
    value={userName}
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
<button type="submit"> Login </button>
    </form>
    </div>
)

}

export default Login 