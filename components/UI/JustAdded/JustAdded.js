
const JustAdded = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }

  return (
    <div className="just-added">
      <h3 className="just-added__title">Just Added</h3>
      <div className="just-added__thumbnails">
        {loopComp(
          (<div className="just-added__thumbnail">
            <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" />
            <div className="just-added__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>), 10
        )}
      </div>
    </div>
  )
}

export default JustAdded;