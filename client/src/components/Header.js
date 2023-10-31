import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src="/logo.png" alt="Spooky Books Logo" className="logo-image" />{' '}
        <h1 className="app-title">Spooky Books</h1> {/* Added class name */}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-book" className="nav-link">
              Add a Book
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
