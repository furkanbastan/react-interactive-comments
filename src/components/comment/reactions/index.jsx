import { Button } from '../../button'
import styles from '../styles.module.sass'
import { useComment } from '../useComment'

function Reactions() {
    const { comment, currentUser } = useComment()

    return (
        <div className={styles["reactions-wrapper"]}>
            <Button>
                <img src="./images/icon-plus.svg" alt="plus" />
            </Button>
            <p>{comment.score}</p>
            <Button>
                <img src="./images/icon-minus.svg" alt="plus" />
            </Button>
        </div>
    )
}

export { Reactions }