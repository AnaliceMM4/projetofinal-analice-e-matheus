import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { AddCart } from "@/components/AddCart";

export function ProductsCartPage() {
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
        try {
            const response = await findOne(id);
            if (response.status === 200) {
                setData(response.data);
                setApiError("");
            } else {
                setApiError("Falha ao carregar o produto");
            }
        } catch (error) {
            setApiError("Erro ao carregar o produto");
        }
    };

    return (
        <>
            <main>
                <div>
                    {apiError && <p className="text-danger">{apiError}</p>}
                    
                    {data ? <AddCart/> : <p>Carregando...</p>}
                </div>
            </main>
        </>
    );
}
