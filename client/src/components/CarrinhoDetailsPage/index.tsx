// CarrinhoDetailsPage.tsx
import { IProduct } from '@/commons/interfaces';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CarrinhoDetailsPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
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
    if (quantity < 1) return; // Evitar quantidade negativa
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
    <div>
      <h1>Detalhes do Carrinho</h1>
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
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
          ))}
        </div>
      ) : (
        <div>Nenhum produto no carrinho</div>
      )}
    </div>
  );
};

export default CarrinhoDetailsPage;
