// PedidoDetails.tsx

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderItensService from "@/service/OrderItensService";
import { IOrderItens, IProduct } from "@/commons/interfaces";
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";
import ProductService from "@/service/ProductService";

const PedidoDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [orderItems, setOrderItems] = useState<IOrderItens[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [apiError, setApiError] = useState("");
    const [totalPrice, setTotalPrice] = useState<number>(0);


    const { findOne } = ProductService;

    useEffect(() => {
        loadOrderItems();
    }, []);

    useEffect(() => {
        // Recalcula o preço total sempre que a lista de itens do pedido mudar
        calculateTotalPrice();
    }, [orderItems]);

    const loadOrderItems = async () => {
        try {
            const response = await OrderItensService.listOrderItems(parseInt(id, 10));
            console.log("API Response:", response);

            if (response && response.status === 200) {
                setOrderItems(response.data);
                setApiError("");
            } else {
                setApiError(`Falha ao carregar os detalhes do pedido: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error("Erro ao buscar os detalhes do pedido:", error);
            setApiError("Erro ao carregar os detalhes do pedido. Tente novamente mais tarde.");
        }
    };


    const calculateTotalPrice = async () => {
        let total = 0;

        orderItems.forEach((item) => {
            total += item.preco;

        });
        setTotalPrice(total);

    };


    return (
        <MDBContainer className="my-5">
            <h2 className="my-4 text-center">Pedido ID: {id} </h2>
            <div className="d-flex justify-content-between">
                <div>
                    {apiError && <div className="alert alert-danger">{apiError}</div>}
                    {orderItems.map((item: IOrderItens) => (
                        <MDBCard key={item.id} className="mb-3">
                            <MDBCardBody>
                                <Link to={`/products/${item.product.id}`} className="d-flex align-items-center">
                                    <img src={item.product.urlImage} className="card-img-top me-3" alt={item.product.name}
                                        style={{ maxWidth: "5rem", maxHeight: "5rem" }} />
                                    <MDBCardTitle className="font-weight-bold mb-0">{item.product.name}</MDBCardTitle>

                                </Link>
                                <MDBCardText className="text-dark">

                                    <strong>Descrição:</strong> {item.product.description} <br />
                                    <strong>Quantidade:</strong> {item.quantidade} <br />
                                    {/* <strong>Preço Unitário:</strong> R$ {item.preco.toFixed(2)} <br /> */}
                                    <strong>Preço Unitário:</strong> R$ {(item.preco / item.quantidade).toFixed(2)} <br />

                                    <strong>Preço Total:</strong> R$ {item.preco.toFixed(2)} <br />
                                </MDBCardText>

                            </MDBCardBody>
                        </MDBCard>
                    ))}
                </div>
                <MDBCard className="border " style={{ width: "300px" }}>
                    <MDBCardBody>
                        <MDBCardTitle className="text-center font-weight-bold">Total do Pedido</MDBCardTitle>
                        <MDBCardText className="text-center text-dark">
                            <strong>R$ {totalPrice.toFixed(2)}</strong>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </MDBContainer>
    );
};

export default PedidoDetails;
