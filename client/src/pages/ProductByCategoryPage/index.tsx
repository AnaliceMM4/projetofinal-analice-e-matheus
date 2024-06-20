import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { Product } from "@/components/ListProduct";
import { ProductByCategory } from "@/components/ListProductByCategory";
import { useParams } from "react-router-dom";
//import { FaShoppingCart } from 'react-icons/fa';


export function ProductByCategoryPage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<IProduct[]>([]);
  const [apiError, setApiError] = useState("");
  const [showDeleteMessage] = useState(false);//setShowDeleteMessage
  const { findByCategory } = ProductService;
  //remove
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
    <main className="container">
      <div className="text-center">
        <span className="h3 mb-3 fw-normal">Lista de Produtos</span>
      </div>
      <ProductByCategory/>
    </main >
  );
}
