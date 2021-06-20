
import { useState, useEffect } from "react";



const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);


  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }

  const showThumbnails = () => {
    setTimeout(() => setLoadingData(false), 5000);
    return loadingData ? loopComp((<Skeleton />), 10) : loopComp((<Thumbnail />), 10)
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


const Thumbnail = () => {
  return (
    <div className="media-row__thumbnail">
      <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" />
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