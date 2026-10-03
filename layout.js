import "./globals.css";

export const metadata = {
  title: "THE MONEY GLITCH | GLITCHLIGHT™",
  description: "Rechargeable motion-activated lighting without complicated installation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}