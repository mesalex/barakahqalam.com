export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  coverImage: string;
  carouselImage: string;
  price: string;
  amazonUrl: string;
  gumroadUrl: string;
  category: string;
  categories: string[];
  pages: number;
  format: string;
  seoKeywords: string[];
}

export const bookCategories = [
  { slug: "names-of-allah", name: "Names of Allah Books", emoji: "🤲" },
  { slug: "islamic-english", name: "Islamic English Books", emoji: "📚" },
  { slug: "islamic-coloring", name: "Islamic Coloring Books", emoji: "🎨" },
  { slug: "islamic-japanese", name: "Islamic Japanese Books", emoji: "🇯🇵" },
  { slug: "islamic-turkish", name: "Islamic Turkish Books", emoji: "🇹🇷" },
  { slug: "islamic-spanish", name: "Islamic Spanish Books", emoji: "🇪🇸" },
] as const;

export type CategorySlug = typeof bookCategories[number]['slug'];

export const books: Book[] = [
  {
    slug: "99-names-of-allah",
    title: "99 Names of Allah",
    subtitle: "A Coloring Book for Reflection & Contemplation",
    description:
      "A beautiful collection of Islamic calligraphy coloring pages featuring the 99 Names of Allah. Each name is rendered in elegant Arabic calligraphy surrounded by intricate botanical arabesques.",
    longDescription: `Discover the beauty and depth of the 99 Names of Allah through the meditative practice of coloring.

This carefully crafted coloring book features:
• All 99 Names of Allah in stunning Arabic calligraphy
• Intricate botanical arabesque patterns surrounding each name
• High-quality, single-sided pages to prevent bleed-through
• English translation and transliteration for each Name
• Brief reflections to deepen your understanding

Whether you're an experienced artist or picking up colored pencils for the first time, this book offers a peaceful way to connect with the Divine Names while creating something beautiful.

Perfect for:
• Daily spiritual practice and meditation
• Islamic studies for children and adults
• Meaningful Ramadan activity
• Unique Islamic gift for family and friends`,
    coverImage: "/carousel/3.png",
    carouselImage: "/carousel/3.png",
    price: "$7.99",
    amazonUrl:
      "https://www.amazon.com/dp/B0EXAMPLE1?tag=barakahqalam-20",
    gumroadUrl: "https://gumroad.com/l/99-names-coloring",
    category: "Coloring Book",
    categories: ["names-of-allah", "islamic-coloring", "islamic-english"],
    pages: 108,
    format: "8.5 x 11 inches, Paperback",
    seoKeywords: [
      "99 names of Allah coloring book",
      "Islamic coloring book",
      "Asma ul Husna",
      "Arabic calligraphy coloring",
      "Islamic art therapy",
      "Ramadan activity book",
      "Muslim coloring book",
      "Names of Allah for kids",
    ],
  },
  {
    slug: "islamic-geometric-patterns",
    title: "Islamic Geometric Patterns",
    subtitle: "Master the Art of Sacred Geometry",
    description:
      "Master the art of Islamic geometric design with these intricate coloring pages. Features 50+ patterns ranging from simple stars to complex 12-pointed rosettes.",
    longDescription: `Journey into the mesmerizing world of Islamic geometric patterns — where mathematics meets spirituality.

This comprehensive coloring book includes:
• 50+ geometric patterns arranged from beginner to advanced
• Classic Islamic motifs: stars, rosettes, girih tiles, and more
• Step-by-step construction guides for key patterns
• Historical context and spiritual significance of each design
• High-quality paper suitable for colored pencils, markers, and gel pens

Islamic geometric patterns represent the infinite nature of creation — a visual reminder that underlying all diversity is a single, unifying principle. As you color these intricate designs, you'll experience the same meditative focus that has inspired artists and architects for centuries.

Great for:
• Art therapy and stress relief
• Understanding Islamic art and architecture
• Developing patience and focus
• Beautiful home decor — frame your finished pages!`,
    coverImage: "/carousel/009.png",
    carouselImage: "/carousel/009.png",
    price: "$9.99",
    amazonUrl:
      "https://www.amazon.com/dp/B0EXAMPLE2?tag=barakahqalam-20",
    gumroadUrl: "https://gumroad.com/l/islamic-geometric-coloring",
    category: "Coloring Book",
    categories: ["islamic-coloring", "islamic-english"],
    pages: 120,
    format: "8.5 x 11 inches, Paperback",
    seoKeywords: [
      "Islamic geometric patterns coloring book",
      "sacred geometry coloring",
      "Islamic art book",
      "geometric coloring book for adults",
      "Islamic architecture patterns",
      "mindfulness coloring",
      "Islamic design book",
    ],
  },
  {
    slug: "arabic-calligraphy-basics",
    title: "Arabic Calligraphy Basics",
    subtitle: "Beginner-Friendly Coloring & Practice",
    description:
      "Learn the fundamentals of Arabic calligraphy with beginner-friendly coloring exercises. Practice strokes, letterforms, and complete compositions.",
    longDescription: `Begin your journey into the timeless art of Arabic calligraphy with this hands-on practice book.

Designed for complete beginners, this book provides:
• Introduction to Arabic script and letterforms
• Tracing exercises for individual letters in Naskh and Thuluth styles
• Progressive compositions from single words to full phrases
• Beautiful Islamic phrases and Quranic verses to practice
• High-quality paper that handles ink without bleeding
• Tips on traditional tools: qalam, ink, and paper

Arabic calligraphy is more than writing — it's a spiritual practice that has been refined over 1,400 years. Each stroke carries intention, each curve reflects devotion.

Ideal for:
• Beginners curious about Arabic script
• Muslims wanting to beautify their Arabic writing
• Artists exploring new mediums
• Islamic school supplementary material
• Meaningful Ramadan or Eid gift`,
    coverImage: "/carousel/011.png",
    carouselImage: "/carousel/011.png",
    price: "$8.99",
    amazonUrl:
      "https://www.amazon.com/dp/B0EXAMPLE3?tag=barakahqalam-20",
    gumroadUrl: "https://gumroad.com/l/arabic-calligraphy-practice",
    category: "Educational",
    categories: ["islamic-coloring", "islamic-english"],
    pages: 96,
    format: "8.5 x 11 inches, Paperback",
    seoKeywords: [
      "Arabic calligraphy book",
      "learn Arabic calligraphy",
      "Islamic calligraphy practice",
      "Arabic lettering for beginners",
      "Naskh script practice",
      "Thuluth calligraphy",
      "Arabic writing workbook",
    ],
  },
  {
    slug: "mosque-architecture",
    title: "Mosque Architecture",
    subtitle: "A Visual Journey Through Sacred Spaces",
    description:
      "Explore stunning mosque designs from around the world with detailed coloring pages. From the Blue Mosque to the Great Mosque of Djenné.",
    longDescription: `Travel the world through the lens of Islamic architecture — no passport required.

This unique coloring book takes you on a visual tour of:
• 30+ iconic mosques from 20 countries
• Architectural styles: Ottoman, Mughal, Persian, Moorish, West African, and modern
• Detailed renderings of domes, minarets, mihrabs, and courtyards
• Historical notes and architectural insights for each mosque
• Single-sided pages with architectural detail close-ups

Featured mosques include:
• Sultan Ahmed (Blue) Mosque, Istanbul
• Sheikh Zayed Grand Mosque, Abu Dhabi
• Hassan II Mosque, Casablanca
• Great Mosque of Djenné, Mali
• Faisal Mosque, Islamabad
• And many more...

A perfect gift for:
• Architecture enthusiasts
• Travel lovers and culture explorers
• Islamic history students
• Anyone who appreciates beautiful sacred spaces`,
    coverImage: "/carousel/16.png",
    carouselImage: "/carousel/16.png",
    price: "$10.99",
    amazonUrl:
      "https://www.amazon.com/dp/B0EXAMPLE4?tag=barakahqalam-20",
    gumroadUrl: "https://gumroad.com/l/mosque-architecture-coloring",
    category: "Educational",
    categories: ["islamic-coloring", "islamic-english"],
    pages: 128,
    format: "8.5 x 11 inches, Paperback",
    seoKeywords: [
      "Mosque architecture coloring book",
      "Islamic architecture book",
      "famous mosques coloring",
      "Islamic travel book",
      "mosque coloring pages",
      "world architecture coloring",
      "Islamic cultural book",
    ],
  },
  {
    slug: "prophetic-stories",
    title: "Prophetic Stories",
    subtitle: "Illustrated Tales from Islamic Tradition",
    description:
      "Beautiful illustrations of beloved Islamic stories with educational coloring pages. Stories of the Prophets brought to life through art.",
    longDescription: `Bring the timeless stories of the Prophets to life through art and reflection.

This beautifully illustrated book includes:
• 25+ stories from the lives of the Prophets (peace be upon them)
• Full-page illustrations ready for coloring
• Summarized stories in simple, accessible language
• Quranic references for each story
• Discussion questions for family learning
• Arabic vocabulary words and their meanings

Stories include:
• Prophet Nuh (Noah) and the Ark
• Prophet Ibrahim (Abraham) and his unwavering faith
• Prophet Musa (Moses) and the parting of the sea
• Prophet Yunus (Jonah) and the whale
• Prophet Isa (Jesus) and his miracles
• Prophet Muhammad ﷺ — the Seal of the Prophets

Designed for:
• Islamic weekend schools and madrasas
• Family story time and discussions
• Children ages 6-14 (and adults too!)
• Ramadan evening activities
• Building a love for the Prophets in young hearts`,
    coverImage: "/carousel/009.png",
    carouselImage: "/carousel/009.png",
    price: "$8.99",
    amazonUrl:
      "https://www.amazon.com/dp/B0EXAMPLE5?tag=barakahqalam-20",
    gumroadUrl: "https://gumroad.com/l/prophetic-stories-coloring",
    category: "Children's Book",
    categories: ["islamic-coloring", "islamic-english"],
    pages: 104,
    format: "8.5 x 11 inches, Paperback",
    seoKeywords: [
      "stories of the prophets coloring book",
      "Islamic children's book",
      "Prophet stories for kids",
      "Islamic activity book",
      "Quran stories coloring",
      "Muslim kids book",
      "Islamic education coloring",
    ],
  },
  {
    slug: "moon-and-stars",
    title: "Moon & Stars",
    subtitle: "Celestial Islamic Designs & Cosmic Patterns",
    description:
      "Celestial Islamic designs featuring moon phases, stars, and cosmic patterns. A meditative journey through the night sky in Islamic art.",
    longDescription: `Explore the celestial beauty of Islamic art through the motif of the moon and stars.

This dreamy coloring book features:
• Moon phases in Islamic geometric frames
• Star patterns from 5-pointed to 16-pointed designs
• Crescent moon motifs in various artistic styles
• Quranic verses about the heavens and celestial bodies
• Astronomy-inspired geometric tessellations
• Cosmic landscapes blending science and spirituality

The moon and stars hold special significance in Islam — the lunar calendar marks our months, the crescent symbolizes renewal, and the stars guided travelers and inspired poets. This book celebrates that connection between faith and the cosmos.

Perfect for:
• Night-time relaxation and winding down
• Astronomy and science enthusiasts
• Spiritual meditation and reflection
• Ramadan and Eid decor inspiration
• Anyone who loves looking up at the stars`,
    coverImage: "/carousel/16.png",
    carouselImage: "/carousel/16.png",
    price: "$8.99",
    amazonUrl:
      "https://www.amazon.com/dp/B0EXAMPLE6?tag=barakahqalam-20",
    gumroadUrl: "https://gumroad.com/l/moon-stars-coloring",
    category: "Coloring Book",
    categories: ["islamic-coloring", "islamic-english"],
    pages: 96,
    format: "8.5 x 11 inches, Paperback",
    seoKeywords: [
      "moon and stars coloring book",
      "Islamic celestial art",
      "crescent moon coloring",
      "Islamic astronomy art",
      "Ramadan coloring book",
      "night sky coloring",
      "Islamic pattern book",
    ],
  },
  {
    slug: "sample-book-preview",
    title: "Sample Book Preview",
    subtitle: "A demonstration page to preview the book detail layout with lorem ipsum placeholder content.",
    description:
      "This is a sample book entry designed to showcase the book detail page layout. It contains ample lorem ipsum text to demonstrate typography, spacing, and design elements.",
    longDescription: `## Chapter I — Origins

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Chapter II — The Journey

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

• Beautifully crafted pages with intricate patterns
• High-quality paper suitable for all coloring mediums
• Single-sided designs to prevent bleed-through
• Inspirational quotes and reflections throughout
• Perfect for beginners and experienced colorists alike

## Chapter III — The Art

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.

## Chapter IV — The Reflection

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`,
    coverImage: "/carousel/16.png",
    carouselImage: "/carousel/16.png",
    price: "$9.99",
    amazonUrl:
      "https://www.amazon.com/dp/B0EXAMPLE?tag=barakahqalam-20",
    gumroadUrl: "https://gumroad.com/l/sample-book",
    category: "Educational",
    categories: ["islamic-english"],
    pages: 144,
    format: "8.5 x 11 inches, Paperback",
    seoKeywords: [
      "sample coloring book",
      "lorem ipsum preview",
      "book layout demo",
      "Islamic art preview",
      "coloring book sample",
    ],
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getBooksByCategorySlug(slug: string): Book[] {
  return books.filter((book) => book.categories.includes(slug));
}

export function getCategoryBySlug(slug: string) {
  return bookCategories.find((c) => c.slug === slug);
}
