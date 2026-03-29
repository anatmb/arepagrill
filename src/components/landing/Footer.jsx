import { MessageCircle, Heart } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";


const LOGO_URL = "https://media.base44.com/images/public/user_69bae9a8ecb9173375c4d6ff/9886f1bf6_logo4.png";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo */}
          <img src={LOGO_URL} alt="Arepa Grill" className="h-14 object-contain" />

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Inicio', 'Menú', 'Nosotros', 'Galería', 'Contacto'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm text-muted-foreground hover:text-(--primary) transition-colors uppercase tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/arepagrill"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
            >
              <FaInstagram className="w-5 h-5 text-muted-foreground group-hover:text-(--primary) transition-colors" />
            </a>
            <a
              href="https://wa.me/584120000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-(--primary)/20 flex items-center justify-center transition-colors group"
            >
              <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-(--primary) transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arepa Grill. Todos los derechos reservados.
          </p>
          <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-(--primary) fill-(--primary)" /> en Venezuela
          </p>
        </div>
      </div>
    </footer>
  );
}