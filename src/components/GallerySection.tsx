import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "../components/ui/carousel";
import { useState } from "react";

import img1 from "../assets/gallery/1.jpeg";
import img2 from "../assets/gallery/11.jpeg";
import img3 from "../assets/gallery/12.jpeg";
import img4 from "../assets/gallery/15.jpeg";
// import img5 from "../assets/gallery/5.jpg";
// import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpeg";
// import img8 from "../assets/gallery/8.jpg";
// import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";

const galleryImages = [
    { id: 1, src: img1, alt: "Memory 1" },
    // { id: 2, src: img2, alt: "Memory 2" },
    // { id: 3, src: img3, alt: "Memory 3" },
    // { id: 4, src: img4, alt: "Memory 4" },
    // { id: 5, src: img5, alt: "Memory 5" },
    // { id: 6, src: img6, alt: "Memory 6" },
    { id: 7, src: img7, alt: "Memory 7" },
    { id: 8, src: img3, alt: "Memory 8" },
    { id: 9, src: img2, alt: "Memory 9" },
     { id: 4, src: img4, alt: "Memory 4" },
    { id: 10, src: img10, alt: "Memory 10" },
];

const GallerySection = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    // Auto-slide every 3 seconds
    useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [api]);

    return (
        <section className="py-20 px-6 bg-cream-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="divider-gold mb-6" />
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                        Cherished Memories
                    </h2>
                    <p className="text-charcoal-light font-sans max-w-xl mx-auto">
                        A collection of precious moments celebrating a life well lived.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {galleryImages.map((image, index) => (
                                <CarouselItem
                                    key={image.id}
                                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg ring-2 ring-gold/20 hover:ring-gold/40 transition-all duration-300">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-4 bg-gold text-charcoal border-none hover:bg-gold-light" />
                        <CarouselNext className="hidden md:flex -right-4 bg-gold text-charcoal border-none hover:bg-gold-light" />
                    </Carousel>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index
                                        ? "bg-gold w-6"
                                        : "bg-charcoal/30 hover:bg-charcoal/50"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GallerySection;