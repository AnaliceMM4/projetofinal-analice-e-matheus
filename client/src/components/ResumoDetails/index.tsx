import { IOrder, IProduct } from '@/commons/interfaces';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import OrderService from '@/service/OrderService'; // Importe o seu serviço de pedidos

const ResumoPedidoPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [formaPagamento, setFormaPagamento] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const storedProducts = localStorage.getItem('pedido');
    if (storedProducts) {
      const { produtos, quantidades } = JSON.parse(storedProducts);
      setProducts(produtos);
      setQuantities(quantidades);
    }
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;
      return total + product.price * quantity;
    }, 0);
  };

  const handleFinalizarCompra = async () => {
    const total = calculateTotalPrice();
  
    // Construção do objeto pedido no formato esperado
    const pedido = {
      paymentTypes: formaPagamento,
      requestItens: products.map((product) => ({
        product: { id: product.id },
        quantidade: quantities[product.id] || 1,
      })),
    };
  
    try {
      const response = await OrderService.saveOrder(pedido as IOrder);
      console.log('Pedido salvo com sucesso:', response.data);
      localStorage.removeItem('pedido');
      localStorage.removeItem('cart');
      localStorage.removeItem('quantities');
      navigate('/home');
    
    } catch (error) {
      console.error('Erro ao salvar o pedido:', error);
    }
  };

  return (
    <div className="container">
      <div className="text-center my-4">
        <h1>Resumo do Pedido</h1>
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
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <span>Quantidade: {quantities[product.id]}</span>
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
            <div className="alert alert-warning text-center">Nenhum produto no pedido</div>
          )}
        </div>
        <div className="col-md-4">
          <div className="border p-3">
            <h4>Resumo do Pedido</h4>
            <p className='text-dark'>Total de itens: {Object.values(quantities).reduce((a, b) => a + b, 0)}</p>
            <p className='text-dark'>Total a pagar: R$ {calculateTotalPrice().toFixed(2)}</p>
            <div className="form-group mt-3">
              <label htmlFor="formaPagamento">Forma de Pagamento:</label>
              <select
                id="formaPagamento"
                className="form-control"
                value={formaPagamento || ''}
                onChange={(e) => setFormaPagamento(e.target.value)}
              >
                <option value="">Selecione a Forma de Pagamento</option>
                <option value="PIX">PIX</option>
                <option value="CARTAODEBITO">Cartão de Débito</option>
                <option value="CARTAOCREDITO">Cartão de Crédito</option>
              </select>

            </div>
            <button onClick={handleFinalizarCompra} className="btn btn-primary w-100 mt-3">Finalizar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumoPedidoPage;