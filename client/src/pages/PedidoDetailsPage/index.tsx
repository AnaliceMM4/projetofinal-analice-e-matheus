// PedidoDetailsPage.tsx

import React from "react";
import PedidoDetails from "@/components/PedidoDetails";

const PedidoDetailsPage: React.FC = () => {
  return (
    <div>
      <div className="text-center" style={{ backgroundColor: 'rgb(216, 59, 76)', minHeight: '4rem', padding: '20px' }}>
        <h2 className="d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: '', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center', textTransform: 'uppercase' }}>
        Página de Detalhes do Pedido
        </h2>
      </div>
      <PedidoDetails />
    </div>
  );
};

export default PedidoDetailsPage;
