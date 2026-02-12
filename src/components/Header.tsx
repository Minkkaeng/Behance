import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

function Header({ theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-surface/80 backdrop-blur-md shadow-soft border-b border-border-subtle"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className="text-lg font-bold tracking-tight text-text"
          onClick={() => handleNavClick("hero")}
        >
          MK <span className="text-accent">Portfolio</span>
        </motion.button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-text-sub hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="p-2 rounded-full bg-surface-soft border border-border-subtle text-text hover:border-accent transition-colors"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default Header;
