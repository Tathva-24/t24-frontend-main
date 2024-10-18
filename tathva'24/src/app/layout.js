import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src:'/public/fonts/GeistSansVF.woff', 
//   variable: "--font-geist-sans",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Explicit weight values
// });

// const geistMono = localFont({
//   src: "public/fonts/GeistMonoVF.woff", 
//   variable: "--font-geist-mono",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Explicit weight values
// });

export const metadata = {
  title: "Tathva 24",
  description: "Welcome to Tathva 24, South India's largest techno-management fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="./MainLogo.png" />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
