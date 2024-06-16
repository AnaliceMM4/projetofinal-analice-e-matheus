import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "@/service/ProductService";
import { IProduct } from "@/commons/interfaces";
import { FaShoppingCart } from "react-icons/fa";

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

    return (

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((product: IProduct) => (

                    //index: number) => (
                    <div className="card-wrapper" key={product.id} style={{ marginRight: '1rem', marginBottom: '1rem' }}>
                        <div className="card" style={{ width: '12rem', height: '25rem' }}>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                                <img src={product.urlImage} className="card-img-top" alt={product.name} style={{ width: '10rem', height: '10rem' }} />
                            </div>

                            <div className="card-body ">
                                <h5 className="card-title" style={{ fontSize: '1rem' }}>{product.name}</h5>
                                <p className="card-title font-secondary " style={{ fontSize: '1.4rem', }} >R$ {product.price}</p>
                                {/* <p className="card-text">Category: {product.category!.name}</p> */}
                                <div className="d-grid ">

                                    {/* <Link to={``} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                                        <FaShoppingCart style={{ marginRight: '5px' }} /> COMPRAR
                                    </Link> */}
                                    <Link to={`/products/${product.id}`} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                                        <FaShoppingCart style={{ marginRight: '5px' }} /> COMPRAR
                                    </Link>
                                    {/*  <FaShoppingCart /> */}
                                </div>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

    );
};

