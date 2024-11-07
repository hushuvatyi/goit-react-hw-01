import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.friendListItem}>
      <img src={avatar} alt={name} />
      <p className={s.title}>{name}</p>
      <p className={isOnline ? s.online : s.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
