
import axios from "axios";
import { useState, useEffect } from "react";



const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);

  // let movies = [];


  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2021&api_key=c1b0e735ad3ff470f44fa29c9a1e6189&language=en-US')
      .then(function (response) {
        setMoviesData(response.data.results)
        setLoadingData(false);


        console.log('Success response for ' + props.title);
        console.log(response);
      })
      .catch(function (error) {
        console.log('Error response for ' + props.title);
        console.log(error);
      })
      .then(function () {

      })
  }, [])


  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }

  const showThumbnails = () => {

    return loadingData
      ? loopComp((<Skeleton />), 10)
      : movies.map((movie) => {
        return <Thumbnail movieData={movie} />
      })
  }

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">

        {showThumbnails()}

        {/*{loopComp(
          (<Thumbnail />), 10
        )}*/}

      </div>
    </div>
  )
}


const Thumbnail = (props) => {
  return (
    <div className="media-row__thumbnail">
      <img src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`} />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  )
}


const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  )
}







export default MediaRow;