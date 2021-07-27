import { useStateContext } from '../../HBOProvider';
import { useEffect } from 'react';


const SearchModal = (props) => {
  const globalState = useStateContext();


  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  };


  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [globalState.searchOpen])


  return (
    <div
      className={`search-modal ${globalState.searchOpen ? 'search-modal--active' : ''}`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="search for a title"
        />
        <div
          className="search-modal__close-btn"
          onClick={() => globalState.setSearchOpenAction(!globalState.searchOpen)}
        >
          <i className="fas fa-times" />
        </div>
      </div>


      <h3 className="search-modal__title">
        Popular Searches
      </h3>


      <div className="search-modal__thumbnails">
        <div className="search-modal__thumbnail">
          <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" />
          <div className="search-modal__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal;