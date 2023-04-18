import "./globals.css";

/* this metadata will go inside head tag,
mainly used for SEO suport. */

export const metadata = {
  title: "Wallet",
  description: "Read only Wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
