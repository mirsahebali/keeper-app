import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Mir Saheb Aliⓒ {year}</p>
    </footer>
  );
}

export default Footer;
