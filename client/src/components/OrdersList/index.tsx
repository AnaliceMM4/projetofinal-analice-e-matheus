import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importe o Link do React Router DOM
import OrderService from "@/service/OrderService";
import { IOrder } from "@/commons/interfaces";
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup } from "mdbreact";

const OrdersComponent: React.FC = () => {
  const [data, setData] = useState<IOrder[]>([]);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await OrderService.findRequestsByUser();
      console.log("API Response:", response);

      if (response && response.status === 200) {
        setData(response.data);
        setApiError("");
      } else {
        setApiError(`Falha ao carregar a lista de pedidos: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Erro ao buscar os pedidos:", error);
      setApiError("Erro ao carregar a lista de pedidos. Tente novamente mais tarde.");
    }
  };


  return (
    <MDBContainer className="my-5">
      <h2 className="my-4 text-center">Meus Pedidos</h2>
      {apiError && <div className="alert alert-danger">{apiError}</div>}
      <MDBListGroup>
        {data.map((order: IOrder) => (
          <Link key={order.id} to={`/pedidoDetailsPage/${order.id}`} className="text-decoration-none">
            <MDBCard className="mb-3">
              <MDBCardBody>
                <MDBCardTitle className="font-weight-bold">
                  Pedido ID: {order.id}
                </MDBCardTitle>
                <MDBCardText className="text-dark">
                  <strong>Data:</strong> {order.data} <br />
                  <strong>Tipos de Pagamento:</strong> {order.paymentTypes}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </Link>
        ))}
      </MDBListGroup>
    </MDBContainer>
  );
};

export default OrdersComponent;
