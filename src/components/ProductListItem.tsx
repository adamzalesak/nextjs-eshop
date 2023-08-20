import { Product } from "@/models/product";
import Link from "next/link";
import { Button } from "./Button";

export const ProductListItem = ({ product }: { product: Product }) => (
  <Link
    className="flex flex-col gap-1 m-2 p-2 rounded-md bg-violet-100 hover:shadow-lg shadow-md"
    key={product.id}
    href={`/products/${product.id}`}
  >
    <h2>{product.name}</h2>
    <p className="font-bold">{product.price} €</p>
    <Button>Add to cart</Button>
  </Link>
);
