export const rateMovie = async(movieId:number,rating:number) => {
   
    try {const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=80fc5c1a649799602d07dd3963a674ae&guest_session_id=${localStorage.getItem("guest_session_id")}`,
    {
    
        method : "POST",
        headers:{
            accept:"Application/json",
            "content-type":"application/json;charset=utf-8",
        },

        body: `{"value":${rating}}`,

    })




const data = await res.json();
console.log("rating is set" , data)

return data}


catch(err) {
    console.log(err);
}
};

export const rateTVShow = async(TVShowId:number,rating:number) => {
   
    const res = await fetch(`https://api.themoviedb.org/3/tv/${TVShowId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=80fc5c1a649799602d07dd3963a674ae`,
    {
    
        method : "POST",
        headers:{
            accept:"Application/json",
            "content-type":"application/json;charset=utf-8",
        },
        body: `{"value":${rating}}`,

    })

console.log(res)
return res.json();
};