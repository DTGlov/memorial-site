import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";

const BrochureBanner = () => {
  // const handleDownload = () => {
  //   // Placeholder: In production, this would trigger a PDF download
  //   alert("Memorial brochure download would start here.");
  // };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
       <a
        href="/brochures/brochure-main.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-8 md:py-10 gradient-gold text-charcoal transition-all duration-300 hover:brightness-110 group"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-charcoal/10 rounded-full"
            >
              <FileDown className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
            
            <div className="text-left">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold">
                Tap to View & Download Memorial Brochure
              </p>
              <p className="font-sans text-sm md:text-base opacity-80 mt-1">
                Access the complete memorial program
              </p>
            </div>
            
            <ExternalLink className="w-5 h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 transition-opacity ml-2" />
          </div>
        </div>
      </a>
    </motion.section>
  );
};

export default BrochureBanner;
