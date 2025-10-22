import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from './layout-client';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CalmWave - Redução de Ruído para TPAC",
  description: "Solução inovadora de redução de ruído para crianças com Transtorno do Processamento Auditivo Central (TPAC), usando IA para entregar áudio cristalino em sala de aula.",
  keywords: "TPAC, redução de ruído, educação inclusiva, acessibilidade auditiva, IA educacional",
  authors: [{ name: "CalmWave Team" }],
  openGraph: {
    title: "CalmWave - Redução de Ruído para TPAC",
    description: "Tecnologia de IA para tornar a educação mais acessível",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
