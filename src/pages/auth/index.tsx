
import {Link} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import mutation from './mutation';
import { useNavigate } from 'react-router-dom';

const auth = () => {
    const navigate = useNavigate();
    const {data,mutate} =useMutation({mutationKey:["login"],mutationFn:mutation})
    const handleLogin = async()=>{
        await mutate();
        localStorage.setItem("guest_session_id",data.guest_session_id);
        navigate("/");
    }
  return (
    <div className='mt-14 flex flex-col justify-center items-center h-screen text-xl gap-4 m-4 text-gray-500'> 
    <h1> Welcome! Login by registering as a guest below.</h1>
        <button className='px-10 py-2 shadow-lg rounded-lg bg-stone-600 hover:bg-stone-400 font-semibold text-gray-200' onClick={handleLogin}> <Link to="" > Login</Link>
        
        </button>
    </div>
  )
}

export default auth;