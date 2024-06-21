import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "@/service/ProductService";
import { IProduct } from "@/commons/interfaces";
import { FaShoppingCart } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";

export function Product() {

    const [data, setData] = useState<IProduct[]>([]);
    const [apiError, setApiError] = useState("");
    //  const [showDeleteMessage] = useState(false);//setShowDeleteMessage
    const { findAll } = ProductService;
    //remove

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await findAll();
        if (response.status === 200) {
            setData(response.data);
            setApiError("");
        } else {
            setApiError("Falha ao carregar a lista de produtos");
        }
    };

    const calcularParcela = (price: number) => {
        const valorParcela = price / 10;
        const formattedParcela = valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
        return formattedParcela;
    };
    

    return (

        <div className="d-flex flex-wrap justify-content-center align-items-center p-4" >
            {data.map((product: IProduct) => (

                //index: number) => (
                <div className="" key={product.id} style={{ marginBottom: '3rem', padding: '.7rem' }} >
                    <div className="card" style={{ width: '15rem', height: '30rem' }}>
                        <div className="d-flex justify-content-center align-items-center" style={{ padding: '1rem', margin: '1.4rem', height: '8rem' }}>
                            <Link to={`/products/${product.id}`} >
                                <img src={product.urlImage} className="card-img-top" alt={product.name} />
                            </Link>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <h5 className="card-title">{product.name}</h5>
                            </div>

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


                            {/* <p className="card-text">Category: {product.category!.name}</p> */}
                            <div className="d-grid">

                                {/* <Link to={``} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                                        <FaShoppingCart style={{ marginRight: '5px' }} /> COMPRAR
                                    </Link> */}
                                <Link to={`/products/${product.id}`} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                                    <FaShoppingCart style={{ marginRight: '.5rem', padding: 'auto' }} /> COMPRAR
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            ))}

        </div>

    );
};

