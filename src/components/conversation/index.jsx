import data from '../../../data.json'
import styles from './styles.module.sass'
import { Comment } from '../comment'
import { NewCommentEditor } from '../new-comment-editor'
import { useState } from 'react'

function Conversation() {
    const { comments, currentUser } = data
    const [_comments, setComments] = useState(comments ?? [])

    const handleSendNewComment = (newComment) => {
        setComments([..._comments, {
            id: 5,
            content: newComment,
            createdAt: 'now',
            replies: [],
            score: 0,
            user: {
                image:{
                    png: currentUser.image.png,
                    webp: currentUser.image.webp
                },
                username: currentUser.username
            }
        }])
        
    }

    return (
        <div className={styles["conversation-wrapper"]}>
            {
                _comments.map((comment, i) => (<Comment key={i} data={{ comment, currentUser }} />))
            }
            <NewCommentEditor currentUser={currentUser} onSend={handleSendNewComment}/>
        </div>
    )
}

export { Conversation }