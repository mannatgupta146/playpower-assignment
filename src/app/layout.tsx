import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amor de Goa by Mirashya Homes | Airbnb",
  description: "Stunning 3BHK villa in Candolim, Goa with private pool, gym, and beach access. Book your perfect Goa getaway.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <style>{`
          @font-face {
            font-family: 'AirbnbCereal';
            src: url('/assets/fonts/AirbnbCerealVF.woff2') format('woff2');
            font-weight: 100 900;
            font-style: normal;
            font-display: swap;
          }
          html, body, * {
            font-family: 'AirbnbCereal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
