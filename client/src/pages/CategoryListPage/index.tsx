import { useEffect, useState } from "react";
import CategoryService from "../../service/CategoryService";
import { ICategory } from "../../commons/interfaces";

export function CategoryListPage() {

    const[data, setData] = useState<ICategory[]>([]);

    useEffect(() => {
        loadData();
    },[]);

const loadData = async() => {
    const response = await CategoryService.findAll();
    if(response.status === 200){
        setData(response.data);
        }
}

// função para remover uma categoria
const onClickRemove = async (id?: number) => {
    if (id) {
      const response = await CategoryService.remove(id);
      if (response.status === 204) {
        loadData();
        setData(
          data.filter((category) => {
            return category.id !== id;
          })
        );
      }
        
    }
  };

    return (
        <>
            <main className="container">

                <div className="text-center">
                    <h1 className="h3 mb-3 fw-normal">Lista de Categorias</h1>
                </div>
                <table className="table table-striped">
          <thead>
            <tr>
              <td>#</td>
              <td>Nome</td>
              <td>Editar</td>
              <td>Remover</td>
            </tr>
          </thead>
          <tbody>
            {data.map((category: ICategory) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td></td>
                <td>  
                    {/* suit alert */}
                    {/* colocar o ícone de excluir */}
                    <button
                    className="btn btn-danger"
                    onClick={() => onClickRemove(category.id)}
                  >
                    Excluir
                  </button></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
                
            </main>
        </>
    );
}