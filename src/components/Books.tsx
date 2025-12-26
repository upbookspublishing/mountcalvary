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
    <section id="books" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Library</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Books That Transform
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our collection of faith-building books written to inspire, encourage, and guide you on your spiritual journey.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border/50 bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Book Cover */}
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative overflow-hidden">
                {book.cover ? (
                  <img 
                    src={book.cover} 
                    alt={`${book.title} book cover`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {book.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                <Button variant="ghost" className="w-full mt-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
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
