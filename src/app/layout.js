import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>This is the header</header>
        <main>{children}</main> {/* Renders nested layouts or pages */}
        <footer>This is the footer</footer>
      </body>
    </html>
  );
}
