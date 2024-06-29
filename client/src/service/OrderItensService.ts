import { api } from "@/lib/axios";
import {IOrderItens } from "@/commons/interfaces";

const orderItensURL = "/orderItens";

const listOrderItens = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(`${orderItensURL}/listarDetalhesDoPedido`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const OrderItensService = {
  listOrderItens,
};

export default OrderItensService;
