import React from 'react';
import PropTypes from 'prop-types';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import friends from './components/Friends/friends.json';
import Friends from './components/Friends/Friends';
import user from './components/user.json';
import TableBoard from './components/Transaction/TransactionHistory';
import TransactionList from './components/Transaction/transaction.json';

const App = ({ title, stats }) => {
  return (
    <>
      <Profile user={user} />
      <Statistics title={title} stats={stats} />
      <Friends friends={friends} />
      <TableBoard transaction={TransactionList} />
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default App;
