import React from 'react'

class Comment extends React.Component{

  render(){
    return(
      <li className="media">
        <strong>{this.props.author}</strong>
        <p>{this.props.text}</p>
      </li>
    )
  }
}

export default Comment
