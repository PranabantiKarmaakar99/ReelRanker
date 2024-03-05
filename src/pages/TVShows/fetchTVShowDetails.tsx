export const fetchTVShowDetails = async(tvID:string) => {

    const res = await fetch(`https://api.themoviedb.org/3/tv/${tvID}?language=en-US`,
    {headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGZjNWMxYTY0OTc5OTYwMmQwN2RkMzk2M2E2NzRhZSIsInN1YiI6IjY1ZGQxODFmYzkyYzVkMDE3YzQ2ZTg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RY3bZ9p9qkNjAx0kfyloJQuLvQsdCmdq70jG9HSSStM"
    }})

console.log(res)
return res.json();
}
