import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({avatar, name, isOnline}) {
    return (
        <>
            <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
            <img className={styles.avatar} src={avatar} alt="Фото" width="48" />
            <p className={styles.name}>{name}</p>
        </>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendListItem;

//инлайн стиль прописан
// function FriendListItem({avatar, name, isOnline}) {
//     return (
//         <>
//             <span className={styles.status}>{isOnline ? <div style={{width: "20px", height: "20px", backgroundColor: 'green', borderRadius: "50%"}}></div> : <div style={{width: "20px", height: "20px", backgroundColor: 'red', borderRadius: "50%"}}></div>}</span>
//             <img className={styles.avatar} src={avatar} alt="Фото" width="48" />
//             <p className={styles.name}>{name}</p>
//         </>
//     );
// };


