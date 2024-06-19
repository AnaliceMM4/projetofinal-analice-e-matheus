export interface IUserSignup {
  displayName: string;
  username: string;
  password: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface ICategory {
  id?: number;
  name: string;
}

export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  urlImage: string;
  category: ICategory;
}

export interface IOrder{
  id?: number;
  data: Date;
  user: IUserLogin;
  //payment;
}

export interface IOrderItens{
  id?: number;
  product: IProduct;
  preco: number;
  quantidade: number;

}
