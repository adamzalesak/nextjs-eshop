import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center">
      <Link href="/products" className="m-4">
        Products
      </Link>
    </main>
  );
}
