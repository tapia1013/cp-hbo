import Account from '../Account/Account';
import SearchModal from '../SearchModal/SearchModal';
import { useStateContext } from '../../HBOProvider';

// OPEN SEARCH MODAL 

const Header = (props) => {
  const globalState = useStateContext();


  return (
    <header className={`top-header ${globalState.accountModalOpen || globalState.sideNavOpen ? 'top-header--menu-open' : ''}`}>
      <div className="top-header__left-side">
        <div
          className="top-header__menu-btn"
          onClick={() => globalState.setSideNavOpenAction(true)}
        >
          <i className="fas fa-bars" />
        </div>
        <div
          className="top-header__search-btn"
          onClick={() => globalState.setSearchOpenAction(true)}
        >
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="top-header__logo"></div>
      <div
        className="top-header__account"
        onClick={
          () => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
        }
      >
        <img className="top-header__user-img" src="https://pbs.twimg.com/profile_images/378800000519722378/c0fd8906bcfeac191dac58c00e6dcda8.jpeg" />
        <div className="top-header__user-name">Cookie</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  )
}

export default Header;