import { FaFireFlameCurved, FaList } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import './MenuLateral.css';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon
} from 'mdb-react-ui-kit';
import CategoryService from "@/service/CategoryService";
import { ICategory } from "@/commons/interfaces";
import { FaTimes, FaUser } from "react-icons/fa";
import { BsCpuFill, BsMotherboardFill } from "react-icons/bs";
import { SiPcgamingwiki } from "react-icons/si";
import { PiGameControllerFill, PiGraphicsCardFill } from "react-icons/pi";
import { RiMenu2Line } from "react-icons/ri";


const SidebarComponent: React.FC = () => {
  const [data, setData] = useState<ICategory[]>([]);
  const [apiError, setApiError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { findAll } = CategoryService;
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await findAll();
    if (response.status === 200) {
      setData(response.data);
      setApiError("");
    } else {
      setApiError("Falha ao carregar a lista de categorias");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const getCategoryIcon = (categoryId: number): JSX.Element => {
    switch (categoryId) {
      case 1:
        return <SiPcgamingwiki style={{ marginRight: '5px' }} />

      case 2:
        return <BsCpuFill style={{ marginRight: '5px' }} />;
      case 3:
        return <PiGameControllerFill style={{ marginRight: '5px' }} />;
      case 4:
        return <PiGraphicsCardFill  style={{ marginRight: '5px' }} />;
      case 5:
        return <BsMotherboardFill  style={{ marginRight: '5px' }} />;
      default:
        return <FaList style={{ marginRight: '5px' }} />; // Ícone padrão, se nenhum ID corresponder
    }
  };


  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' onClick={toggleSidebar} className="text-white fs-3"><RiMenu2Line/>
          </MDBNavbarBrand>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' onClick={toggleSidebar}>
                <MDBIcon fas icon='bars' />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      <div className="sidebar-item d-flex align-items-center mt-4" style={{ fontSize: '1.3rem' }}>
      <FaFireFlameCurved />

        <Link to={'/products'} onClick={toggleSidebar}>Todos os Produtos</Link>
      </div>
      <div className="sidebar-close mb-4" onClick={toggleSidebar}>
      <FaTimes style={{ fontSize: '1.5rem' }} />
        </div>

        {apiError ? (
          <div className="sidebar-item ">{apiError}</div>
        ) : (
          data.map(category => (
            <div key={category.id} className="sidebar-item d-flex align-items-center mt-4" style={{ fontSize: '1.3rem' }}>
              {category.id !== undefined && getCategoryIcon(category.id)} {/* Renderiza o ícone se categoryId não for undefined */}

              <Link to={`/categories/${category.id}`} onClick={toggleSidebar}>{category.name}</Link>
              {/* {category.name} */}
            </div>
          ))
        )}
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SidebarComponent;
