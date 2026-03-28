// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const menuItems = [
  {
    title: 'Arepas Rellenas',
    description: 'Arepas de maíz crujientes por fuera, suaves por dentro, rellenas con los mejores ingredientes: carne mechada, pollo, queso y mucho más.',
    image: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/81b7f8329_b40f8f63571d753d4e97fb3e14f4eb43.jpg',
  },
  {
    title: 'Empanadas',
    description: 'Empanadas doradas y crujientes, hechas a mano con masa de maíz y rellenos generosos. Perfectas para cualquier momento del día.',
    image: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/e0586403e_Gemini_Generated_Image_e2ezhee2ezhee2ez.png',
  },
  {
    title: 'Pollo Asado a la Brasa',
    description: 'Pollo marinado con nuestro sazón especial, asado lentamente al carbón hasta quedar jugoso y lleno de sabor. Una experiencia irresistible.',
    image: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/a9f60bb19_b7e0038f65e919e4ba6883e7bba72902.jpg',
  },
  {
    title: 'Pinchos de Pollo',
    description: 'Brochetas de pollo a la parrilla con vegetales frescos, bañadas en nuestra salsa secreta. Ideales para compartir.',
    image: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/a9ff4b504_dbb938297538a8a9ff92de32a3e5943d.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-(--primary)/80" />
            <Flame className="w-5 h-5 text-(--primary)" />
            <div className="w-12 h-px bg-(--primary)/80" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Nuestro <span className="text-(--primary) italic">Menú</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Cada plato está preparado con recetas tradicionales y los ingredientes más frescos
          </p>
        </motion.div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-(--primary)/30 transition-all duration-500"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-(--primary) transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-(--primary) scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}