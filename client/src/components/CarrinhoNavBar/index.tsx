// CarrinhoNavBarComponent.tsx
import React, { useState, useEffect } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { IProduct } from '@/commons/interfaces';

interface CarrinhoNavBarProps {
    updateCartItemsCount: (count: number) => void; // atualizar o contador de itens no carrinho
}
const CarrinhoNavBarComponent: React.FC<CarrinhoNavBarProps> = ({ updateCartItemsCount }) => {

    ;//const CarrinhoNavBarComponent: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [apiSuccess, setApiSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setPendingApiCall(true);

        const storedProducts = localStorage.getItem('cart');
        const storedQuantities = localStorage.getItem('quantities');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
        // if (storedQuantities) {
        //     setQuantities(JSON.parse(storedQuantities));
        //     const totalCount = Object.values(JSON.parse(storedQuantities)).reduce((acc: number, curr: number) => acc + curr, 0);
        //     updateCartItemsCount(totalCount); // Atualiza o contador de itens no carrinho
        // }
        if (storedQuantities) {
            const parsedQuantities = JSON.parse(storedQuantities);
            const quantityMap: { [key: number]: number } = {};

            // Convertendo quantidades para objeto com chaves numéricas
            Object.keys(parsedQuantities).forEach(key => {
                quantityMap[parseInt(key)] = parsedQuantities[key];
            });

            setQuantities(quantityMap);

            // Atualiza o contador de itens no carrinho
            const totalCount = Object.values(quantityMap).reduce((acc, curr) => acc + curr, 0);
            updateCartItemsCount(totalCount);
        }
    }


    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity < 1) return;  // Evitar quantidade negativa
        const updatedQuantities = { ...quantities, [id]: quantity };
        setQuantities(updatedQuantities);
        localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
        updateCartItemsCount(Object.values(updatedQuantities).reduce((acc: number, curr: number) => acc + curr, 0));
    };

    const handleRemove = (id: number) => {
        const updatedProducts = products.filter(product => product.id !== id);
        const { [id]: _, ...updatedQuantities } = quantities;
        setProducts(updatedProducts);
        setQuantities(updatedQuantities);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
        updateCartItemsCount(Object.values(updatedQuantities).reduce((acc: number, curr: number) => acc + curr, 0));
    };

    return (
        <MDBDropdown>
            {/* <MDBDropdownToggle tag='button' className='btn text-white'> */}
            <MDBDropdownToggle tag='button' className='btn text-white position-relative'>
                <FaShoppingCart style={{ fontSize: '1.5rem' }} /> {/* Definindo o tamanho do ícone */}

                {Object.values(quantities).reduce<number>((acc, curr) => acc + curr, 0) > 0 && (
                    <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle" style={{ marginLeft: '5px', fontSize: '.8rem' }}>{Object.values(quantities).reduce<number>((acc, curr) => acc + curr, 0)}</span>
                )}
            </MDBDropdownToggle>
            <MDBDropdownMenu style={{ minWidth: '25rem' }}>
                {products.length > 0 ? (
                    <>
                        {products.map((product) => (
                            <MDBDropdownItem key={product.id}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Link to={`/products/${product.id}`} >
                                        <img
                                            src={product.urlImage}
                                            alt={product.name}
                                            style={{ width: '50px', height: '50px', marginRight: '15px' }}
                                        />
                                    </Link>
                                    <div>
                                        <Link to={`/products/${product.id}`} >
                                            <div>{product.name}</div>
                                        </Link>

                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                                            <span>Quantidade: </span>
                                            <input
                                                type="number"
                                                value={quantities[product.id] || 1}
                                                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                                style={{ width: '60px', marginLeft: '10px' }}
                                                min="1"
                                            />
                                            <FaTrashAlt
                                                onClick={() => handleRemove(product.id)}
                                                style={{ cursor: 'pointer', marginLeft: '1rem', color: 'red' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <MDBDropdownItem divider />

                            </MDBDropdownItem>
                        ))}

                        <MDBDropdownItem>
                            <Link to="/carrinhoDetailsPage" style={{ padding: '1rem' }} className="col-12 btn btn-light">Ver detalhes do carrinho</Link>
                        </MDBDropdownItem>
                    </>
                ) : (
                    <MDBDropdownItem>Nenhum produto no carrinho</MDBDropdownItem>
                )}
            </MDBDropdownMenu>
        </MDBDropdown >
    );
};

export default CarrinhoNavBarComponent;
