import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


function FriendList({friends}) {
    return (
        <ul className={styles.friends}>
            {friends.map(friend => (<li className={styles.item} key={friend.id}>
                 <FriendListItem {...friend}/>
                 </li>) )
}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }))
}

export default FriendList;