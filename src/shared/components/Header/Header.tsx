import { NavLink } from "react-router-dom";

import Container from "@/shared/components/Container/Container";

function Header() {
  function getLinkClass({ isActive }: { isActive: boolean }) {
    return isActive ? "header__link header__link--active" : "header__link";
  }

  return (
    <header className="header">
      <Container>
        <nav className="header__nav">
          <NavLink to="/" className="header__logo">
            SmartStart
          </NavLink>

          <div className="header__links">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>

            <NavLink to="/login" className={getLinkClass}>
              Login
            </NavLink>

            <NavLink to="/register" className={getLinkClass}>
              Register
            </NavLink>

            <NavLink to="/dashboard" className={getLinkClass}>
              Dashboard
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;