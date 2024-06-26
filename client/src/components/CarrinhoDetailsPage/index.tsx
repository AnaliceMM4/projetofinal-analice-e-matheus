import { IProduct } from '@/commons/interfaces';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    if (quantity < 1){
      handleRemove(id);
    }else{
      const updatedQuantities = { ...quantities, [id]: quantity };
      setQuantities(updatedQuantities);
      localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
    }
   
  };

  const handleRemove = (id: number) => {
    const updatedProducts = products.filter(product => product.id !== id);
    const { [id]: _, ...updatedQuantities } = quantities;
    setProducts(updatedProducts);
    setQuantities(updatedQuantities);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
  };

  const handleIncreaseQuantity = (id: number) => {
    const currentQuantity = quantities[id] || 1;
    handleQuantityChange(id, currentQuantity + 1);
  };

  const handleDecreaseQuantity = (id: number) => {
    const currentQuantity = quantities[id] || 1;
    if (currentQuantity > 1) {
      handleQuantityChange(id, currentQuantity - 1);
    }
  };


  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;
      return total + product.price * quantity;
    }, 0);
  };

  return (
    <div className="container">
      <div className="text-center my-4">
        <h1>Detalhes do Carrinho</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {products.length > 0 ? (
            <div className="list-group">
              {products.map((product) => (
                <div className="list-group-item d-flex align-items-center" key={product.id}>
                  <img className="border" src={product.urlImage} style={{ width: '100px', height: '100px', marginRight: '15px' }} />
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex justify-content-between">
                      <h5>{product.name}</h5>
                      <FaTrashAlt onClick={() => handleRemove(product.id)} style={{ cursor: 'pointer', color: 'red' }} />
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <span>Quantidade:</span>
                      <FaMinus
                        onClick={() => handleDecreaseQuantity(product.id)}
                        style={{ cursor: 'pointer', marginLeft: '10px', marginRight: '10px' }}
                      />
                      <input
                        type="number"
                        value={quantities[product.id] || 1}
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        className="form-control text-center"
                        style={{ width: '60px' }}
                        min="1"
                      />
                      <FaPlus
                        onClick={() => handleIncreaseQuantity(product.id)}
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                      />
                    </div>
                    <div className="mt-2">
                      <span>Preço: R$ {product.price.toFixed(2)}</span>
                      <br />
                      <span>Total: R$ {(product.price * (quantities[product.id] || 1)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-warning text-center">Nenhum produto no carrinho</div>
          )}
        </div>
        <div className="col-md-4">
          <div className="border p-3">
            <h4>Resumo do Pedido</h4>
            <p className='text-dark'>Total de itens: {Object.values(quantities).reduce((a, b) => a + b, 0)}</p>
            <p className='text-dark'>Total a pagar: R$ {calculateTotalPrice().toFixed(2)}</p>
            <a href="#" className="btn btn-primary w-100">Finalizar Compra</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrinhoDetailsPage;