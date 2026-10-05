import "./globals.css";

export const metadata = {
  title: "THE MONEY GLITCH",
  description: "Smart products. Smarter shopping.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
