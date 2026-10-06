import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
    children,
} : Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="eng">
            <body>
                {children}
            </body>
        </html>
    );
}