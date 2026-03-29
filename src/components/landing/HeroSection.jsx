// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/9886f1bf6_logo4.png";
const BG_IMAGE = "https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/a9f60bb19_b7e0038f65e919e4ba6883e7bba72902.jpg";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Pollo a la parrilla"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 md:pt-24">
        {/* <motion.img
          src={LOGO_URL}
          alt="Arepa Grill Logo"
          className="w-48 md:w-64 lg:w-72 mb-8"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        /> */}

        <motion.p
          className="font-body text-(--primary) text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Sabor venezolano auténtico
        </motion.p>

        <motion.h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Comida casera hecha con{' '}
          <span className="text-(--primary) italic">pasión</span>
        </motion.h1>

        <motion.p
          className="font-body text-foreground/70 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Arepas rellenas, empanadas crujientes y pollo asado a la brasa. 
          El sabor de Venezuela en cada bocado.
        </motion.p>

        <motion.a
          href="#menu"
          className="mt-10 inline-flex items-center gap-2 bg-(--primary) text-(--primary-foreground) font-body font-semibold px-8 py-4 rounded-full text-base hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Ver nuestro menú
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8 text-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}