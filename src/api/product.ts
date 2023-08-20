import { Product, ProductDetail } from "@/models/product";
import { supabase } from "@/supabase";

export const getProducts = async () => {
  const products = await supabase.from("Product").select("id, name, price");
  return products.data as Product[];
};

export const getProductDetail = async (id: number) => {
  const product = await supabase.from("Product").select("*").eq("id", id);
  return product.data?.[0] as ProductDetail;
};
