import React from 'react'

class CommentForm extends React.Component{

  constructor(){
    super()

    this.state = {author:'', text:''}
  }

  handlerAuthorChange(e){
    this.setState({author: e.target.value})
  }

  handlerTextChange(e){
    this.setState({text: e.target.value})
  }

  handlerSubmit(e){
    e.preventDefault();

    var author = this.state.author;
    var text = this.state.text;

    if(!author || !text){
      return;
    }

    this.props.onCommentSubmit({author: author, text: text});

    this.setState({author:'', text:''});
  }

  render(){
    return(
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <input type="text"
               className="form-control"
               placeholder="Your author..."
               onChange={this.handlerAuthorChange.bind(this)}
               value={this.state.author}></input>
        <textarea row="3"
                  className="form-control"
                  placeholder="Something to say..."
                  onChange={this.handlerTextChange.bind(this)}
                  value={this.state.text}></textarea>
        <input type="submit"
               className="btn btn-primary btn-sm pull-right"></input>
      </form>
    )
  }
}

export default CommentForm
