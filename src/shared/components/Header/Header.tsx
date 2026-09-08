import { NavLink } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";

import Button from "@/shared/components/Button/Button";
import Container from "@/shared/components/Container/Container";

function Header() {
  const { isAuthenticated, logout, user } = useAuth();

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

            {isAuthenticated && (
              <NavLink to="/dashboard" className={getLinkClass}>
                Dashboard
              </NavLink>
            )}

            {!isAuthenticated && (
              <>
                <NavLink to="/login" className={getLinkClass}>
                  Login
                </NavLink>

                <NavLink to="/register" className={getLinkClass}>
                  Register
                </NavLink>
              </>
            )}

            {isAuthenticated && (
              <div className="header__user">
                <span>{user?.name}</span>
                <Button variant="secondary" onClick={logout}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;