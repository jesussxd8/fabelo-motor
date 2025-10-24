import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabelo Motor | Taller Mecánico Premium en Las Palmas",
  description:
    "Fabelo Motor — Taller especializado en mecánica avanzada, chapa y pintura, alineación, frenos y mantenimiento de vehículos de alta gama en Las Palmas. Confianza, calidad y tecnología.",
  keywords: [
    "taller mecánico",
    "Las Palmas",
    "mecánica general",
    "chapa y pintura",
    "alineación y balanceo",
    "neumáticos",
    "frenos",
    "diagnóstico computarizado",
    "aire acondicionado automotriz",
    "Fabelo Motor",
  ],
  authors: [{ name: "Fabelo Motor" }],
  creator: "Fabelo Motor",
  publisher: "Fabelo Motor",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Fabelo Motor | Taller Mecánico Premium en Las Palmas",
    description:
      "Mecánica avanzada, confianza y tecnología para tu vehículo. Visítanos en Sta Brígida, Las Palmas.",
    url: "https://fabelo-motor.vercel.app",
    siteName: "Fabelo Motor",
    images: [
      {
        url: "/og-image.jpg", // ✅ cambia por tu imagen real en /public/
        width: 1200,
        height: 630,
        alt: "Fabelo Motor - Taller Mecánico Premium en Las Palmas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabelo Motor | Taller Mecánico Premium",
    description:
      "Cuidamos tu vehículo como si fuera nuestro. Mecánica avanzada, chapa y pintura, alineación, frenos y más.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fabelo-motor.vercel.app",
  },
  category: "Automoción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* === Favicon === */}
        <link rel="icon" href="/favicon.ico" />

        {/* === Schema de negocio local para SEO de Google === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Fabelo Motor",
              image: "https://fabelo-motor.vercel.app/logo-fabelo.png",
              url: "https://fabelo-motor.vercel.app",
              telephone: "+34 636 84 33 32",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Carr. a los Olivos",
                addressLocality: "Sta Brígida",
                postalCode: "35300",
                addressRegion: "Las Palmas",
                addressCountry: "ES",
              },
              openingHours: "Mo-Fr 09:00-14:30",
              sameAs: [
                "https://facebook.com/",
                "https://instagram.com/",
                "https://wa.me/34636843332",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
