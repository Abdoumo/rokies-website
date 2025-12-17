import { Heart, Star, Flower2, Download } from "lucide-react";

export default function Index() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/birthday.zip"; // file in public folder
    link.download = "birthday.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className="min-h-screen w-full bg-gradient-soft overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-rose-200 rounded-full opacity-15 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-8 max-w-4xl">
            {/* Animated stars */}
            <div className="flex justify-center gap-4 mb-6">
              <Star className="w-6 h-6 text-yellow-400 animate-float" style={{ animationDelay: "0s" }} />
              <Flower2 className="w-6 h-6 text-pink-400 animate-float" style={{ animationDelay: "0.3s" }} />
              <Star className="w-6 h-6 text-yellow-400 animate-float" style={{ animationDelay: "0.6s" }} />
            </div>

            {/* Main title */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-rose-600 font-medium tracking-wide">
                December 17th, 2002
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                Happy Birthday,
                <br />
                <span className="text-gradient-warm">Rokaya</span>
              </h1>
              <p className="text-xl sm:text-2xl text-foreground/80 font-medium">
                A Special Day for a Special Person
              </p>
            </div>

            {/* Welcome message */}
            <div className="bg-white/70 backdrop-blur rounded-3xl p-8 sm:p-12 shadow-lg border border-rose-100">
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
                To Rokaya, the beautiful soul who has brought so much light into the world. On this special day, I want to take a moment to wish you the happiest birthday. Although our paths may have taken different directions, my respect and admiration for you remain unchanged. You deserve all the love and joy the world has to offer.
              </p>
            </div>

            {/* Decorative heart */}
            <div className="pt-4">
              <Heart className="w-8 h-8 text-primary mx-auto animate-float" style={{ animationDelay: "0.2s" }} />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-white/30 backdrop-blur">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left side - Image placeholder with gradient */}
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-yellow-100 to-rose-100 flex items-center justify-center">
                  <div className="text-center">
                    <Flower2 className="w-24 h-24 text-pink-400 mx-auto opacity-50 mb-4" />
                    <p className="text-foreground/60 font-medium">A peaceful moment</p>
                  </div>
                </div>
              </div>

              {/* Right side - Message */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
                    Your Remarkable Heart
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Rokaya, your kindness, your strength, and your heart are qualities that have inspired everyone lucky enough to know you. I've always seen in you a person of incredible value—someone who has the power to make the world a better place just by being herself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Messages Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-center text-foreground mb-12">
              My Heartfelt Wishes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Message Card 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I truly hope today is filled with everything that brings you joy, peace, and laughter. You deserve moments that take your breath away and memories that warm your heart.
                </p>
                <div className="mt-6 flex justify-center">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
              </div>

              {/* Message Card 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  As you continue on your journey through life, may each year ahead be filled with new dreams, accomplishments, and the kind of happiness that only you deserve. May the love around you grow stronger, and may you find success in everything you do.
                </p>
                <div className="mt-6 flex justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Message Card 3 */}
            <div className="bg-gradient-to-r from-pink-100 via-yellow-50 to-rose-100 rounded-2xl p-8 sm:p-12 shadow-lg border border-rose-200">
              <p className="text-lg text-foreground/90 leading-relaxed">
                No matter where life takes us, I will always be grateful for the moments we've shared. And I'll always wish you the very best, today and always.
              </p>
            </div>
          </div>
        </section>

        {/* Quotes Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-white/40 backdrop-blur">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-center text-foreground mb-16">
              Inspiration for Your Journey
            </h2>

            <div className="space-y-8">
              {[
                "May your life always be as bright as your smile.",
                "The future belongs to those who believe in the beauty of their dreams.",
                "May you always walk in sunshine, Rokaya.",
                "With all my best wishes for your happiness and success.",
              ].map((quote, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md border border-rose-100"
                >
                  <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/80 italic leading-relaxed">
                    "{quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section (Celebration Moments) */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-center text-foreground mb-16">
              Celebrating You
            </h2>

            <div className="relative space-y-12 md:space-y-16">
              {/* Timeline marker - hidden on mobile to prevent overlap */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200 to-yellow-100 transform -translate-x-1/2" />

              {[
                { year: "2002", title: "Born", description: "A beautiful soul entered the world" },
                {
                  year: "Today",
                  title: "Another Year of Growth",
                  description: "Celebrating all that you are and all that you'll become",
                },
                {
                  year: "Ahead",
                  title: "Endless Possibilities",
                  description: "May your future be filled with dreams come true",
                },
              ].map((item, index) => (
                <div key={index} className={`flex gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}>
                  <div className="hidden md:flex flex-1 items-center justify-end">
                    {index % 2 === 0 && (
                      <div className="text-right pr-8 md:pr-12">
                        <p className="text-4xl md:text-5xl font-display font-bold text-primary/40">{item.year}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 border-primary shadow-lg flex items-center justify-center">
                      {index === 0 ? (
                        <Flower2 className="w-6 h-6 text-primary" />
                      ) : index === 1 ? (
                        <Heart className="w-6 h-6 text-primary" />
                      ) : (
                        <Star className="w-6 h-6 text-yellow-400" />
                      )}
                    </div>
                    <p className="md:hidden text-xl md:text-2xl font-display font-bold text-primary/60 mt-4">
                      {item.year}
                    </p>
                  </div>

                  <div className="flex-1 md:pt-2">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-rose-100">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-1">
                    {index % 2 === 1 && (
                      <div className="pl-8 md:pl-12">
                        <p className="text-4xl md:text-5xl font-display font-bold text-primary/40">{item.year}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-white/40 backdrop-blur">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8">
              Keep This Special
            </h2>
            <p className="text-foreground/70 mb-8 text-lg">
              Download the birthday wishes to cherish forever
            </p>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <Download className="w-6 h-6" />
              Download Birthday Wishes
            </button>

            <div className="mt-8 p-6 bg-white rounded-2xl shadow-md border border-rose-100">
              <p className="text-sm text-foreground/60">
                📦 Click the button above to download a special keepsake
              </p>
            </div>
          </div>
        </section>

        {/* Final Message Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-foreground">
              Happy Birthday, Rokaya!
            </h2>

            <div className="bg-gradient-to-r from-pink-100 via-yellow-50 to-rose-100 rounded-3xl p-10 sm:p-14 shadow-xl border border-rose-200">
              <p className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-relaxed mb-6">
                Here's to another amazing year ahead
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Filled with blessings, happiness, and growth. You are truly an amazing person, and I hope your year ahead is as bright as you are.
              </p>
            </div>

            <div className="flex justify-center gap-6 pt-8">
              <Heart className="w-8 h-8 text-primary animate-float" style={{ animationDelay: "0s" }} />
              <Flower2 className="w-8 h-8 text-pink-400 animate-float" style={{ animationDelay: "0.3s" }} />
              <Star className="w-8 h-8 text-yellow-400 animate-float" style={{ animationDelay: "0.6s" }} />
            </div>

            <p className="text-lg text-foreground/70 pt-8 italic">
              With all my best wishes for your happiness and success.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-rose-100 bg-white/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-foreground/60">
              Made with love and best wishes for Rokaya on her special day
            </p>
            <p className="text-sm text-foreground/50 mt-2">
              December 17th, 2024
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
