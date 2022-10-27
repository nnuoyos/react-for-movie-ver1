import { useCallback, useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import Movie from "../components/Movie";
function Detail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const getMovie = useCallback(async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setLoading(false);
            setMovie(json.data.movie);
            setGenres(json.data.movie.genres);
            console.log(json);
    },[id]);

    useEffect(()=>{
        if(id !== "" && id.length > 1){
            getMovie();
        }
    },[getMovie, id]);
    /* console.log(id); */
    return <div>
        <div className="header">
        <h1><Link to="/">HOME</Link></h1>
        </div>
        {loading ? (<h1>loading...</h1>) : 
        (<div className="detail_container">
                <img className="background_img" src={movie.background_image_original}
                alt={movie.background_image_original}>
                </img>
                <div className="contents_wrap">
                    <div className="movie_content">
                        <h1>{movie.title}</h1>
                        <img className="detail_img_medium" src={movie.medium_cover_image}
                        alt={movie.medium_cover_image}></img>
                        <div className="content_text">
                            <h4>영화 줄거리 {movie.synopsis}</h4>
                            <div>
                                <div className="movie_description">{movie.description_full}</div>
                                <span>개봉 {movie.year}년</span><br/> 
                                <span>런타임 {movie.runtime}분</span>
                                <div>평점 {movie.rating}</div>
                                <div className="movie_genres">장르 {genres.map((g)=>(<span key={g}>{g} </span>))}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}
    </div>;
   
}

export default Detail;