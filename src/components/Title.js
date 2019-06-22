import React from "react";

export default function Title({ title, subtitle, subtitle2 }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
      <h5>{subtitle}</h5>
      <p>{subtitle2}</p>
    </div>
  );
}
