import './Header.css';

const Header = () => {
  return (
    <header className="header-cinephile">
      {/* 1. LADO IZQUIERDO: El Logo */}
      <div className="header-logo">
        <h1>CINEPHILE</h1>
      </div>

      {/* 2. CENTRO: El Menú (que en móvil se irá abajo) */}
      <nav className="header-nav">
        <ul className="nav-list">
          <li><a href="#movies" className="nav-link active">Movies</a></li>
          <li><a href="#pricing" className="nav-link">Pricing</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* 3. LADO DERECHO: Botones (que desaparecen en móvil) */}
      <div className="header-actions">
        <button className="btn-signin">Sign In</button>
        <button className="btn-getaccess">Get Access</button>
      </div>
    </header>
  );
};

export default Header;