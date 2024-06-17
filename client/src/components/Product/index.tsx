// ProductDetails.tsx
import React from "react";
import { IProduct } from "@/commons/interfaces";

interface ProductDetailsProps {
    product: IProduct;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    return (
        <div className="d-flex ms-1">
            <div>
                <img src={product.urlImage} alt="" className="border border-danger" />
            </div>
            <div className="w-50 box-s1 ms-2 mt-2">
                <div className="ps-3">
                    <h2>{product.description}</h2>
                    <p className="text-success">PRODUTO DISPONÍVEL</p>
                    <h1 className="text-center">R$ {product.price}</h1>
                </div>
                <div>
                    <a href="#" className="btn w-100"> <i className="bi bi-cart-check-fill pe-2"></i>Comprar</a>
                </div>
            </div>

        </div>
    );
};
