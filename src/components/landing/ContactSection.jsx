// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+58 412-000-0000',
    href: 'tel:+584120000000',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Escríbenos aquí',
    href: 'https://wa.me/584120000000',
  },
  {
    icon: FaInstagram,
    label: 'FaInstagram ',
    value: '@arepagrill',
    href: 'https://instagram.com/arepagrill',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Venezuela',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun–Dom: 11am – 9pm',
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-primary/50" />
              <span className="font-body text-primary text-sm uppercase tracking-widest">Contáctanos</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              ¿Listo para{' '}
              <span className="text-primary italic">ordenar?</span>
            </h2>

            <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed">
              Contáctanos por WhatsApp o Instagram para hacer tu pedido. 
              Tenemos delivery y también puedes recoger en tienda. 
              ¡Te esperamos con el mejor sabor venezolano!
            </p>

            {/* Contact cards */}
            <div className="mt-10 flex flex-col gap-4">
              {contacts.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/40 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-body font-semibold text-foreground mt-0.5">{item.value}</p>
                    </div>
                  </motion.div>
                );

                return item.href && item.href !== '#' ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-background border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

              <h3 className="font-heading text-3xl font-bold text-foreground relative z-10">
                Haz tu pedido ahora 🔥
              </h3>
              <p className="font-body text-muted-foreground mt-3 leading-relaxed relative z-10">
                Envíanos un mensaje y te atendemos de inmediato. 
                Pedidos disponibles para delivery y para llevar.
              </p>

              <a
                href="https://wa.me/584120000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg relative z-10"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir por WhatsApp
              </a>

              <a
                href="https://instagram.com/arepagrill"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-3 bg-linear-to-t from-purple-600 to-pink-500 hover:opacity-90 text-white font-body font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg relative z-10"
              >
                <FaInstagram className="w-5 h-5" />
                Síguenos en Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}