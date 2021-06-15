
const SideNav = (props) => {
  return (
    <div className="side-nav">
      <div className="side-nav__close-btn">
        <i className="fas fa-times" />
      </div>
      <ul className="side-nav__main">
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="">
            Series
          </a>
        </li>
        <li>
          <a href="/" className="">
            Movies
          </a>
        </li>
        <li>
          <a href="/" className="">
            Originals
          </a>
        </li>
        <li>
          <a href="/" className="">
            Just Added
          </a>
        </li>
        <li>
          <a href="/" className="">
            Last Chance
          </a>
        </li>
        <li>
          <a href="/" className="">
            Coming Soon
          </a>
        </li>
        <li>
          <a href="/" className="">
            Trending Now
          </a>
        </li>
      </ul>
      <div className="side-nav__divider" />
      <ul className="side-nav__main">
        <li>
          <a href="/">Action</a>
        </li>
        <li>
          <a href="/">Animation</a>
        </li>
        <li>
          <a href="/">Comedy</a>
        </li>
        <li>
          <a href="/">Crime</a>
        </li>
        <li>
          <a href="/">Documentaries</a>
        </li>
        <li>
          <a href="/">Drama</a>
        </li>
        <li>
          <a href="/">Fantasy & Sci-fi</a>
        </li>
        <li>
          <a href="/">Horro</a>
        </li>
        <li>
          <a href="/">International</a>
        </li>
        <li>
          <a href="/">Kids & Family</a>
        </li>
        <li>
          <a href="/">Latino</a>
        </li>
        <li>
          <a href="/">Music</a>
        </li>
        <li>
          <a href="/">News/Talk</a>
        </li>
        <li>
          <a href="/">Reality</a>
        </li>
        <li>
          <a href="/">Romance</a>
        </li>
        <li>
          <a href="/">Shorts</a>
        </li>
        <li>
          <a href="/">Sports</a>
        </li>
        <li>
          <a href="/">Suspense</a>
        </li>
      </ul>
    </div>
  )
}

export default SideNav;