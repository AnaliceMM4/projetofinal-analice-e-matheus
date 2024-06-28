import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { ProductDetails } from "@/components/Product";
import CarrinhoDetailsPage from "@/components/CarrinhoDetailsPage";
import ResumoDetails from "@/components/ResumoDetails";

export function ResumoPage() {
    const { id } = useParams(); // Obtém o id da URL
    const [data, setData] = useState<IProduct | null>(null); // Ajusta o estado para um único produto
    const [apiError, setApiError] = useState("");
    const [showDeleteMessage] = useState(false); //setShowDeleteMessage
    const { findOne } = ProductService;

    useEffect(() => {
        if (id) {
            loadData(parseInt(id));
        }
    }, [id]);

    const loadData = async (id: number) => {
        
    };

    return (
        <>
            <main>
                <div>
                  {/*div do usuario*/}
                </div>
                <div>{/*div do forma de produtos*/}
                  
                </div>
                <div> {/*div do forma de pagamento*/}</div>
                
            </main>
        </>
    );
}
