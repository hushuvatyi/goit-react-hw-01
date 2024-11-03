import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={image} alt={name} />
        <p className={styles.title}>{name}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>{" "}
      </div>

      <ul className={styles.followers}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
