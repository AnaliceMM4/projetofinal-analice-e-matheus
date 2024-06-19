import { useEffect, useState } from "react";
import { IOrderItens } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { GoTrash } from "react-icons/go";
import { FaMinus } from "react-icons/fa";

export function AddCart() {

  const [data, setData] = useState<IOrderItens[]>([]);
  const [apiError, setApiError] = useState("");

  const { findAll } = ProductService;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await findAll();
    if (response.status === 200) {
      setData(response.data);
      setApiError("");
    } else {
      setApiError("Falha ao carregar os produtos no carrinho");
    }
  };

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0"></h5>
              </div>
              {/* {data.map((orderItens: IOrderItens) => ( */}

              <div className="card-body">
                {/* Single item */}
                <div className="row">
                  <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    {/* Image */}
                    {/* <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <img src={orderItens.product.urlImage} className="card-img-top" alt={orderItens.product.name}/>
                      <h5><strong>{orderItens.product.name}</strong></h5>
                      <p>{orderItens.preco}</p>
                      <p>{orderItens.quantidade}</p>
                       */}
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      {/* <img src={} className="card-img-top" alt={}/> */}
                      <h5><strong>{ }</strong></h5>
                      <p>{ }</p>
                      <p>{ }</p>

                      {/* <a href="#!">
                          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                        </a> */}
                    </div>
                    {/* Image */}
                  </div>

                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    {/* Data */}
                    <button type="button" className="btn btn-danger  btn-sm me-1 mb-2" data-mdb-tooltip-init title="Remove item">
                      <GoTrash />
                    </button>
                   
                    {/* Data */}
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    {/* Quantity */}
                    <div className="d-flex mb-4" style={{ maxWidth: '1rem' }}>
                      <button className="btn btn-primary px-3 me-2" >
                      <FaMinus />
                      </button>
                      <div className="form-outline">
                        <input id="form1" min="0" name="quantity" defaultValue="1" type="number" className="form-control" />
                        <label className="form-label" htmlFor="form1">Quantity</label>
                      </div>
                      <button className="btn btn-primary px-3 ms-2" >
                        {/* onClick={() => document.getElementById('form1').stepUp()} */}
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    {/* Quantity */}

                    {/* Price */}
                    <p className="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>
                    {/* Price */}
                  </div>
                </div>
                {/* Single item */}

                < hr className="my-4" />

              </div>

                // </div>
            {/* ))} */}
          </div>

          {/* <div className="card mb-4">
              <div className="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div> */}
          {/* <div className="card mb-4 mb-lg-0">
              
            {/* <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <p className="mb-0">(including VAT)</p>
                    </div>
                    <span><strong>$53.98</strong></span>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* </div> */}

    </section>
  );
}
