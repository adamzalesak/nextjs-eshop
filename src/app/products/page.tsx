import { getProducts } from "@/api/product";
import { ProductListItem } from "@/components/ProductListItem";

export const revalidate = 0;

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="p-2">
      <h1 className="font-bold text-xl mx-2">Products</h1>
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
