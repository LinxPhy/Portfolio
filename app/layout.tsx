import type { Metadata } from "next";
import './styles/globals.css'
import Navigation from "./components/navigation";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projects Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
