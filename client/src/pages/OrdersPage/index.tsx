import React from 'react';
import OrdersList from '@/components/OrdersList';

const OrdersPage: React.FC = () => {
  return (
    <div>
      <h1>Meus Pedidos</h1>
      <OrdersList/>
    </div>
  );
};

export default OrdersPage;
