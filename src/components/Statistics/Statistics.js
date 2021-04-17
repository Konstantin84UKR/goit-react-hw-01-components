import React from "react";
import PropTypes from "prop-types";
import style from "./statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className="statistic">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((item) => (
          <li className={style.item} key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Default props
Statistics.defaultProps = {
  title: "",
  stats: [],
};

// PropTypes
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  
};

export default Statistics;
