import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
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

  // const onRemove = async (id: number) => {
  //   const response = await remove(id);
  //   if (response.status === 204 || response.status === 200) {
  //     setShowDeleteMessage(true);

  //     data.filter((product) => {
  //       return product.id !== id;
  //     });

  //     setTimeout(() => {
  //       setShowDeleteMessage(false);
  //     }, 1500);
  //     setApiError("");
  //   } else {
  //     setApiError("Falha ao remover o produto");
  //   }
  // };

  return (
    <main className="container">
      <div className="text-center">
        <span className="h3 mb-3 fw-normal">Lista de Produtos</span>
      </div>
      <div className="text-center">
        <Link className="btn btn-success" to="/products/new">
          Novo Produto
        </Link>
      </div>

      {/* <div className="card" style={{ width: '200px' }}>
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
        <div className="card-body">

          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Button</a>
        </div>
      </div> */}
      


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