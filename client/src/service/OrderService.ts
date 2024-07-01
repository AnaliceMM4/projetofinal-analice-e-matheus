import { IOrder } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const orderURL = "/orders"; // URL base para os endpoints de pedidos

const saveOrder = async (order: IOrder): Promise<any> => {
  try {
    const response = await api.post(`${orderURL}/add`, order); // Envia o objeto `order` como corpo da requisição
    return response.data; // Retorna os dados da resposta, se necessário
  } catch (err: any) {
    // Em caso de erro, retorna o erro para tratamento no componente que chamou `saveOrder`
    return err.response;
  }
};

const findRequestsByUser = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(`${orderURL}/list`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const OrderService = {
  saveOrder,
  findRequestsByUser,
};

export default OrderService;
