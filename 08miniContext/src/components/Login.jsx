import React ,{useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Login(){
    const [username,setUsername] = useState('')
    const [password, setpassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit= (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div className="bg-gray-500">
            <h2>Login</h2>
            <input className="bg-black text-white"
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />
            {"    "}
            <input  className="bg-black text-white" type="text" 
             value={password}
             onChange={(e) => setpassword(e.target.value)}
             placeholder="password" />
             {"   "}
            <button className="bg-red" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login