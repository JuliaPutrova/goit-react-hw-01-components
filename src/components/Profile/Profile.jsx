import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({name, tag, location, avatar, stats: {followers, views, likes}}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
        <p className={styles.text}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.states}>
        <li className={styles.states_list}>
          <span className="label">Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.states_list}>
          <span className="label">Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.states_list}>
          <span className="label">Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({followers: PropTypes.number.isRequired, views: PropTypes.number.isRequired, likes: PropTypes.number.isRequired })
    

}

Profile.defaultProps = {
    avatar: 'https://c0.klipartz.com/pngpicture/543/4/gratis-png-iconos-de-computadora-mujer-avatar-thumbnail.png',
}


export default Profile;