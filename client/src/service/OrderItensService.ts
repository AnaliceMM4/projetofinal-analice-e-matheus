import { api } from "@/lib/axios";
import {IOrderItens } from "@/commons/interfaces";

const orderItensURL = "/orderItens";

const listOrderItems = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${orderItensURL}/listarDetalhesDoPedido/${id}`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const OrderItensService = {
  listOrderItems,
};

export default OrderItensService;
