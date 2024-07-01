// PedidoDetailsPage.tsx

import React from "react";
import PedidoDetails from "@/components/PedidoDetails";

const PedidoDetailsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center my-5">Página de Detalhes do Pedido</h1>
      <PedidoDetails />
    </div>
  );
};

export default PedidoDetailsPage;
