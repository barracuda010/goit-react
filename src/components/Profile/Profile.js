import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ user }) => (
  <div className={s.container}>
    <div>
      <img className={s.avatar} src={user.avatar} alt="" />
      <p className={s.name}>{user.name}</p>
      <p className={s.info}>@{user.tag}</p>
      <p className={s.info}>{user.location}</p>
    </div>
    <ul className={s.user__item}>
      <li className={s.user__list}>
        <span>Followers: </span>
        <span className={s.user__stats}>{user.stats.followers}</span>
      </li>
      <li className={s.user__list}>
        <span>Likes: </span>
        <span className={s.user__stats}>{user.stats.likes}</span>
      </li>
      <li className={s.user__list}>
        <span>Views: </span>
        <span className={s.user__stats}>{user.stats.views}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default Profile;
