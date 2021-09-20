import React from 'react';
import s from './Post.module.css'

type MessageType = {
    message: string
    likesCount: number
}

const Post = (props: MessageType) => {
    return (

        <div className={s.item}>
            <img alt='message'
                src='https://previews.123rf.com/images/godruma/godruma1710/godruma171000113/87282104-bunny-logo-design-simple-line-vector-illustration-isolated-on-white.jpg'/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post