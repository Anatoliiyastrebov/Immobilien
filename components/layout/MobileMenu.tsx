"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-dark px-8 py-8"
            aria-label="Mobile Navigation"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl text-white">Menü</span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-sm p-2 text-white transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-label="Menü schließen"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="mt-16 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="font-serif text-2xl font-light text-white transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button href="#kontakt" variant="primary" size="lg" className="w-full">
                Beratung anfragen
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
