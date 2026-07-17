import { bookCategories } from '@/data/books';

export function generateStaticParams() {
  return bookCategories.map((c) => ({ slug: c.slug }));
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
