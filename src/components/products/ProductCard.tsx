import Image from "next/image";
import Link from "next/link";
import ProductButtons from "@/components/shared/ProductButtons";

interface Product {
  _id: string;
  title: string;
  displayImage: {
    url: string;
  };
  category: string;
  tags: string[];
  amazonMerchLink: string;
  gumroadLink?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <Link href={product.amazonMerchLink} target="_blank" rel="noopener noreferrer">
        <div className="relative aspect-square bg-gray-100">
          <Image
            src={product.displayImage.url}
            alt={product.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </Link>
      <div className="p-6">
        <Link href={product.amazonMerchLink} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-emerald-700 transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <ProductButtons
          amazonLink={product.amazonMerchLink}
          gumroadLink={product.gumroadLink}
        />
      </div>
    </div>
  );
}
