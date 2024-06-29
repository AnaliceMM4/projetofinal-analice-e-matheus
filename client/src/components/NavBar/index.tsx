import { Link, NavLink } from "react-router-dom";
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



  const onClickLogout = () => {
    AuthService.logout();
    window.location.reload();
  };


  return (
    <nav className="navbar w-auto">
      <div className="container-fluid justify-content-between">
        {/* Left */}
        <div className="d-flex align-items-center">
          <SidebarComponent />
          <Link to="/" >
            <img src={logo} className="logo" alt="Overclock" />
          </Link>
        </div>

        {/* Center elements */}
        <ul className="navbar-nav flex-row d-none d-md-flex"></ul>

        {/* Right elements */}
        <ul className="navbar-nav flex-row me-4">
          <li className="nav-item">
            <MDBDropdown>
              <MDBDropdownToggle tag='button' className='btn text-white'>
                <FaUserAlt className="text-white" style={{ fontSize: '1.5rem' }} />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                {isAuthenticated ? (
                  <>
                    <MDBDropdownItem>
                      <NavLink to="/ordersPage" className="nav-link">Listar Pedidos</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <NavLink to="/settings" className="nav-link">Configurações</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem className="btn btn-light" onClick={onClickLogout} style={{ padding: '.3rem' }}>
                      &times; Sair
                    </MDBDropdownItem>
                  </>
                ) : (
                  <>
                    <MDBDropdownItem>
                      <NavLink to="/login" className="nav-link">Login</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <NavLink to="/signup" className="nav-link">Cadastro</NavLink>
                    </MDBDropdownItem>
                  </>
                )}
              </MDBDropdownMenu>
            </MDBDropdown>
          </li>
          <li className="nav-item">
            <CarrinhoNavBarComponent updateCartItemsCount={function (count: number): void {
              throw new Error("Function not implemented.");
            }} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
