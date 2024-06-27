import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { Product } from "@/components/ListProduct";
import { ProductByCategory } from "@/components/ListProductByCategory";
import { useParams } from "react-router-dom";
import CategoryIcon from "@/components/CategoryIcon"; // Importe o componente CategoryIcon


export function ProductByCategoryPage() {
  const { id } = useParams<{ id: string }>();
  // const [data, setData] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");
  const [apiError, setApiError] = useState("");
  const [showDeleteMessage] = useState(false);
  const { findByCategory } = ProductService;
  //remove
  //   useEffect(() => {
  //     if (id) {
  //         loadData(Number(id));
  //     }
  // }, [id]);

  // const loadData = async (categoryId: number) => {
  //   const response = await findByCategory(categoryId);
  //   if (response.status === 200) {
  //       setData(response.data);
  //       setApiError("");
  //   } else {
  //       setApiError("Falha ao carregar a lista de produtos");
  //   }
  // };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findByCategory(Number(id));
        if (response.status === 200) {
          setProducts(response.data);
          //obter o objeto da categoria associado ao primeiro produto e depois extraí o nome da categoria
          setCategoryName(response.data.length > 0 ? response.data[0].category.name : "");
          setApiError("");
        } else {
          setApiError("Falha ao carregar a lista de produtos");
        }
      } catch (error) {
        setApiError("Erro ao carregar categoria");
      }
    };

    if (id) {
      fetchData();
      // loadData(Number(id));
    }
  }, [id]);


  return (
    <main className="">
      <div className="text-center" style={{ backgroundColor: 'rgb(216, 59, 76)', minHeight: '4rem', padding: '20px' }}>

      <h2 className="mt-2 d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: '', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center', textTransform: 'uppercase' }}>
      <CategoryIcon categoryId={Number(id)} /> {categoryName}
      </h2>
    
      </div>
      <ProductByCategory />
    </main >
  );
}
