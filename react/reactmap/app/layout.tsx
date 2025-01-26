import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-green-900"
      >
        <h1>Utilizando Map</h1>
        <p>Objetos puxados logo abaixo: </p>
        {children}
      </body>
    </html>
  );
}
