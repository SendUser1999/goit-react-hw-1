import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, isOnline, name }) => {
    return (
        <li className={css.item}>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
            <p className={isOnline ? css.online : css.offline}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </li>
    );
}; 

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem