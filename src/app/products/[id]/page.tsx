import { getProductDetail } from "@/api/product";
import { Button } from "@/components/Button";
import Link from "next/link";

export const generateStaticParams = async () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
};

export const revalidate = 0;

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const productDetail = await getProductDetail(+(id as string));

  return (
    <div className="p-2">
      <h1 className="font-bold text-lg">{productDetail.name}</h1>
      <p>{productDetail.description}</p>
      <p className="font-bold">{productDetail.price} €</p>
      <Link href="/cart">
        <Button>Add to cart</Button>
      </Link>
    </div>
  );
};

export default ProductDetail;
