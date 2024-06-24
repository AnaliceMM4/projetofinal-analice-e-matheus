// CarrinhoNavBarComponent.tsx
import React, { useState, useEffect } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { IProduct } from '@/commons/interfaces';

const CarrinhoNavBarComponent: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [apiSuccess, setApiSuccess] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setPendingApiCall(true);

    const storedProducts = localStorage.getItem('cart');
    const storedQuantities = localStorage.getItem('quantities');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
    if (storedQuantities) {
      setQuantities(JSON.parse(storedQuantities));
    }
  }


  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;  // Evitar quantidade negativa
    const updatedQuantities = { ...quantities, [id]: quantity };
    setQuantities(updatedQuantities);
    localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
  };

  const handleRemove = (id: number) => {
    const updatedProducts = products.filter(product => product.id !== id);
    const { [id]: _, ...updatedQuantities } = quantities;
    setProducts(updatedProducts);
    setQuantities(updatedQuantities);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
  };

  return (
    <MDBDropdown>
      <MDBDropdownToggle tag='button' className='btn text-white'>
        <FaShoppingCart />
      </MDBDropdownToggle>
      <MDBDropdownMenu style={{ minWidth: '500px' }}>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <MDBDropdownItem key={product.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={product.urlImage}
                    alt={product.name}
                    style={{ width: '50px', height: '50px', marginRight: '15px' }}
                  />
                  <div>
                    <div>{product.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                      <span>Quantidade: </span>
                      <input
                        type="number"
                        value={quantities[product.id] || 1}
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        style={{ width: '60px', marginLeft: '10px' }}
                        min="1"
                      />
                      <FaTrashAlt
                        onClick={() => handleRemove(product.id)}
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                      />
                    </div>
                  </div>
                </div>
              </MDBDropdownItem>
            ))}
            <MDBDropdownItem>
              <Link to="/carrinhoDetailsPage">Ver detalhes do carrinho</Link>
            </MDBDropdownItem>
          </>
        ) : (
          <MDBDropdownItem>Nenhum produto no carrinho</MDBDropdownItem>
        )}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default CarrinhoNavBarComponent;
