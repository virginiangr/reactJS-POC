import React from 'react'
import Comment from '../comment'

class CommentList extends React.Component{

  render(){
    return(
      <ul className="media-list">
        {
          this.props.comments.map((comment)=>{
            return  <Comment author={comment.author} text={comment.text} key={comment.id}></Comment>
          })
        }
      </ul>
    )
  }
}

export default CommentList
