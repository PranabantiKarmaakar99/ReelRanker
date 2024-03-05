
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTVShowDetails } from "./fetchTVShowDetails";




const Movies = () => {
  const { id } = useParams<string>();


  if (!id) {
    return <div className="mt-20">Invalid TV Show Id</div>;
  }
  const { data, isLoading } = useQuery({
    queryKey: ["tvShow"],
    queryFn: () => fetchTVShowDetails(id),
  });

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="h-screen bg-stone-100 w-full flex justify-center items-center">
      <div className=" w-2/3 h-5/4 text-center flex mt-14 justify-center items-center bg-white shadow-lg gap-2 ">
        <div className="overflow-hidden">
          {" "}
          <img
            className="object-cover  "
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt="Poster"
          />{" "}
        </div>
        <div className="p-4 px-6  text-start w-1/2 flex flex-col gap-2 justify-center ">
          <div className="font-bold">
            Name: <span className="font-normal text-gray-600"> {data.name}</span>
          </div>
          <div className="font-bold">
            {" "}
            Is this movie for Adults?
            <span className="font-normal text-gray-600">
              {" "}
              {data.Adult ? "true" : "false"}
            </span>{" "}
          </div>
          <div className="font-bold">
            {" "}
            Created By: <span className="font-normal text-gray-600"> {data.created_by.map((creator:any)=>creator.name).join(",")}</span>{" "}
          </div>
          <div className="font-bold">
            {" "}
            Genre: <span className="font-normal text-gray-600">
              {" "}
              {data.genres.map((el: any, index: number) => (
                <span key={index}>{el.name} </span>
              ))}
            </span>{" "}
          </div>
          <div className="font-bold">
            {" "}
            IMDB Rating: <span className="font-normal text-gray-600">
              {data.imdb_id}
              
            </span>{" "}
          </div>
          <div className="font-bold">
            {" "}
           Popularity:  <span className="font-normal text-gray-600">
              {data.popularity}
              
            </span>{" "}
          </div>
          <div className="font-bold">
            {" "}
            Production:  <span className="font-normal text-gray-600">
              {data.production_companies.map((el:any)=>el.name).join(",")}
              
            </span>{" "}
          </div>
          <div className="font-bold">
            {" "}
            First Air Date:  <span className="font-normal text-gray-600">
              {data.first_air_date}
              
            </span>{" "}
          </div>
          <div className="font-bold">
            {" "}
            Networks:  <span className="font-normal text-gray-600">
              {data.networks.map((network:any)=>network.name).join(',')}
              
            </span>{" "}
          </div>
          <div className="font-bold">
            {" "}
            Episode Runtime:  <span className="font-normal text-gray-600">
              {data.episode_run_time.join(",")}
              
            </span>{" "}
          </div>
          <div className="font-bold">
            {" "}
            Number of Episodes:  <span className="font-normal text-gray-600">
              {data.number_of_episodes}
              
            </span>{" "}
          </div>

          <div className="font-bold">
            {" "}
            Number of Seasons:  <span className="font-normal text-gray-600">
              {data.number_of_seasons}
              
            </span>{" "}
          </div>

          <div className="font-bold">
            {" "}
            Seasons:  <span className="font-normal text-gray-600">
              {data.number_of_seasons}
              
            </span>{" "}
          </div>

          <div className="font-bold">
            {" "}
            Voting Average:  <span className="font-normal text-gray-600">
              {data.vote_average}
              
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
