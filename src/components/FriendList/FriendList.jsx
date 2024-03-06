import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friends}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    className={css.frienditem}
                    key={id}
                    avatar={avatar}
                    isOnline={isOnline}
                    name={name}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
};

export default FriendList