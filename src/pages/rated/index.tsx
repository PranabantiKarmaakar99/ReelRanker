import { ColumnDisplay } from "../home/columnDisplay";
import { DisplayType } from "../home";
import { useState } from "react";
import { RatedMovies, RatedTVSeries } from "./query";
import { useQuery } from "@tanstack/react-query";

export const Rated = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );
  // const []

  const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: RatedMovies,
  });
  const { data: ratedTVSeries, isLoading: isLoadingRatedTVShows } = useQuery({
    queryKey: ["ratedTVSeries"],
    queryFn: RatedTVSeries,
  });

  return (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center mt-48 md:mt-32">
        <div className="font-semibold text-lg  ">
          <button
            className={`px-4 py-2 shadow-md rounded-md ${
              displayType == DisplayType.Movies
                ? "bg-gray-500 && text-white"
                : ""
            }`}
            onClick={() => {
              setDisplayType(DisplayType.Movies);
            }}
          >
            Movies
          </button>
          <button
            className={`px-4 py-2 shadow-md rounded-md ${
              displayType == DisplayType.TVShows
                ? "bg-gray-500 && text-white"
                : ""
            }`}
            onClick={() => {
              setDisplayType(DisplayType.TVShows);
            }}
          >
            {" "}
            TV Shows
          </button>
        </div>

        {isLoadingRatedMovies || isLoadingRatedTVShows ? (
          <div>isLoading</div>
        ) : displayType == DisplayType.Movies ? (
          <div>
            <h1 className="flex justify-center items-center font-semibold text-xl mt-10 text-gray-500"> Your Rated Movies</h1>
          <ColumnDisplay
            data={ratedMovies.results}
            displayType={DisplayType.Movies}
            isRated
            
          />
          </div>
        ) : (
          <div>
              <h1 className="flex justify-center items-center font-semibold text-xl mt-10 text-gray-500"> Your TV Shows</h1>
          <ColumnDisplay
            data={ratedTVSeries.results}
            displayType={DisplayType.TVShows}
            isRated
          />
           </div>
        )}
      </div>
    </div>
  );
};
