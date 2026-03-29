// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChefHat, Heart } from 'lucide-react';

const FOUNDERS_IMAGE = "https://media.base44.com/images/public/69c4093e68028b9b61cc8283/bbc0c5d34_fundadores.png";

export default function FoundersSection() {
  return (
    <section id="cocineros" className="py-24 md:py-32 px-6 bg-card">
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
            <div className="w-12 h-px bg-(--primary)/50" />
            <ChefHat className="w-5 h-5 text-(--primary)" />
            <div className="w-12 h-px bg-(--primary)/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Nuestros <span className="text-(--primary) italic">Cocineros</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Los corazones y manos detrás de cada plato de Arepa Grill
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={FOUNDERS_IMAGE}
                alt="Fundadores de Arepa Grill"
                className="w-full h-125 md:h-145 object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-(--primary)/30 rounded-2xl -z-10" />
            {/* Badge */}
            <motion.div
              className="absolute top-6 -right-4 md:top-8 md:-right-6 bg-(--primary) text-(--primary-foreground) font-body font-bold px-5 py-3 rounded-xl shadow-lg shadow-(--primary)/30 text-sm"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              👨‍🍳 Los fundadores
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-(--primary)/50" />
              <span className="font-body text-(--primary) text-sm uppercase tracking-widest">Con amor desde Venezuela</span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Una pareja,{' '}
              <span className="text-primary italic">una pasión</span>
            </h3>

            <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed">
              Detrás de cada arepa, cada empanada y cada brocheta hay dos manos llenas de amor y experiencia. 
              Nuestros fundadores llevan décadas perfeccionando las recetas tradicionales venezolanas 
              que hoy comparten con cada cliente.
            </p>

            <p className="font-body text-muted-foreground mt-4 text-lg leading-relaxed">
              Cocinamos como en casa — con ingredientes frescos, sazón auténtico 
              y el cariño que solo una familia puede poner en la comida.
            </p>

            {/* Highlight */}
            <div className="mt-10 flex items-start gap-4 p-5 rounded-xl bg-background border border-(--primary)/20">
              <Heart className="w-6 h-6 text-(--primary) shrink-0 mt-1" />
              <p className="font-body text-foreground text-base leading-relaxed">
                <span className="font-semibold text-(--primary)">Cada plato es hecho a mano</span>, 
                con recetas que han pasado de generación en generación en nuestra familia venezolana.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}