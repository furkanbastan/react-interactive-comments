import { useComment } from '../useComment'
import styles from '../styles.module.sass'

function Content({ username = "" }) {
    const { comment, currentUser } = useComment()

    return (
        <div className={styles["content-wrapper"]}>
            {username && <span className={styles["username"]}>{`@${username}`}&nbsp;</span>}
            {comment.content}
        </div>
    )
}

export { Content }