import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ stats = [], title }) => (
  <section className={s.container}>
    <h2 className={s.title}>{title}</h2>
    <ul className={s.stats__list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={s.stats__item} key={id}>
          <span className={s.text}>{label}</span>
          <span className={s.text}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Statistics;
