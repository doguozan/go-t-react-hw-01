import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem key={friend.id} {...friend} />
                </li>
            ))}
        </ul>
    );
}

export default FriendList;