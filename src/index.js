import React from 'react';
import ReactDOM from 'react-dom';
import user from './components/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import App from './App';
import Transaсtion from './components/Transaction/TransactionHistory';

ReactDOM.render(
  <App
    user={user}
    title="File upload"
    stats={statisticalData}
    items={Transaсtion}
  />,
  document.getElementById('root'),
);
