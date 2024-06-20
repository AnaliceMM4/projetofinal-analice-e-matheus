import { Link, NavLink } from "react-router-dom";
//import logo from "@/assets/utfpr-logo.png";
import logo from '@/images/logo.png'; // Caminho para o logo na pasta images
import AuthService from "@/service/AuthService";
import './Navbar.css';
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import DropdownComponent from "../DropDown";
import SidebarComponent from "../DropDown";
export function NavBar() {
  const onClickLogout = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <div className="shadow-sm nav">
      <nav className="navbar navbar-white navbar-expand " style={{ height: '100px' }}>
        <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
            <li className="nav-item">
                <SidebarComponent />
            </li>
          <Link to="/" className="navbar-brand">
            <img src={logo} className="logo" alt="Overclock" />
          </Link>
          <li>
            <div className="input-group nav-item" style={{ width: '500px' }}>
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" className="btn btn-danger" ><FaSearch /></button>
            </div>
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
          <li className="nav-item text-white">
            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
             <FaUserAlt className="text-white" />
            </NavLink>
            {/* <button className="btn btn-light" onClick={onClickLogout}>
                &times; Sair
              </button> */}
          </li>

          <li className="nav-item">
            <button className="nav-link">
              <FaShoppingCart className="text-white" />
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
}