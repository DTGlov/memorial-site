import { motion } from "framer-motion";
import heroImage from "@/assets/hero-memorial-new.jpeg";

const HeroSection = () => {
  const scrollToDonation = () => {
    const element = document.getElementById("donations");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-charcoal py-16 px-6">
      {/* Content */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Memorial Image */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-lg overflow-hidden shadow-2xl ring-4 ring-gold/30">
                <img
                  src={heroImage}
                  alt="Emmanuel Narh Glover"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold" />
            </motion.div>
          </div>

          {/* Decorative Element */}
          <div className="divider-gold mb-8" />

          <p className="text-white mb-4 italic text-sm">1942 - 2025</p>
          
          <p className="text-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
            In Loving Memory
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-medium leading-tight mb-6">
            Celebrating the Life of
            <span className="block mt-2 text-gold">Emmanuel Narh Glover</span>
          </h1>
          
          <p className="text-cream/80 font-sans text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            A life beautifully lived, a soul deeply loved, and a memory that will forever remain in our hearts.
          </p>
          
          {/* Decorative Element */}
          <div className="divider-gold mb-10" />
          
          <motion.button
            onClick={scrollToDonation}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-sans font-semibold text-base rounded-lg hover:bg-gold-light transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Support the Family
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;