import Heading from './HeaderComps/Heading';
import Links from './HeaderComps/Links';
import UserName from './HeaderComps/UserName';

import './style/NavBar.sass'

function NavBar() {
  return (
    <nav>
      <div className="left-content">
        <div className="heading-container">
          <Heading heading="portfolio" />
        </div>
        <div className="links-container">
          <Links />
        </div>
      </div>

      <div className="right-content">
        <div className="user-name-container">
          <UserName username="Vanshaj Kaushal" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;