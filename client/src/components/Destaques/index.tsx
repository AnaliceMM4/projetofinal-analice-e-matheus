// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import CategoryService from "@/service/CategoryService";
// import { ICategory, IProduct } from "@/commons/interfaces";
// import ProductService from '@/service/ProductService';
// import CategoryIcon from '../CategoryIcon';
// import { ProductByCategory } from 
// 'c:/Users/User/Documents/projetofinal-analice-e-matheus/client/src/components/ListProductByCategory/index';

// const Destaques: React.FC = () => {
//   const [categories, setCategories] = useState<ICategory[]>([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [apiError, setApiError] = useState<string>("");

//   useEffect(() => {
//     loadData();
//   }, []);


//   const loadData = async () => {
//     try {
//       const response = await CategoryService.findAll();
//       if (response.status === 200) {
//         setCategories(response.data);
//         setApiError("");
//       } else {
//         setApiError("Falha ao carregar a lista de categorias");
//       }
//     } catch (error) {
//       setApiError("Erro ao carregar categorias");
//     }
//   };

//   const handleVerProdutosClick = async (categoryId: number) => {
//     try {
//       const response = await ProductService.findByCategory(categoryId);
//       if (response.status === 200) {
//         setProducts(response.data);
//         setSelectedCategoryId(categoryId);
//         setApiError("");
//       } else {
//         setApiError("Falha ao carregar os produtos da categoria");
//       }
//     } catch (error) {
//       setApiError("Erro ao carregar produtos");
//     }
//   };

//   //   return (
//   //     <div className="container mt-4">
//   //       <div className="row">
//   //         {apiError ? (
//   //           <div className="col">
//   //             {apiError}
//   //           </div>
//   //         ) : (
//   //           data.map(category => (
//   //             <div key={category.id} className="col-md-4 mb-4">
//   //               <div className="card h-100">
//   //                 <div className="card-body">
//   //                   <div className="d-flex align-items-center mb-3">
//   //                     {getCategoryIcon(category.id)}
//   //                     <h5 className="card-title mb-0 ml-2">{category.name}</h5>
//   //                   </div>
//   //                   <Link to={`/categories/${category.id}`} className="btn btn-primary">
//   //                     Ver Produtos
//   //                   </Link>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           ))
//   //         )}
//   //       </div>
//   //     </div>
//   //   );
//   // };

//   // export default Destaques;


//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-3">
//           <h4>Categorias</h4>
//           <div className="list-group">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 className={`list-group-item list-group-item-action ${selectedCategoryId === category.id ? 'active' : ''}`}
//                 onClick={() => handleVerProdutosClick(category.id)}
//               >
//                 {/* <CategoryIcon categoryId={category.id} /> */}

//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="col-md-9">

//           {selectedCategoryId !== null && (
//             <>
//               <h4>Produtos da Categoria: {categories.find(cat => cat.id === selectedCategoryId)?.name}</h4>
//               {apiError ? (
//                 <div className="alert alert-danger">{apiError}</div>
//               ) : (
//                 <div className="content">
//                 {selectedCategoryId && <ProductByCategory categoryId={selectedCategoryId} />}
//               </div>
//                 // <ProductByCategory categoryId={selectedCategoryId} />
//               )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };
  

//           {/* <div key={product.id} className="col-md-4 mb-4">
//                         <div className="card h-100">
//                           <div className="card-body">
//                             <h5 className="card-title">{product.name}</h5>
//                             <div className="d-flex justify-content-center align-items-center mb-3">
//                               <Link to={`/products/${product.id}`}>
//                                 <img
//                                   src={product.urlImage}
//                                   className="card-img-top"
//                                   alt={product.name}
//                                   style={{ width: "10rem", height: "auto" }} />
//                               </Link>
//                             </div>
//                             <p className="card-title font-secondary d-flex align-items-center " style={{ fontSize: '1.4rem' }}>
//                               <GiMoneyStack style={{ marginRight: '10px' }} />
//                               R$ {product.price}
//                             </p>
//                             <div className="d-grid">
//                               <Link to={`/products/${product.id}`} className="btn btn-danger d-flex align-items-center justify-content-center mt-4">
//                                 <FaShoppingCart style={{ marginRight: "5px" }} /> COMPRAR
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div> */}
      
//         {/* ))} */}
//         {/* </div> */}
//         {/* )} */}
   
// export default Destaques;
