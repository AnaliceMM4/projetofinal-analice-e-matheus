import { useEffect, useState } from "react";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { Product } from "@/components/ListProduct";
import { LowerPrice } from "@/components/LowerPrice";

export function HomePage() {
  const [data, setData] = useState<IProduct[]>([]);
  const [apiError, setApiError] = useState("");
  const [showDeleteMessage] = useState(false); //setShowDeleteMessage
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
    <>
      <main className="" >
        {/* container */}
        <div className="text-center">
            {/* OBS: CARROSEL COM IMAGENS DE PRODUTOS QUALQUER - SÓ PARA TER UM DESTAQUE AQUI */}

          {/* <h1 className="h3 mb-4 fw-normal ">Home Page</h1> */}

          <div>
            {" "}
            <LowerPrice />
          </div>
          <div className="d-flex justify-content-center">
            <Product />
            {/* <AddCart/> */}
          </div>
          {/* <Destaques /> */}

        </div>
      </main>
    </>
  );
}
