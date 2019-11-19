import React from 'react';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

const Friends = ({ friends = [] }) => (
  <ul className={s.friends__list}>
    {/* {friends.map(friend => <li>{friend.name}</li>)}  - для себя.Перебор массива объектов через map */}
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className={s.item} key={id}>
        {isOnline ? (
          <span className={s.status__off}>{isOnline}</span>
        ) : (
          <span className={s.status__on}>{isOnline}</span>
        )}
        <img className={s.avatar} src={avatar} alt="" width="80" />
        <p className={s.name}>{name}</p>
      </li>
    ))}
  </ul>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default Friends;
