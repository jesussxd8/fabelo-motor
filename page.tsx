"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function FabeloMotorPremium() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // === PRELOADER CONTROL ===
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // === BLOQUEAR SCROLL CUANDO HAY OVERLAY ===
  useEffect(() => {
    document.body.style.overflow = open || loading ? "hidden" : "auto";
  }, [open, loading]);

  // === SCROLL SUAVE CON OFFSET DEL HEADER ===
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setOpen(false);
  };

  // === ANIMACIÓN DE ENTRADA POR SCROLL ===
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-inter text-gray-200 bg-[#0b0b0b] scroll-smooth overflow-x-hidden relative">
      {/* === PRELOADER === */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
          >
            <motion.img
              src="/logo-fabelo.png"
              alt="Fabelo Motor"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-28 h-28 mb-6"
            />
            <motion.div
              className="w-40 h-1.5 bg-gray-800 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ duration: 2 }}
            >
              <motion.div
                className="h-full bg-[#e50914]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2 }}
              />
            </motion.div>
            <p className="mt-6 text-gray-400 text-sm tracking-widest uppercase">
              Iniciando experiencia Fabelo Motor...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === HEADER === */}
      <header className="fixed w-full z-[100] bg-black/50 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("inicio")}
          >
            <img
              src="/logo-fabelo.png"
              alt="Logo Fabelo Motor"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold tracking-tight text-[#e50914]">
              Fabelo Motor
            </h1>
          </div>

          {/* MENÚ DESKTOP */}
          <nav className="hidden md:flex space-x-6 text-gray-300">
            {[
              { name: "Inicio", id: "inicio" },
              { name: "Nosotros", id: "nosotros" },
              { name: "Servicios", id: "servicios" },
              { name: "Galería", id: "galeria" },
              { name: "Opiniones", id: "opiniones" },
              { name: "Contacto", id: "contacto" },
            ].map(({ name, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-[#e50914] transition-colors"
              >
                {name}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/34636843332"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <button className="bg-[#e50914] hover:bg-red-700 text-white font-semibold shadow-lg shadow-red-900/30 px-6 py-3 rounded-lg transition-transform hover:scale-105">
              Reserva tu cita
            </button>
          </a>

          {/* MENÚ MÓVIL */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-transform"
            aria-label="Abrir menú"
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>

        {/* PANEL MÓVIL */}
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
                className="fixed inset-0 right-0 w-4/5 sm:w-1/2 h-screen z-[9999] bg-gradient-to-b from-[#1a1a1a]/95 to-black/90 backdrop-blur-xl shadow-2xl border-l border-gray-800 flex flex-col items-center justify-center space-y-8 text-xl text-gray-200"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white"
                  aria-label="Cerrar menú"
                >
                  <X size={30} />
                </button>
                <img
                  src="/logo-fabelo.png"
                  alt="Logo Fabelo Motor"
                  className="w-16 h-16 rounded-full shadow-lg"
                />
                <p className="text-[#e50914] font-bold text-2xl">Fabelo Motor</p>

                <nav className="flex flex-col items-center space-y-6 mt-4">
                  {[
                    { name: "Inicio", id: "inicio" },
                    { name: "Nosotros", id: "nosotros" },
                    { name: "Servicios", id: "servicios" },
                    { name: "Galería", id: "galeria" },
                    { name: "Opiniones", id: "opiniones" },
                    { name: "Contacto", id: "contacto" },
                  ].map(({ name, id }, i) => (
                    <motion.button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-2xl font-medium hover:text-[#e50914] transition-colors"
                    >
                      {name}
                    </motion.button>
                  ))}
                </nav>

                <a
                  href="https://wa.me/34636843332"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <button className="bg-[#e50914] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-red-900/40">
                    Reserva tu cita
                  </button>
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* === HERO === */}
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
          poster="/poster-video.jpg"
          initial={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 p-6"
        >
          <img
            src="/logo-fabelo.png"
            alt="Logo Fabelo Motor"
            className="mx-auto w-32 md:w-44 mb-6 drop-shadow-xl"
          />
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Cuidamos tu vehículo como si fuera nuestro
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Especialistas en mecánica avanzada, chapa, pintura y mantenimiento de vehículos de alta gama.
          </p>
          <a
            href="https://wa.me/34636843332"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#e50914] hover:bg-red-700 text-white shadow-lg shadow-red-900/30 px-8 py-6 text-lg rounded-lg">
              Reserva tu cita en WhatsApp
            </button>
          </a>
        </motion.div>
      </section>

      {/* === NOSOTROS === */}
      <motion.section
        id="nosotros"
        className="py-24 bg-gradient-to-b from-[#0b0b0b] to-black text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-10 text-[#e50914]">
            Quiénes Somos
          </h3>
          <p className="text-gray-400 leading-relaxed mb-12">
            En{" "}
            <span className="text-white font-semibold">Fabelo Motor</span> llevamos
            más de 15 años cuidando el rendimiento, la seguridad y la estética de
            cada vehículo. Ofrecemos una experiencia premium basada en la confianza,
            la innovación y la calidad.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["Confianza", "Rapidez", "Calidad", "Honestidad"].map((valor) => (
              <div
                key={valor}
                className="bg-white/5 backdrop-blur-xl border border-white/10 text-gray-200 w-40 shadow-lg hover:shadow-[#e50914]/40 transition-transform hover:-translate-y-1 rounded-xl p-4 text-center font-semibold tracking-wide"
              >
                {valor}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* === SERVICIOS === */}
      <motion.section
        id="servicios"
        className="py-24 bg-black text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-[#e50914]">
            Nuestros Servicios
          </h3>
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
      </motion.section>

      {/* === GALERÍA === */}
      <motion.section
        id="galeria"
        className="py-24 bg-[#0b0b0b] text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-[#e50914]">Galería</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/galeria${i}.jpg`}
                alt={`Foto del taller Fabelo Motor ${i}`}
                className="rounded-xl shadow-lg hover:scale-105 transition-transform object-cover w-full h-60"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* === OPINIONES === */}
      <motion.section
        id="opiniones"
        className="py-24 bg-black text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold mb-10 text-[#e50914]">
            Opiniones de Clientes
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nombre: "Carlos M.",
                texto: "Excelente atención y resultados impecables.",
              },
              {
                nombre: "Laura G.",
                texto: "Rápidos, confiables y con acabados de primera.",
              },
              { nombre: "Javier R.", texto: "El mejor taller premium de la isla." },
            ].map((test, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 text-gray-200 hover:scale-105 transition-transform rounded-xl p-6"
              >
                <p className="italic mb-4 text-gray-300">“{test.texto}”</p>
                <p className="font-semibold text-white">{test.nombre}</p>
                <p className="text-yellow-400">★★★★★</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* === CONTACTO + MAPA === */}
      <motion.section
        id="contacto"
        className="py-24 bg-gradient-to-b from-black to-[#0b0b0b] text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto space-y-4">
          <h3 className="text-3xl font-bold text-[#e50914] mb-6">
            Contáctanos
          </h3>
          <p className="flex justify-center items-center text-gray-300">
            <MapPin className="mr-2 text-[#e50914]" aria-hidden="true" /> Carr. a los
            Olivos, 35300 Sta Brígida, Las Palmas
          </p>
          <p className="flex justify-center items-center text-gray-300">
            <Phone className="mr-2 text-[#e50914]" aria-hidden="true" /> 636 84 33 32
          </p>
          <p className="flex justify-center items-center text-gray-300">
            <Clock className="mr-2 text-[#e50914]" aria-hidden="true" /> Lunes a Viernes:
            9:00 - 14:30
          </p>

          {/* MAPA GOOGLE */}
          <div className="mt-10 w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg border border-white/10">
            <iframe
              title="Mapa Taller Fabelo Motor"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.563220255357!2d-15.507!3d28.002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b5a6c7b4a77b9%3A0x0!2sCarr.%20a%20los%20Olivos%2C%2035300%20Sta%20Br%C3%ADgida%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1696170800000!5m2!1ses!2ses"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/34636843332"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#e50914] hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-xl shadow-red-900/30">
                Habla con nosotros en WhatsApp
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* === FOOTER === */}
      <footer className="bg-[#0b0b0b] border-t border-white/10 py-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Fabelo Motor"
          >
            <Facebook className="cursor-pointer hover:text-blue-500" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Fabelo Motor"
          >
            <Instagram className="cursor-pointer hover:text-pink-500" />
          </a>
          <a
            href="https://wa.me/34636843332"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Fabelo Motor"
          >
            <MessageCircle className="cursor-pointer hover:text-green-500" />
          </a>
        </div>
        <p className="text-sm">
          © 2025 Taller Fabelo Motor · Todos los derechos reservados
        </p>
      </footer>

      {/* === WHATSAPP FLOTANTE === */}
      <a
        href="https://wa.me/34636843332"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform group"
      >
        <MessageCircle className="text-white" />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
          Chatea con nosotros
        </span>
      </a>
    </div>
  );
}
