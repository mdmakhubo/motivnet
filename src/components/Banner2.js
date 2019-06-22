import React from "react";

export default function Banner2({ children, title, title2, subtitle }) {
  return (
    <div className="banner2">
      <h1>{title}</h1>
      <h2>{title2}</h2>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
