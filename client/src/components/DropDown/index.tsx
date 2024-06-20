import { FaList } from "react-icons/fa6";
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


const SidebarComponent: React.FC = () => {
  const [data, setData] = useState<ICategory[]>([]);
  const [apiError, setApiError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {findAll} = CategoryService;
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

  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' onClick={toggleSidebar}>Navbar</MDBNavbarBrand>
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
        {apiError ? (
          <div className="sidebar-item">{apiError}</div>
        ) : (
          data.map(category => (
            <div key={category.id} className="sidebar-item">
              <Link to={`/categories/${category.id}`} onClick={toggleSidebar}>{category.name}</Link>
            </div>
          ))
        )}
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SidebarComponent;
