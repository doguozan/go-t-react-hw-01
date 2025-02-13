import styles from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {

    return (
        <div className={styles.profile}>
            <div>
                <img
                    src={image}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.username}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.statItem}>
                    <span className={styles.statLabel}>Followers</span>
                    <span className={styles.statNumber}>{stats.followers}</span>
                </li>
                <li className={styles.statItem}>
                    <span className={styles.statLabel}>Views</span>
                    <span className={styles.statNumber}>{stats.views}</span>
                </li>
                <li className={styles.statItem}>
                    <span className={styles.statLabel}>Likes</span>
                    <span className={styles.statNumber}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}


export default Profile;