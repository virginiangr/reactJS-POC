import React from 'react'
import CommentList from '../comment-list'
import CommentForm from '../comment-form'

class CommentBox extends React.Component{

  constructor(){
    super()

    this.state = {comments: [] }
  }

  componentDidMount(){

    setInterval(()=>{
      fetch('http://localhost:3000/api/comments')
        .then((response)=>{
          return response.json()
        })
        .then((comments)=>{
          this.setState({comments: comments})
        })
    }, 2000)
  }

  handlerCommentSubmit(comment){
    var data = 'author=' + comment.author + '&&text=' + comment.text;
    fetch('http://localhost:3000/api/comments',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: data
    })
    .then((response)=>{
      console.log('posted')
    })
  }

  render(){
    return(
      <div>
        <CommentList comments={this.state.comments}/>
        <CommentForm onCommentSubmit={this.handlerCommentSubmit}/>
      </div>
    )
  }
}

export default CommentBox
