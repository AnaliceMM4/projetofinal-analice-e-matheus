import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "@/service/ProductService"; // Ajuste o caminho conforme necessário
import { IProduct } from "@/commons/interfaces";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

export function ProductByCategory() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<IProduct[]>([]);
  const [apiError, setApiError] = useState("");
  const {findByCategory} = ProductService;
  
  useEffect(() => {
    if (id) {
      loadData(Number(id));
    }
  }, [id]);

  const loadData = async (categoryId: number) => {
    const response = await findByCategory(categoryId);
    if (response.status === 200) {
      setData(response.data);
      setApiError("");
    } else {
      setApiError("Falha ao carregar a lista de produtos");
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center p-4">
      {apiError ? (
        <div>{apiError}</div>
      ) : (
        data.map((product: IProduct) => (
          <div key={product.id} className="" style={{ marginBottom: '3rem', padding: '.7rem' }}>
            <div className="card" style={{ width: '15rem', height: '28rem' }}>
              <div className="d-flex justify-content-center align-items-center" style={{ padding: '1rem', margin: '1.4rem', height: '8rem' }}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.urlImage} className="card-img-top" alt={product.name} />
                </Link>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <h5 className="card-title">{product.name}</h5>
                </div>
                <div className="mt-4 p-2">
                  <p className="card-title font-secondary d-flex align-items-center" style={{ fontSize: '1.4rem' }}>
                    <GiMoneyStack style={{ marginRight: '10px' }} /> R$ {product.price}
                  </p>
                </div>
                <div className="d-grid">
                  <Link to={`/products/${product.id}`} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
                    <FaShoppingCart style={{ marginRight: '.5rem', padding: 'auto' }} /> COMPRAR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
