import "@styles/styles.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full flex justify-center">{children}</body>
      <footer>employer</footer>
    </html>
  );
}
