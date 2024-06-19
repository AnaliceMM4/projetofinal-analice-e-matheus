// ProductDetails.tsx
import React, { useState } from "react";
import { IProduct } from "@/commons/interfaces";
import { FaBarcode, FaCreditCard, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlinePayments, MdOutlinePix } from "react-icons/md";
import { AddCart } from "../AddCart";
import { CiCreditCard2 } from "react-icons/ci";

interface ProductDetailsProps {
    product: IProduct;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal


    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="row my-4 justify-content-center">
            <div className="col-md-6 d-flex justify-content-center">
                <div className="card border border-danger">
                    <img src={product.urlImage} className="card-img-top img-fluid" alt={product.description} style={{ maxWidth: '100%', height: '35rem', objectFit: 'contain' }} />
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="card-body">
                        <h4>{product.description}</h4>
                        <p className="text-success">PRODUTO DISPONÍVEL</p>
                        <h1 style={{ color: 'red', fontSize: '2.5rem' }}>R$ {product.price}</h1>

                    </div>
                    <button className=" d-flex align-items-center fs-5 p-4" onClick={openModal}>
                        <MdOutlinePayments style={{ marginRight: '5px' }} /> Formas de Pagamento
                    </button>

                    <div>
                        <Link to={`/orderItens/${product.id}`} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                            <FaShoppingCart style={{ marginRight: '5px' }} /> COMPRAR
                        </Link>
                        {/* <a href="#" className="btn w-100"> <i className="bi bi-cart-check-fill pe-2"></i>Comprar</a> */}
                    </div>
                </div>
            </div>
            {showModal &&
                <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content d-flex align-items-center justify-content-center">
                            <div className="modal-header">
                                <h5 className="modal-title ">FORMAS DE PAGAMENTO</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="fs-5">
                                <p>Aqui você pode listar as formas de pagamento disponíveis:</p>
                                <ul>
                                    <li className="d-flex align-items-center"><FaCreditCard style={{ marginRight: '5px' }} /> Cartão de Crédito</li>

                                    <li className="d-flex align-items-center"><MdOutlinePix style={{ marginRight: '5px' }} />
                                        PIX</li>
                                    <li className="d-flex align-items-center">
                                        <CiCreditCard2 style={{ marginRight: '5px' }} />
                                        Cartão de Débito</li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
};