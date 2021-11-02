import React from 'react'
import Post from './post'

const Posts = ({posts}) => {
    return (
        <div className="grid lg:grid-cols-3 max-w-7xl mx-auto gap-10">
            {posts.map((article, index)=> <Post article={article} key={index}/>)}
        </div>
    )
}


export default Posts
