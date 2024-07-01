import React from 'react';
import OrdersList from '@/components/OrdersList';

const OrdersPage: React.FC = () => {
  return (
    <div>
      <div className="text-center" style={{ backgroundColor: 'rgb(216, 59, 76)', minHeight: '4rem', padding: '20px' }}>
        <h2 className="d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: '', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center', textTransform: 'uppercase' }}>
          Meus Pedidos
        </h2>
      </div>
      <OrdersList />
    </div>
  );
};

export default OrdersPage;
