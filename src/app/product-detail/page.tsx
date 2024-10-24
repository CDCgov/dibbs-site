import Link from "next/link";

export default function ProductDetail() {
  return (
    <div>
      <h1>Product Detail</h1>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/our-products"}>Our products</Link>
        </li>
        <li>
          <Link href={"/product-detail"}>Product detail</Link>
        </li>
        <li>
          <Link href={"/resources"}>Resources</Link>
        </li>
      </ul>
    </div>
  );
}
