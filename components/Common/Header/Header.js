import { FaBars } from 'react-icons/fa';

const Header = ({ handleClick }) => {

  return (
    <header className="header-nav header__area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ">
            <div className="header__left">
              <button onClick={handleClick} className="sidebar__toggle">
                <FaBars />
              </button>
              <form action="" method="post">
                <div className="header__search">
                  <input type="search" defaultValue="Search for clients, date, invoice..." />
                  <button className="header__search__overlay">
                    <img src="/images/icons/header-menu/search-normal.svg" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <nav className="navbar navbar-expand header__navbar">
              <ul className="navbar-nav header__menu">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src="/images/icons/header-menu/Notification.svg" />
                  </a>
                </li>
                <li className="nav-item avater-profile">
                  <a className="nav-link dropdown-toggle" href="#">
                    <img src="/images/users/Img.png" />
                    <span> Clay Andrews </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
