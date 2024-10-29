import React from "react";

const Sidebar = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          height: "50%", // Limits this section to the top 50% of the sidebar
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{ width: "100%", textAlign: "center", marginBottom: "0.5rem" }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "0.5rem",
            }}
          />
          <h2 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
            {product.title}
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#A9B5C5" }}>
            {product.subtitle}
          </p>
          <hr
            style={{
              width: "100%",
              border: "0.5px solid #ccc",
              margin: "0.25rem 0",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {product.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "#ffffff",
                color: "#404e63",
                padding: "0.3rem 0.5rem",
                borderRadius: "2px",
                fontSize: "0.8rem",
                border: "1px solid #404e63",
              }}
            >
              {tag}
            </span>
          ))}
          <hr
            style={{
              width: "100%",
              border: "0.5px solid #ccc",
              margin: "0.25rem 0",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
