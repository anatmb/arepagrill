// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

const menuCategories = [
  {
    name: 'Arepas',
    image: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/81b7f8329_b40f8f63571d753d4e97fb3e14f4eb43.jpg',
    items: [
      { name: 'Pollo', price: '$6.000' },
      { name: 'Jamón y queso', price: '$5.000' },
      { name: 'Queso', price: '$5.000' },
      { name: 'Jamón', price: '$4.500' },
    ],
  },
  {
    name: 'Empanadas',
    image: 'https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/e0586403e_Gemini_Generated_Image_e2ezhee2ezhee2ez.png',
    items: [
      { name: 'Una docena', price: '$15.000' },
      { name: 'Media docena', price: '$7.500' },
    ],
  },
  {
    name: 'Brochetas',
    image: '/img/dbb938297538a8a9ff92de32a3e5943d.jpg',
    items: [
      { name: 'Suprema x2', price: '$8.000' },
    ],
  },
  {
    name: 'Pollo Asado',
    image: '/img/pollo.jpeg',
    items: [
      { name: '1 Pollo + 12 arep.', price: '$20.000' },
      { name: '½ Pollo + 6 arep.', price: '$10.000' },
    ],
  },
];

export default function PricesSection() {
  return (
    <section id="precios" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto"> {/* Aumentado el ancho máximo para que quepan las 4 */}

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-(--primary)/50" />
            <DollarSign className="w-5 h-5 text-(--primary)" />
            <div className="w-8 h-px bg-(--primary)/50" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Nuestro <span className="text-primary italic">Precios</span>
          </h2>
        </motion.div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-heading text-lg md:text-xl font-bold text-primary mb-3">
                  {cat.name}
                </h3>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <span className="text-(--foreground) leading-tight">{item.name}</span>
                      <span className="font-bold text-(--primary)">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center font-body text-muted-foreground mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📞 Pedidos: <span className="text-primary font-semibold">3777 25-3946</span>
        </motion.p>
      </div>
    </section>
  );
}