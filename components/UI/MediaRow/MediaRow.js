




const MediaRow = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {loopComp(
          (<div className="media-row__thumbnail">
            <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" />
            <div className="media-row__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>), 10
        )}
      </div>
    </div>
  )
}

export default MediaRow;