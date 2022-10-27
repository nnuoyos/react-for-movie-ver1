import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)).json());
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(()=>{
      getMovies()
    },[]);
    console.log(movies);
    return <div className="container">
      <div className="header">
        <h1><Link to="/">HOME</Link></h1>
      </div>
      {loading ? (<div className="loader"><h1>loading...</h1></div>) : (
      <div className="movies">{movies.map((movie) => (
      <Movie
      key={movie.id}
      id={movie.id}
      coverImage={movie.medium_cover_image} 
      title={movie.title}
      year={movie.year}
      summary={movie.summary}
      rating={movie.rating}
      runtime={movie.runtime} 
      genres={movie.genres}/>
      ))}
        </div>)}
    </div>;
}

export default Home;