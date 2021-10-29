import React from 'react'
import marked from 'marked'

const Post = ({article}) => {
    console.log(article)
    const {title, featuredImage, description}= article.fields 
    const desc=marked(description)
    return (
        <div>
            <h2>{title}</h2>
            {featuredImage && <img src={featuredImage.fields.file.url} alt="dfkjhglk"/>}
            <p dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
    )
}

export default Post
