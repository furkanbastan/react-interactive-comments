import { useComment } from "../useComment"
import styles from '../styles.module.sass'
import { Button } from '../../button'

function Header({ onClickReply }) {
    const { comment, currentUser } = useComment()

    return (
        <div className={styles["header-wrapper"]}>
            <div className={styles["left-header"]}>
                <img src={comment.user.image.webp} alt="avatar" />
                <p className={styles["username"]}>{comment.user.username}</p>
                {comment.user.username === currentUser.username && <p className={styles["you"]}>you</p>}
                <p className={styles["created-at"]}>{comment.createdAt}</p>
            </div>
            <div className={styles["right-header"]}>
                {comment.user.username === currentUser.username && (
                    <>
                        <Button variant="warn"><img src="./images/icon-delete.svg" alt="delete" />Delete</Button>
                        <Button><img src="./images/icon-edit.svg" alt="delete" />Edit</Button>
                    </>
                )}
                {comment.user.username !== currentUser.username && <Button onClick={onClickReply}><img src="./images/icon-reply.svg" alt="delete" />Reply</Button>}

            </div>
        </div>
    )
}

export { Header }