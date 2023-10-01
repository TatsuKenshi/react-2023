import React from "react";

const Service = ({ icon, title, text }) => {
  return (
    <article>
      <span className="service-icon">
        <i className={icon}>{icon}</i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Service;
