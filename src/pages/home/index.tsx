import { useState } from 'react';

import { ColumnDisplay, Movies,TVSeries } from './columnDisplay';
import { useQuery } from '@tanstack/react-query';

export enum DisplayType {
  Movies ="Movies",
  TVShows ="TVShows",
}

const home = () => {
  const [displayType,setDisplayType] =useState<DisplayType>(DisplayType.Movies);

  const {data: Moviedata, isLoading:isLoadingMovies} =useQuery({queryKey:["movies"],queryFn: Movies});
  const {data: TVData,isLoading:isLoadingTVSeries} =useQuery({queryKey:["tvshows"],queryFn: TVSeries});
  return (
    <div className='flex flex-col gap-2 items-center mt-48 md:mt-32 justify-center font-semibold'>
      <div>
     <button  className={`px-4 py-2 text-lg  shadow-md rounded-md ${displayType == DisplayType.Movies? "bg-stone-500 && text-white" : ""}`}  onClick ={()=> {setDisplayType(DisplayType.Movies)}}>Movies</button>
     <button  className={`px-4 py-2 text-lg font-semibold shadow-md rounded-md ${displayType == DisplayType.TVShows? "bg-stone-500 && text-white" : ""}`}  onClick ={()=> {setDisplayType(DisplayType.TVShows)}}> TV Shows</button>
     </div>

     {isLoadingMovies|| isLoadingTVSeries? (
      <div> isLoading </div>):
 

     (<div className=''>
      {displayType==DisplayType.Movies?<ColumnDisplay data={Moviedata.results} displayType={DisplayType.Movies}  /> :<ColumnDisplay data={TVData.results} displayType={DisplayType.TVShows} />}
     </div>
       )}
    </div>
   
  )
}

export default home;