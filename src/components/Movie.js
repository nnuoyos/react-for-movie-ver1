import PropTypes from "prop-types";
import {Link} from "react-router-dom";
/* import {Container, Row, Col} from 'react-bootstrap' */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Movie.css";

function Movie({id,coverImage, title}){
    return (
    <div className="movie">
      <img className="movie_img" src={coverImage} alt={title}/>
      <div className="movie_img_box">
        <div className="movie_img_wrap">
          {/* <p className="movie_runtime">{runtime}min</p> */}
        </div>
      </div>
        <h2 className="movie_title"><Link to={`/movie/${id}`}>{title}</Link></h2>
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