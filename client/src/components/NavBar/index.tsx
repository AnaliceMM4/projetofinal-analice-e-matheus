import { Link, NavLink } from "react-router-dom";
//import logo from "@/assets/utfpr-logo.png";
import logo from '@/images/logo.png'; // Caminho para o logo na pasta images
import AuthService from "@/service/AuthService";
import './Navbar.css';

export function NavBar() {
  const onClickLogout = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <div className="shadow-sm mb-2 nav">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="logo" alt="Overclock" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item ">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link "

                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/categories"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Categorias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Produtos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/products-v2"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Produtos V2
              </NavLink>
            </li>

            <li className="nav-item">
              <button className="btn btn-light" onClick={onClickLogout}>
                &times; Sair
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}