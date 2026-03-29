// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Heart, Star, Users, Flame } from 'lucide-react';

export default function ChefSection() {
  // 1. Constantes dentro del componente para evitar el aviso de "Fast Refresh"
  const CHEF_IMAGE = "https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/a9ff4b504_dbb938297538a8a9ff92de32a3e5943d.jpg";

  const stats = [
    { icon: Heart, label: 'Recetas caseras', value: '15+' },
    { icon: Star, label: 'Años de experiencia', value: '60+' },
    // { icon: Users, label: 'Clientes felices', value: '500+' },
    { icon: Flame, label: 'Sabor Natural', value: '100%' },
  ];

  return (
    <section id="nosotros" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:gap-20 items-center">
          
          {/* Columna de Imagen */}
      {/* Columna de Imagen */}
<motion.div
  className="relative"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
>
  {/* Contenedor principal con padding para que el borde respire */}
  <div className="relative p-3"> 
    
    {/* 1. La Imagen con su sombra */}
    <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
      <img
        src={CHEF_IMAGE}
        alt="Nuestro Chef"
        className="w-full h-96 md:h-125 object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
    </div>
    
    {/* 2. EL BORDE CORREGIDO: 
        - Quitamos -bottom-4 y -right-4
        - Usamos inset-0 para que ocupe el mismo espacio que el padding del padre
        - Mantenemos rounded-2xl para que coincida con la imagen
    */}
    <div className="absolute inset-0 border-2 border-primary/40 rounded-2xl z-0" />
    
    {/* Badge Flotante */}
    <motion.div
      className="absolute top-8 -right-2 bg-primary text-primary-foreground font-body font-bold px-5 py-3 rounded-xl shadow-lg text-sm z-20"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      🔥 Hecho con amor
    </motion.div>
  </div>
</motion.div>

          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-(--primary)/50" />
              <span className="font-body text-(--primary) text-sm uppercase tracking-widest font-semibold">Nuestra historia</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Sabor de <span className="text-(--primary) italic">Venezuela</span> en cada plato
            </h2>

            <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed">
              Somos un emprendimiento familiar con raíces venezolanas profundas. 
              Cada receta es un pedacito de nuestra tierra, preparada con los mismos 
              ingredientes y el mismo amor con que nuestras abuelas cocinaban.
            </p>

            <p className="font-body text-muted-foreground mt-4 text-lg leading-relaxed">
              Nuestro chef aprendió el arte de la parrilla y las arepas desde pequeño, 
              y hoy lleva ese sabor auténtico a tu mesa con dedicación y pasión.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center group">
                    {/* 3. Agregado shrink-0 y hover effect */}
                    <Icon className="w-6 h-6 text-(--primary) mx-auto mb-2 shrink-0 transition-transform group-hover:scale-110" />
                    <p className="font-heading text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="font-body text-muted-foreground text-xs mt-1 leading-tight uppercase tracking-tighter">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}