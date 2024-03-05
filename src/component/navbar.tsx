
import {Link, useNavigate} from "react-router-dom";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faHouse} from '@fortawesome/free-solid-svg-icons';
// import {faUser} from '@fortawesome/free-solid-svg-icons';
// import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
// import {faBars} from '@fortawesome/free-solid-svg-icons';

const navbarcompomobile = () => {
  const isLoggedin = localStorage.getItem("guest_session_id")!== null;
  console.log("Is Logged In:", isLoggedin);

  const navigate =useNavigate();

  const LoggedOut =()=>{localStorage.removeItem("guest_session_id"); navigate("/auth")};




  return (

    <div className='md:h-20 h-max top-0 bg-stone-100 m-0 md:p-0 w-full flex flex-col md:flex-row md:justify-around gap-y-1 md:gap-0 md:gap-y-0 justify-center items-center p-10 fixed font-semibold text-grey-700 shadow-lg'>

      <div className='flex w-full md:w-1/2 justify-center text-center   md:ml-10 items-center md:justify-start'>
        <div className='text-2xl font-bold text-stone-500 text-center'> ReelRANKER</div>
      </div>
    <div className=' flex  items-center justify-center p-0 top-0 w-full  md:w-1/2 '>
    
      <div className='text-base md:text-xl flex items-center justify-center '>
      <Link to="/" className=' '>
      <div className='flex items-center gap-1 justify-start ml-4 m-2  text-slate-500'> 
     Home </div> </Link>

   
      <Link to="Rated_Page" className=' '>
      <div className='flex items-center gap-1 justify-start ml-4 m-2  text-slate-500'> 
     Rated Page  </div> </Link>

     {isLoggedin? (<button onClick={LoggedOut} className=' '>

<div className='flex items-center gap-1 justify-start ml-4 m-2  text-slate-500'> 
LogOut </div> </button>) :
      (<Link to="auth" className=' '>

      <div className='flex items-center gap-1 justify-start ml-4 m-2  text-slate-500'> 
    LogIn </div> </Link>)}

     </div>
     
  
     
      </div>

      </div>
  
    
  )
}

export default navbarcompomobile;