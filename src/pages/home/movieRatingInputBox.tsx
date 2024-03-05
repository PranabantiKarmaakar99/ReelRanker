import { useState } from "react";

const movieRatingInputBox = (params:any) => {
    const [value, setValue] = useState(0);
    //const [rating,setRating] =useState(0)


   

    const increment = () => {

      if (value!=10)
      setValue(value + 0.5);
    };
  
    const decrement = () => {
      if (value > 0) {
        setValue(value - 0.5);
      }
    };

    const handleChange =()=>{

      console.log(value)
     
      params.setRating(Number(value))
      console.log(params.rating)
      params.rate(params.id);
      console.log ("This is set")
      setValue(0)
     
      
    }

   

    
  
    return (
     
       
           <div className="flex items-center text-xs gap-2 ">
        <div className=' flex'> 
         <button
          className="bg-stone-500 hover:bg-stone-800 text-white px-3 py-1 rounded-l"
          onClick={decrement}
        >
          -
        </button>
        <input
          type="text"
          className="border w-8 border-gray-300 px-1 py-1 text-black text-center"
          value={value}
          readOnly
          // onChange={handleChange}
         
        />
        <button
          className="bg-stone-500 hover:bg-stone-800 text-white px-3 py-1 rounded-r"
          onClick={increment}
        >
          +
        </button>
        </div>
      
        <button onClick={handleChange}  className="text-sm w-20 px-2 py-1 rounded-md hover:bg-stone-800 text-white shadow-md bg-stone-400" > Rate </button>
        </div>
       
     
    );
}

export default movieRatingInputBox;