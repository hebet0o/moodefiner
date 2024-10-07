import React from "react";

export default function CardComponent({ children, title }) {
  return (
    <div className="card-container p-6 shadow-lg rounded-lg bg-white">
      {title && <h2 className="card-title text-xl font-semibold mb-4">{title}</h2>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}
