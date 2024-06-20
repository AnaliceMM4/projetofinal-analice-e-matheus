import { IProduct } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const productURL = "/products";
const categoryURL = "/categories"

const save = async (product: IProduct): Promise<any> => {
  let response;
  try {
    response = await api.post(productURL, product);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(productURL);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const findOne = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${productURL}/${id}`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const findByCategory = async (id: number): Promise<any> => {
  let response;
  try {
    console.log(`Fetching products for category with ID ${id}`);
    response = await api.get(`${productURL}${categoryURL}/${id}`);
    console.log('Products fetched successfully:', response.data);
    
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const remove = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.delete(`${productURL}/${id}`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const ProductService = {
  save,
  findAll,
  findOne,
  remove,
  findByCategory,
};

export default ProductService;