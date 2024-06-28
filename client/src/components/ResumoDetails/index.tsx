import { IProduct } from '@/commons/interfaces';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ResumoDetailsProps {
  products: IProduct[];
  quantities: { [key: number]: number };
}

const ResumoDetails: React.FC<ResumoDetailsProps> = ({ products, quantities }) => {
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;
      return total + product.price * quantity;
    }, 0);
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
                    <div>
                      <h5>{product.name}</h5>
                    </div>
                    <div>
                      <span>Preço: R$ {product.price.toFixed(2)}</span>
                      <br />
                      <span>Quantidade: {quantities[product.id] || 1}</span>
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
            <a href="/resumoPage" className="btn btn-primary w-100">Finalizar Compra</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumoDetails;
