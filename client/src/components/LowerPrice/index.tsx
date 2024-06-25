import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import ProductService from "@/service/ProductService";
import { IProduct } from "@/commons/interfaces";
import { MdLocalShipping } from "react-icons/md";

export function LowerPrice() {
    const [data, setData] = useState<IProduct[]>([]);
    const [apiError, setApiError] = useState<string>("");

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const response = await ProductService.findAll();
            setData(response.data);
            setApiError("");
        } catch (error) {
            setApiError("Falha ao carregar a lista de produtos");
        }
    };

    const calcularParcela = (price: number) => {
        const valorParcela = price / 10;
        const formattedParcela = valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
        return formattedParcela;
    };


    // Filtra os produtos que valem menos que 1000 reais
    const filteredProducts = data.filter((product) => product.price < 1000);
    //     const filteredProducts = data.filter((product) => product.category === "processador");
    const imageFundo = 'https://tm.ibxk.com.br/2014/07/04/04112337289322.jpg?ims=1280x480';
    return (
        <div className="bg-dark w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{
            backgroundImage: `url(${imageFundo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="App" style={{ backgroundColor: 'rgb(216, 59, 76)', padding: '.5rem', width: '100%' }}>
                   <h2 className="mt-2" style={{ color: 'white', fontSize: '', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center', textTransform: 'uppercase' }}>
                    Promoção do Dia
                </h2>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center p-4" style={{ width: '100%' }}>
                {filteredProducts.length === 0 && <p>Nenhum produto encontrado com preço menor de 1000 reais.</p>}
                {filteredProducts.map((product: IProduct) => (
                    <div className="card m-2" style={{
                        width: '15rem', height: '33rem',
                    }} key={product.id}>

                        <div className="card-body">
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <Link to={`/products/${product.id}`}>
                                    <img
                                        src={product.urlImage}
                                        className="card-img-top"
                                        alt={product.name}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </Link>
                            </div>
                            <h5 className="card-title">{product.name}</h5>
                            <div className="mt-4 p-2">
                                <p className="card-title font-secondary d-flex align-items-center " style={{ fontSize: '1.4rem' }}>
                                    <GiMoneyStack style={{ marginRight: '10px' }} /> {/* Ícone com margem à direita */}
                                    R$ {product.price}
                                </p>
                                <p className="text-muted" style={{ fontSize: '1rem', color: 'black' }}>em até 10x de {calcularParcela(product.price)}</p>
                                <p className="text-success d-flex align-items-center justify-content-center fs-6">
                                    <MdLocalShipping style={{ marginRight: '10px' }} /> Frete Grátis!
                                </p>
                            </div>
                            <div className="d-grid">
                                <Link to={`/products/${product.id}`} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                                    <FaShoppingCart style={{ marginRight: "5px" }} /> COMPRAR
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                {apiError && <p className="text-danger">{apiError}</p>}
            </div>
        </div>
    );
}
