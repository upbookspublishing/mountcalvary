import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bookCoverOpenDoor from "@/assets/book-cover-open-door.jpeg";

const books = [
  {
    title: "An Open Door",
    author: "Eneas Francisco",
    description: "Gaining Access to a Fruitful Life.",
    category: "Spiritual Growth",
    cover: bookCoverOpenDoor,
  },
  {
    title: "The Power of Prayer",
    author: "Sarah Thompson",
    description: "A practical guide to deepening your prayer life and hearing God's voice.",
    category: "Prayer & Devotion",
    cover: null,
  },
  {
    title: "Faith for Families",
    author: "Dr. Michael & Lisa Chen",
    description: "Building a Christ-centered home in today's challenging world.",
    category: "Family Life",
    cover: null,
  },
];

const Books = () => {
  return (
    <section id="books" className="bg-accent py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
          <div><span className="eyebrow">Equipping the church</span>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-6xl">
            Resources for a fruitful life.
          </h2>
          </div><p className="max-w-lg text-lg leading-8 text-muted-foreground md:justify-self-end">
            Explore our collection of faith-building books written to inspire, encourage, and guide you on your spiritual journey.
          </p>
        </div>

        {/* Books Grid */}
        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden rounded-none border-0 bg-card shadow-none"
            >
              {/* Book Cover */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                {book.cover ? (
                  <img 
                    src={book.cover} 
                    alt={`${book.title} book cover`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-primary/40">
                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="inline-block border border-primary/30 px-3 py-1 text-xs font-medium text-primary">
                        {book.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-primary/80 mt-1">by {book.author}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {book.description}
                </p>
                <Button variant="outline" className="mt-2 w-full rounded-none">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Books;
