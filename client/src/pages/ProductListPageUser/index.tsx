import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { Product } from "@/components/ListProduct";
import { FaFireFlameCurved } from "react-icons/fa6";
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
    <main className="">
    <div className="text-center" style={{ backgroundColor: 'rgb(216, 59, 76)', minHeight: '4rem', padding: '20px' }}>
      <h2 className="mt-2 d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: '', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center', textTransform: 'uppercase' }}>
        <FaFireFlameCurved /> Todos os Produtos
      </h2>
    </div>
    <Product />
  </main >
  );
}