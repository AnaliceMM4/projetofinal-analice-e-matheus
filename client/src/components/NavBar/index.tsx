import { Link, NavLink } from "react-router-dom";
//import logo from "@/assets/utfpr-logo.png";
import logo from '@/images/logo.png'; // Caminho para o logo na pasta images
import AuthService from "@/service/AuthService";
import './Navbar.css';
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import SidebarComponent from "../MenuLateral";
import CarrinhoNavBarComponent from "../CarrinhoNavBar";
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from "mdb-react-ui-kit";

export function NavBar() {

  const isAuthenticated = AuthService.isAuthenticated(); // Verifica se o usuário está autenticado


  const [currentUser, setCurrentUser] = useState<string | null>(null); // Estado para armazenar o nome do usuário atual
  useEffect(() => {
    // Carregar o nome do usuário ao montar o componente
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);;
  
  const onClickLogout = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <nav className="navbar w-auto">
      <div className="container-fluid justify-content-between">
        {/* Left */}
        <div className="d-flex align-items-center">
          {/* <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#"> */}
            <SidebarComponent />
          <Link to="/" >
            <img src={logo} className="logo" alt="Overclock" />
          </Link>
        </div>
  
        {/* Center elements */}
        <ul className="navbar-nav flex-row d-none d-md-flex">
         
        </ul>

        {/* Right elements */}
        <ul className="navbar-nav flex-row me-4">
        <li className="nav-item">
            <MDBDropdown>
              <MDBDropdownToggle tag='button' className='btn text-white'>
                <FaUserAlt className="text-white" style={{ fontSize: '1.5rem' }} />
                <span className="ms-1">{currentUser}</span>
                <span className="ms-1">{AuthService.getCurrentUser()}</span>

                <span>{}</span>

              </MDBDropdownToggle>
              <MDBDropdownMenu>
              <MDBDropdownItem>
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <NavLink to="/signup" className="nav-link">Cadastro</NavLink>
                </MDBDropdownItem>
                <MDBDropdownItem divider />
                
                <MDBDropdownItem  className="btn btn-light" onClick={onClickLogout} style={{ padding: '.3rem' }}>
                &times; Sair
              
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </li>

          {/* <li className="nav-item text-white">
                          <FaUserAlt className="text-white" style={{ fontSize: '1.5rem'}} />

            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
            </NavLink>
          </li> */}
          <li className="nav-item">
            <CarrinhoNavBarComponent updateCartItemsCount={function (count: number): void {
              throw new Error("Function not implemented.");
            } } />
          </li>
        </ul>
      </div>
    </nav>
  );
}