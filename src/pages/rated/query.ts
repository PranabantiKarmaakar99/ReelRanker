export const RatedMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=80fc5c1a649799602d07dd3963a674ae`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGZjNWMxYTY0OTc5OTYwMmQwN2RkMzk2M2E2NzRhZSIsInN1YiI6IjY1ZGQxODFmYzkyYzVkMDE3YzQ2ZTg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RY3bZ9p9qkNjAx0kfyloJQuLvQsdCmdq70jG9HSSStM",
      },
    });
  
    console.log(res);
    return res.json();
  };
  
  export const RatedTVSeries = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=80fc5c1a649799602d07dd3963a674ae`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGZjNWMxYTY0OTc5OTYwMmQwN2RkMzk2M2E2NzRhZSIsInN1YiI6IjY1ZGQxODFmYzkyYzVkMDE3YzQ2ZTg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RY3bZ9p9qkNjAx0kfyloJQuLvQsdCmdq70jG9HSSStM",
      },
    });
    console.log(res);
    return res.json();
  };