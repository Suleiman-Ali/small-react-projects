import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <Wrapper cls="container-fluid">
        <Link to="/" className="navbar-brand">
          Titanic Predictor
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link ">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/data" className="nav-link">
              Data
            </Link>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
}

export default Navbar;
