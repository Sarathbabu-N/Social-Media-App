import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({ post }) {

const [like,setLike] = useState(post.like)
const [isliked,setisLiked] = useState(false)

const likeHandler=()=>{
    setLike(isliked ? like-1 : like+1)
    setisLiked(!isliked)
}

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfileImg' 
                        src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt='postprofile' />
                        <span className='postUserName'>
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className='postDate'>{post.date}</span>
                    </div>

                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt='post-Center-Img' />
                </div>
                <div className='postBottom'>

                    <div className='postBottomLeft'>
                       <img className='likeIcon' src='/assets/thumb-up.png' alt="like-icon" onClick={likeHandler} />
                        <img className='heartIcon' src='/assets/heart.png' alt="heart-icon" onClick={likeHandler} />
                        <span className='postLikeCounter'>{like} people like it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>

    )
}