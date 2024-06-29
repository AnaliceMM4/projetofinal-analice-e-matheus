import React, { useEffect, useState } from "react";
import OrderService from "@/service/OrderService";
import { IOrder } from "@/commons/interfaces";
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem } from "mdbreact";

const OrdersComponent: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await OrderService.findRequestsByUser();
        if (response && response.data) {
          const ordersData = response.data.map((order: IOrder) => ({
            ...order,
            data: new Date(order.data), // Converte a string para Date
          }));
          setOrders(ordersData);
        } else {
          console.error("Erro ao buscar os pedidos:", response);
        }
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
      }
    };

   
  }, []);

  return (
    <MDBContainer className="my-5">
      <h2 className="my-4 text-center">Meus Pedidos</h2>
      <MDBListGroup>
        {orders.map((order) => (
          <MDBCard key={order.id} className="mb-3">
            <MDBCardBody>
              <MDBCardTitle className="font-weight-bold">
                Pedido ID: {order.id}
              </MDBCardTitle>
              <MDBCardText>
                <strong>Data:</strong> {order.data.toLocaleString()} <br />
                <strong>Tipos de Pagamento:</strong> {order.paymentTypes}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBListGroup>
    </MDBContainer>
  );
};

export default OrdersComponent;
