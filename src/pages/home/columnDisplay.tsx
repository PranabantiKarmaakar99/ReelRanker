import { DisplayType } from ".";
import {  Link } from "react-router-dom";
import MovieRatingInputBox from "./movieRatingInputBox";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTVShow } from "./mutation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReadMore from "./readMore";

export interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  name?: string;
  vote_average: string;
  release_date: string;
  rating?:number
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
  isRated?:boolean;
}

export const Movies = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGZjNWMxYTY0OTc5OTYwMmQwN2RkMzk2M2E2NzRhZSIsInN1YiI6IjY1ZGQxODFmYzkyYzVkMDE3YzQ2ZTg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RY3bZ9p9qkNjAx0kfyloJQuLvQsdCmdq70jG9HSSStM",
    },
  });

  console.log(res);
  return res.json();
};

export const TVSeries = async () => {
  const res = await fetch("https://api.themoviedb.org/3/tv/popular", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGZjNWMxYTY0OTc5OTYwMmQwN2RkMzk2M2E2NzRhZSIsInN1YiI6IjY1ZGQxODFmYzkyYzVkMDE3YzQ2ZTg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RY3bZ9p9qkNjAx0kfyloJQuLvQsdCmdq70jG9HSSStM",
    },
  });

  console.log(res);
  return res.json();
};

export const ColumnDisplay = (props: Props) => {
  const [rating, setRating] = useState<number>(0);
  
  const onSuccess =()=>{
    toast.success("Succesfully rated");
   
  };
  const onError =()=>{
    toast.success("Something went wrong")
  };


  const { mutate: RateMovieMutation } = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: (id: number) => rateMovie(id, rating),
    onSuccess,
    onError
  });

  const { mutate: RateTVshowMutation } = useMutation({
    mutationKey: ["rateTVShows"],
    mutationFn: (id: number) => rateTVShow(id, rating),
    onSuccess,
    onError
  });

  

  const { data, displayType,isRated } = props;
  const Rate = displayType == DisplayType.Movies?RateMovieMutation:RateTVshowMutation;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 font-semibold m-10 ">
      {data?.map((displayData:DisplayData) => (
        <div className="flex flex-col gap-4 ">
        <div
          key={displayData.id}
          className="h-[700px] bg-white shadow-lg p-6  gap-4 "
        >
          <Link
            to={`/${displayType == DisplayType.Movies ? "Movies" : "TVShows"}/${
              displayData.id
            }`}

            
          >
            <div className=" h-[300px] object-cover overflow-hidden">
              <img
                className="  "
                src={`https://image.tmdb.org/t/p/w500${displayData.poster_path}`}
                alt="Poster"
              />
            </div>
            </Link>
         
          <div className="mt-5 mb-5 text-lg">
            Title: <span className="text-stone-700 font-normal">{displayType === DisplayType.Movies
              ? displayData.title
              : displayData.name}{" "}
              </span>
          </div>
          <div>
            Description:
            <div className="font-normal text-sm text-stone-500">
              {" "}
              <ReadMore text={displayData.overview} maxLength={200} />{" "}
            </div>{" "}
          </div>

       
          </div>
          <div> 
          <div>Rating: <span className="text-stone-600 font-medium">{parseFloat(displayData.vote_average).toFixed(1)} </span> </div>

          <div className=" py-5 ">
            {" "}
          {isRated&&<button className="bg-stone-400 px-3 text-white font-normal py-1 mb-4 rounded-md"> You have rated this {displayData.rating} </button>} 
          
          <MovieRatingInputBox
              rating={rating}
              setRating={setRating}
              rate={Rate}
              id={displayData.id}
            /> 
          </div>
          </div>
          </div>
      
      ))}
    </div>
  );
};
