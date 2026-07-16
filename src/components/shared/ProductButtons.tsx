import Link from "next/link";

interface ProductButtonsProps {
  amazonLink: string;
  gumroadLink?: string;
}

export default function ProductButtons({ amazonLink, gumroadLink }: ProductButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-4">
      <Link
        href={amazonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
      >
        Buy on Amazon
      </Link>
      {gumroadLink && (
        <Link
          href={gumroadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
        >
          Download on Gumroad
        </Link>
      )}
    </div>
  );
}
