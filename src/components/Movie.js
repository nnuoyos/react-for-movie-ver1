import PropTypes from "prop-types";
import {Link} from "react-router-dom";
/* import {Container, Row, Col} from 'react-bootstrap' */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Movie.css";

function Movie({id,coverImage, title, summary, genres, year,runtime,rating}){
    return (
    <div className="movie">
      <img className="movie_img" src={coverImage} alt={title}/>
      <div className="movie_img_box">
        <div className="movie_img_wrap">
          {/* <p className="movie_runtime">{runtime}min</p> */}
        </div>
      </div>
        <h2 className="movie_title"><Link to={`/movie/${id}`}>{title}</Link></h2>
        {/* <h3 className="movie_year">{year}</h3> */}
        {/* <p className="movie_summary">{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p> */}
      {/* <ul className="movie_genres">
        {genres.map((g) => <li key={g}>{g}</li>)}
      </ul> */}
    </div>);
}
//Movie 컴포넌트의 PropTypes 설정
Movie.propTypes = {
    //coverImage는 string의 PropTypes를 가져야하고 필수이다(required)
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired 
    //genres: string을 가진 array
}
export default Movie;