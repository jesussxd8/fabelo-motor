"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

export default function FabeloMotorCinematic() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll al abrir menú
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Scroll suave con offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <div className="font-inter text-gray-200 bg-[#0b0b0b] scroll-smooth overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed w-full z-[100] bg-black/50 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo-fabelo.png"
              alt="Fabelo Motor"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold tracking-tight text-[#e50914]">
              Fabelo Motor
            </h1>
          </div>

          {/* MENÚ DESKTOP */}
          <nav className="hidden md:flex space-x-6 text-gray-300">
            {["Inicio", "Nosotros", "Servicios", "Galería", "Opiniones"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-[#e50914] transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <a
            href="https://wa.me/34636843332"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="bg-[#e50914] hover:bg-red-700 text-white font-semibold shadow-lg shadow-red-900/30">
              Reserva tu cita
            </Button>
          </a>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-transform"
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>

        {/* PANEL LATERAL MÓVIL */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
                onClick={() => setOpen(false)}
              />
              <motion.div
                key="menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.5 }}
                className="fixed inset-0 right-0 w-4/5 sm:w-1/2 h-screen z-[9999] bg-gradient-to-b from-[#1a1a1a]/95 to-black/90 backdrop-blur-xl shadow-2xl border-l border-gray-800 flex flex-col items-center justify-center space-y-8 text-xl text-gray-200 overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white z-10"
                >
                  <X size={30} />
                </button>
                <div className="flex flex-col items-center space-y-2 z-10 mt-8">
                  <img
                    src="/logo-fabelo.png"
                    alt="Fabelo Motor"
                    className="w-16 h-16 rounded-full shadow-lg shadow-black/50"
                  />
                  <p className="text-[#e50914] font-bold text-2xl tracking-wide">
                    Fabelo Motor
                  </p>
                </div>

                <nav className="flex flex-col items-center space-y-6 z-10 mt-6">
                  {["Inicio", "Nosotros", "Servicios", "Galería", "Opiniones"].map(
                    (item, i) => (
                      <motion.button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-2xl font-medium tracking-wide hover:text-[#e50914] transition-colors"
                      >
                        {item}
                      </motion.button>
                    )
                  )}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="z-10 mt-8"
                >
                  <a
                    href="https://wa.me/34636843332"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#e50914] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-red-900/40"
                    >
                      Reserva tu cita
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* HERO con animación cinematográfica */}
      <section
        id="inicio"
        className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <motion.video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video-taller.mp4"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative z-10 p-6"
        >
          <motion.img
            src="/logo-fabelo.png"
            alt="Logo Fabelo Motor"
            className="mx-auto w-32 md:w-44 mb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          />
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Cuidamos tu vehículo como si fuera nuestro
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Especialistas en mecánica avanzada, chapa, pintura y mantenimiento de vehículos de alta gama.
          </p>
          <a href="https://wa.me/34636843332" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#e50914] hover:bg-red-700 text-white shadow-lg shadow-red-900/30 px-8 py-6 text-lg"
            >
              Reserva tu cita en WhatsApp
            </Button>
          </a>
        </motion.div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 bg-gradient-to-b from-[#0b0b0b] to-black text-center">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-10 text-[#e50914]">Quiénes Somos</h3>
          <p className="text-gray-400 leading-relaxed mb-12">
            En <span className="text-white font-semibold">Fabelo Motor</span> llevamos más de 15 años cuidando el rendimiento, la seguridad y la estética de cada vehículo.
            Ofrecemos una experiencia premium basada en la confianza, la innovación y la calidad en cada detalle.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["Confianza", "Rapidez", "Calidad", "Honestidad"].map((valor) => (
              <Card
                key={valor}
                className="bg-white/5 backdrop-blur-xl border border-white/10 text-gray-200 w-40 shadow-lg hover:shadow-[#e50914]/40 transition-transform hover:-translate-y-1"
              >
                <CardContent className="p-4 text-center font-semibold tracking-wide">
                  {valor}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-black">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-[#e50914]">Nuestros Servicios</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Mecánica general",
              "Diagnóstico computarizado",
              "Cambio de aceite y filtros",
              "Frenos y suspensión",
              "Alineación y balanceo",
              "Chapa y pintura",
              "Aire acondicionado automotriz",
            ].map((servicio) => (
              <motion.div
                key={servicio}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg"
              >
                <p className="text-lg font-semibold text-gray-200">{servicio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-24 bg-[#0b0b0b]">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-[#e50914]">Galería</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/galeria${i}.jpg`}
                alt={`Imagen ${i}`}
                className="rounded-xl shadow-lg hover:scale-105 transition-transform object-cover w-full h-60"
              />
            ))}
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" className="py-24 bg-black">
        <div className="container mx-auto text-center max-w-5xl">
          <h3 className="text-3xl font-bold mb-10 text-[#e50914]">
            Opiniones de Clientes
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nombre: "Carlos M.", texto: "Excelente atención y resultados impecables." },
              { nombre: "Laura G.", texto: "Rápidos, confiables y con acabados de primera." },
              { nombre: "Javier R.", texto: "El mejor taller premium de la isla." },
            ].map((test, i) => (
              <Card
                key={i}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 text-gray-200 hover:scale-105 transition-transform"
              >
                <CardContent className="p-6">
                  <p className="italic mb-4 text-gray-300">“{test.texto}”</p>
                  <p className="font-semibold text-white">{test.nombre}</p>
                  <p className="text-yellow-400">★★★★★</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 bg-gradient-to-b from-black to-[#0b0b0b]"
      >
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-3xl font-bold text-[#e50914] mb-6">
            Contáctanos
          </h3>
          <p className="flex justify-center items-center text-gray-300">
            <MapPin className="mr-2 text-[#e50914]" /> Carr. a los Olivos, 35300
            Sta Brígida, Las Palmas
          </p>
          <p className="flex justify-center items-center text-gray-300">
            <Phone className="mr-2 text-[#e50914]" /> 636 84 33 32
          </p>
          <p className="flex justify-center items-center text-gray-300">
            <Clock className="mr-2 text-[#e50914]" /> Lunes a Viernes: 9:00 -
            14:30
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/34636843332"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#e50914] hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg shadow-xl shadow-red-900/30"
              >
                Habla con nosotros en WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0b0b] border-t border-white/10 py-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="cursor-pointer hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="cursor-pointer hover:text-pink-500" />
          </a>
          <a href="https://wa.me/34636843332" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="cursor-pointer hover:text-green-500" />
          </a>
        </div>
        <p className="text-sm">
          © 2025 Taller Fabelo Motor · Todos los derechos reservados
        </p>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/34636843332"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="text-white" />
      </a>
    </div>
  );
}
