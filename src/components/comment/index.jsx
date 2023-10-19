import { CommentProvider } from './useComment'
import { Content } from './content'
import { Reactions } from './reactions'
import { Header } from './header'
import { NewCommentEditor } from '../new-comment-editor'
import styles from './styles.module.sass'
import { Fragment, useState } from 'react'
import { INDENT_SIZE, INDENT_INCREATE_RATE } from './constants'

function Comment({ data }) {
    const { comment, currentUser } = data
    
    const [openReply, setOpenReply] = useState(false)
    const [openSubReply, setOpenSubReply] = useState(false)

    const handleClickReply = () => setOpenReply(!openReply)
    const handleClickSubReply = () => setOpenSubReply(!openSubReply)

    const handleSendReply = (content) => console.log(`${content} handled`);
    const handleSendSubReply = (content) => console.log(`${content} handled`);

    const repliesRender = (replies, margin, username) => replies.map(comment => (
        <Fragment key={comment.id}>
            <div className={styles["reply-wrapper"]} style={{ marginLeft: margin }}>
                <CommentProvider data={{ comment, currentUser }}>
                    <Reactions></Reactions>
                    <div className={styles["body-wrapper"]}>
                        <Header onClickReply={handleClickSubReply}></Header>
                        <Content username={username}></Content>
                    </div>
                </CommentProvider>
            </div>
            {comment.replies?.length > 0 && repliesRender(comment.replies, margin + margin / INDENT_INCREATE_RATE, comment.user.username)}
            {openSubReply && <NewCommentEditor currentUser={currentUser} onSend={handleSendSubReply} style={{ marginLeft: margin }} />}
        </Fragment>
    ))

    return (
        <>
            <div className={styles["comment-wrapper"]}>
                <CommentProvider key={comment.id} data={data}>
                    <Reactions></Reactions>
                    <div className={styles["body-wrapper"]}>
                        <Header onClickReply={handleClickReply}></Header>
                        <Content></Content>
                    </div>
                </CommentProvider>
            </div>
            {comment.replies.length > 0 && repliesRender(comment.replies, INDENT_SIZE, comment.user.username)}
            {openReply && <NewCommentEditor currentUser={currentUser} onSend={handleSendReply} style={{ marginLeft: INDENT_SIZE }} />}

        </>
    )
}

export { Comment }