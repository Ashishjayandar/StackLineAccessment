import React from "react";
import "./sideBar.css";

const Sidebar = ({ product }) => {
  if (!product) return null;

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <img src={product.image} alt={product.title} className="sidebar-image" />
        <div className="sidebar-details">
          <h2 className="sidebar-title">{product.title}</h2>
          <p className="sidebar-subtitle">{product.subtitle}</p>
          <hr className="sidebar-divider" />
          <div className="sidebar-tags">
            {product.tags.map((tag, index) => (
              <span key={index} className="sidebar-tag">
                {tag}
              </span>
            ))}
          </div>
          <hr className="sidebar-divider" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
