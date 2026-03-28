// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const images = [
  {
    src: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/81b7f8329_b40f8f63571d753d4e97fb3e14f4eb43.jpg',
    alt: 'Arepas rellenas',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/e0586403e_Gemini_Generated_Image_e2ezhee2ezhee2ez.png',
    alt: 'Empanadas',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/a9f60bb19_b7e0038f65e919e4ba6883e7bba72902.jpg',
    alt: 'Pollo asado',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/a9ff4b504_dbb938297538a8a9ff92de32a3e5943d.jpg',
    alt: 'Pinchos',
    span: 'col-span-2 row-span-1',
  },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary/50" />
            <Camera className="w-5 h-5 text-primary" />
            <div className="w-12 h-px bg-primary/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Nuestra <span className="text-primary italic">Galería</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Un vistazo a los sabores que preparamos con amor cada día
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 md:gap-6 h-125 md:h-150">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-body font-semibold text-white text-lg tracking-wide drop-shadow">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}