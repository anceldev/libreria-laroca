export type User = {
 id: number;
 username: string;
 role: string; 
}
export type Product = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number
  category: string;
}
export type Sale = {
  id: number;
  user_id: number;
  productId: number;
  quantity: number;
  total_price: number;
  sale_date: Date | null;
}
export type Stock = {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  last_update: Date;
}
