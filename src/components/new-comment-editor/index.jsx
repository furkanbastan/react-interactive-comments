import styles from './styles.module.sass'
import { Button } from '../button'
import { useState } from 'react'

function NewCommentEditor({isReply, style, currentUser, onSend}) {
    const [newComment, setNewComment] = useState('')

    return (
        <div className={styles["new-comment-wrapper"]} style={style}>
            <img src={currentUser.image.png} alt="avatar" />
            <textarea rows="4" placeholder='Add a comment...' onChange={(e) => setNewComment(e.target.value)}></textarea>
            <Button variant='primary' onClick={() => onSend(newComment)}>{isReply ? "Reply" : "Send"}</Button>
        </div>
    )
}

export { NewCommentEditor }