import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { Product } from "@/components/ListProduct";
//import { FaShoppingCart } from 'react-icons/fa';


export function ProductListPage() {
  const [data, setData] = useState<IProduct[]>([]);
  const [apiError, setApiError] = useState("");
  const [showDeleteMessage] = useState(false);//setShowDeleteMessage
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
    <main className="container">
      <div className="text-center">
        <span className="h3 mb-3 fw-normal">Lista de Produtos</span>
      </div>
      <Product/>

     
      


      {/* <Link to={`/products/${product.id}`} className="btn btn-primary">
              View Details
            </Link> */}
      {/* <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead> */}
      {/* <tbody>
          {data.map((product: IProduct) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category!.name}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/products/${product.id}`}
                >
                  Editar
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => onRemove(product.id!)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      {/* </table> */}
      {apiError && <div className="alert alert-danger">{apiError}</div>}
      {
        showDeleteMessage && (
          <div className="alert alert-success">
            Registro removido com sucesso!
          </div>
        )
      }
    </main >
  );
}