import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
