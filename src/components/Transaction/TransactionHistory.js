import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransaсtionHistory = ({ transaction }) => (
  <table className={s.transaction__history}>
    <thead>
      <tr className={s.transaction__list}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transaction.map(({ id, type, amount, currency }) => (
        <tr className={s.transaction__item} key={id}>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
        </tr>
      ))}
    </tbody>
  </table>
);

TransaсtionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransaсtionHistory;
