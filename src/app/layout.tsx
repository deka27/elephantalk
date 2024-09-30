import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '800'],  // Include all the required weights
  subsets: ['latin'], // Ensure you include the necessary subsets
});

export const metadata: Metadata = {
  title: "Elephantalk",
  description: "Communication Assist",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{   
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
