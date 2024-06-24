// ProductDetails.tsx
import React, { useState } from "react";
import { IProduct } from "@/commons/interfaces";
import { FaBarcode, FaCreditCard, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocalShipping, MdOutlinePayments, MdOutlinePix } from "react-icons/md";
import { AddCart } from "../CarrinhoDetailsPage";
import { CiCreditCard2 } from "react-icons/ci";
import { right } from "@popperjs/core";

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


    const calcularParcela = (price: number) => {
        const valorParcela = price / 10;
        const formattedParcela = valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
        return formattedParcela;
    };

    const addItemToLocalStorage = (key: string, item: IProduct) => {
        try {
          const existingItems: IProduct[] = JSON.parse(localStorage.getItem(key) || '[]');
          const quantities = JSON.parse(localStorage.getItem('quantities') || '{}');
      
          const itemIndex = existingItems.findIndex(existingItem => existingItem.id === item.id);
      
          if (itemIndex > -1) {
            // Produto já existe, incrementar a quantidade
            const itemId = item.id!;
            quantities[itemId] = (quantities[itemId] || 1) + 1;
          } else {
            // Novo produto, adicionar ao array
            existingItems.push(item);
            quantities[item.id!] = 1;
          }
      
          localStorage.setItem(key, JSON.stringify(existingItems));
          localStorage.setItem('quantities', JSON.stringify(quantities));
        } catch (error) {
          console.error('Erro ao adicionar item ao LocalStorage:', error);
        }
      };
    const handleAddToCart = () => {
        addItemToLocalStorage('cart', product);
        // Redirecionar para a página de orderItens (opcional)
        // window.location.href = `/orderItens/${product.id}`;
    };


    // // Função para formatar o texto de descrição
    const formatDescription = (description: string) => {
        if (!description) return "";
        return description.split(",").map(line => (
            <span>
                {"- "}
                {line.trim()}
                <br />
            </span>
        ));
    };

    return (
        <div className="row my-4 justify-content-center">

            <div className="d-flex align-items-center" style={{ paddingLeft: '8rem', marginLeft: '7rem' }}>
           
            <Link to={`/categories/${product.category.id}`} >
                <h5 className="text-start">{product.category.name} - 
                    <span className="text-danger small"> Código: {product.id}</span>
                </h5>
                </Link>
            </div>

            <div className="col-md-6 d-flex justify-content-center">

                <div className="card border border-danger">
                    <img src={product.urlImage} className="card-img-top img-fluid" alt={product.description} style={{ maxWidth: '100%', height: '35rem', objectFit: 'contain' }} />
                </div>

            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="card-body">
                        <h4>{product.name}</h4>
                        <p className="text-success">PRODUTO DISPONÍVEL</p>
                        <h1 style={{ color: 'red', fontSize: '2.5rem' }}>R$ {product.price}</h1>

                        {/* Espaço para exibir o valor da parcela */}
                        <p className="text-muted" style={{ fontSize: '1rem', color: 'black' }}>em até 10x de {calcularParcela(product.price)}</p>
                        <p className="text-success d-flex align-items-center fs-6">
                            <MdLocalShipping style={{ marginRight: '10px' }} /> Frete Grátis!
                        </p>
                    </div>
                    <button className=" d-flex align-items-center fs-5 p-4" onClick={openModal}>
                        <MdOutlinePayments style={{ marginRight: '5px' }} /> Formas de Pagamento
                    </button>

                    <div>
                    <button onClick={handleAddToCart} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                            <FaShoppingCart style={{ marginRight: '5px' }} /> COMPRAR
                        </button>
                        {/*<Link to={`/orderItens/${product.id}`} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                            <FaShoppingCart style={{ marginRight: '5px' }} /> COMPRAR
                        </Link>*/}
                        {/* <a href="#" className="btn w-100"> <i className="bi bi-cart-check-fill pe-2"></i>Comprar</a> */}
                    </div>
                </div>
            </div>

            {/* Informações técnicas abaixo */}
            <div className="col-md-10 mt-4">
                <div className="card">
                    <div className="card-body text-black">
                        <h5>Informações Técnicas:</h5>
                        <p className="text-black">
                            {formatDescription(product.description)}
                        </p>
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