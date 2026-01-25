import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import obituaryPoster from "../assets/dad-obituary.jpeg";

const BurialServiceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <p className="text-gold font-sans text-sm uppercase tracking-[0.25em] mb-3">
            Service Details
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Burial Service
          </h2>
          <p className="text-charcoal-light font-sans text-lg mb-10">
            In honor of Emmanuel Narh Glover
          </p>
          <div className="divider-gold mb-12" />
        </motion.div>

        {/* Obituary Poster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 rounded-2xl transform rotate-2" />
            <img
              src={obituaryPoster}
              alt="Obituary of Emmanuel Narh Glover"
              className="relative w-full rounded-2xl shadow-2xl border-4 border-cream-dark"
            />
          </div>
        </motion.div>

        {/* Get Directions Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://maps.app.goo.gl/Ct29BVRWQ9WLDvNFA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-cream font-sans font-semibold text-base rounded-lg hover:bg-charcoal-light transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BurialServiceSection;
