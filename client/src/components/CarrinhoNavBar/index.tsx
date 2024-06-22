import React, { useEffect, useState } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu } from 'mdb-react-ui-kit';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { IProduct } from '@/commons/interfaces';
import { Link } from 'react-router-dom';

const CarrinhoNavBarComponent: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        const storedProducts = localStorage.getItem('cart');
        const storedQuantities = localStorage.getItem('quantities');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
        if (storedQuantities) {
            setQuantities(JSON.parse(storedQuantities));
        }
    }, []);

    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity < 1) return;  // Evitar quantidade negativa
        const updatedQuantities = { ...quantities, [id]: quantity };
        setQuantities(updatedQuantities);
        localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
    };

    const handleRemoveItem = (id: number) => {
        const updatedProducts = products.filter(product => product.id !== id);
        const { [id]: _, ...updatedQuantities } = quantities;  // Remove a quantidade do item removido
        setProducts(updatedProducts);
        setQuantities(updatedQuantities);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
    };

    return (
        <MDBDropdown>
            <MDBDropdownToggle tag='button' className='btn text-white'>
                <FaShoppingCart />
            </MDBDropdownToggle>
            <MDBDropdownMenu style={{ minWidth: '500px' }}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} style={{ padding: '10px 0', borderBottom: '1px solid #e9ecef' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={product.urlImage}
                                    alt={product.name}
                                    style={{ width: '50px', height: '50px', marginRight: '15px' }}
                                />
                                <div>
                                    <div>{product.name}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                                        <span>Quantidade: </span>
                                        <input
                                            type="number"
                                            value={quantities[product.id] || 1}
                                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                            style={{ width: '60px', marginLeft: '10px' }}
                                            min="1"  // Adiciona o mínimo de 1
                                        />
                                        <FaTrashAlt
                                            onClick={() => handleRemoveItem(product.id)}
                                            style={{ cursor: 'pointer', marginLeft: '10px' }}
                                        />
                                    </div>

                                </div>

                            </div>

                        </div>

                    ))
                ) : (
                    <div style={{ padding: '10px' }}>Nenhum produto no carrinho</div>
                )}
                <div>
                    <Link to='/carrinhoDetailsPage'>Ver detalhes do carrinho</Link>
                </div>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
};

export default CarrinhoNavBarComponent;