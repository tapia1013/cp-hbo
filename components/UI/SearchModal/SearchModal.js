import { useStateContext } from '../../HBOProvider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';


const SearchModal = (props) => {
  const globalState = useStateContext();
  // state
  const [popData, setPopData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [text, setText] = useState('')
  const router = useRouter();



  useEffect(async () => {
    try {
      let popData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=c1b0e735ad3ff470f44fa29c9a1e6189&language=en-US`
      )

      setPopData(popData.data.results.filter((item, i) => i < 14))

      setShowResults(false)
      console.log('popdata', popData.data.results);

    } catch (error) {
      console.log(error);
    }
  }, [])


  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [globalState.searchOpen])




  const handleInput = async (e) => {
    try {
      setText(e.target.value)

      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=c1b0e735ad3ff470f44fa29c9a1e6189&language=en-US`
      );

      setSearchData(searchData.data.results.filter((item, i) => item.media_type === 'tv' || item.media_type === 'movie'))

      setShowResults(true)

    } catch (error) {
      console.log(error);
    }
  }


  // so it can redirect to movie if we clicked in on search
  const clickedThumbnail = (type, id, media_type) => {
    if (type === 'popular') {
      router.push(`/movie/${id}`)
      globalState.setSearchOpenAction(!globalState.searchOpen)
    }

    if (type === 'search') {
      router.push(`/${media_type}/${id}`)
      globalState.setSearchOpenAction(!globalState.searchOpen)
    }

  }


  return (
    <div
      className={`search-modal ${globalState.searchOpen ? 'search-modal--active' : ''}`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="search for a title"
          onChange={handleInput}
          value={text}
        />
        <div
          className="search-modal__close-btn"
          onClick={() => globalState.setSearchOpenAction(!globalState.searchOpen)}
        >
          <i className="fas fa-times" />
        </div>
      </div>


      <h3 className="search-modal__title">
        {
          showResults && searchData.length >= 1
            ? `Search Results for ${text}`
            : `Popular Searches`
        }
      </h3>


      <div className="search-modal__thumbnails">
        {
          showResults && searchData.length >= 1 ? (<SearchResults clickedThumbnail={clickedThumbnail} searchData={searchData} />) : (<PopularResults clickedThumbnail={clickedThumbnail} popData={popData} />)
        }
      </div>
    </div>
  )
}



//its own component
const PopularResults = (props) => {

  return props.popData.map((item, index) => {
    return (
      <div
        key={index}
        className="search-modal__thumbnail"
        onClick={() => props.clickedThumbnail('popular', item.id)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
        />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    )
  })
}




const SearchResults = (props) => {

  return props.searchData.map((item, index) => {
    return (
      <div
        key={index}
        className="search-modal__thumbnail"
        onClick={() => props.clickedThumbnail('popular', item.id, item.media_type)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
        />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    )
  })
}





export default SearchModal;











