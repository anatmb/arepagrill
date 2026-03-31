// import { useState, useEffect } from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const LOGO_URL =
//   "https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/9886f1bf6_logo4.png";

// const navLinks = [
//   { label: "Inicio", href: "#inicio" },
//   { label: "Menú", href: "#menu" },
//   { label: "Nosotros", href: "#nosotros" },
//   { label: "Galería", href: "#galeria" },
//   { label: "Contacto", href: "#contacto" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/30"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         <a href="#inicio">
//           <img
//             src={LOGO_URL}
//             alt="Arepa Grill"
//             className="h-10 md:h-12 w-auto object-contain aspect-square rounded-full p-1.5 border-2 border-primary/20 bg-card max-w-10 md:max-w-12"
//           />
//         </a>

//         {/* Desktop nav */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-sm font-body font-medium text-foreground/80 hover:text-(--primary) transition-colors duration-300 tracking-wide uppercase"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         {/* Mobile toggle */}
//         <button
//           className="md:hidden text-foreground"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
//           >
//             <div className="flex flex-col items-center gap-4 py-6">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="text-base font-body font-medium text-foreground/80 hover:text-(--primary) transition-colors uppercase tracking-wide"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/9886f1bf6_logo4.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    
    // Bloquear scroll del cuerpo cuando el menú móvil está abierto
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#inicio" className="z-50">
          <img
            src={LOGO_URL}
            alt="Arepa Grill"
            className="h-10 w-10 md:h-12 md:w-12 object-contain aspect-square rounded-full p-1.5 border-2 border-primary/20 bg-card"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-foreground/80 hover:text-(--primary) transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle - Le damos Z-50 para que siempre esté arriba */}
        <button
          className="md:hidden text-foreground z-50 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} className="text-(--primary)" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 z-40"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-heading font-bold text-foreground hover:text-(--primary) transition-colors uppercase tracking-widest"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}