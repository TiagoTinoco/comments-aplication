import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';

class App extends Component {
  state = {
    comments: [
      {
        name: 'James', 
        email: 'james@gmail.com',
        date: new Date(2022, 3, 12),
        message: 'Hi baby, what are you doing?'
      },
      {
        name: 'Esther', 
        email: 'esther@gmail.com',
        date: new Date(2022, 3, 13),
        message: 'Hi lov, i am thinking in you! s2'
      }
    ],
    newComment: {
      name: '',
      email: '',
      message: ''
    }
  }

  addComment = event => {
    event.preventDefault();
    console.log("Adding comment...");
    // let listComments = this.state.comments;
    // listComments.push(newComment);
    // this.setState({ comments: listComments });

    const newComment = { ...this.state.newComment, date: new Date() }

    this.setState({
      comments: [ ...this.state.comments, newComment ],
      newComment: { name: '', email: '', message: '' }
    });
  }

  removeComment = comment => {
    let list = this.state.comments;
    list = list.filter(c => c !== comment);

    this.setState({
      comments: list
    });
  }

  typeInput = event => {
    console.log(event);
    const { name, value } = event.target;
    this.setState({ newComment: { ...this.state.newComment, [name]: value } })
  }

  render() {
    return (
      <div className="App">
        <h1>WhatsApp</h1>
        {this.state.comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name} 
            email={comment.email} 
            date={comment.date}
            onRemove={this.removeComment.bind(this, comment)}>
            {comment.message}
          </Comment>
        ))}
        
        <form method="post" onSubmit={this.addComment} className="Form-Comment">
          <h2>Add Comment</h2>
          <div>
            <input 
              type="text" 
              name="name"
              value={this.state.newComment.name}
              onChange={this.typeInput}
              required
              placeholder="Type your name" />
          </div>
          <div>
            <input
              type="email"
              name="email" 
              value={this.state.newComment.email}
              onChange={this.typeInput}
              required
              placeholder="Type your email" />
          </div>
          <div>
            <textarea
              name="message" 
              value={this.state.newComment.message}
              onChange={this.typeInput}
              required
              rows="4" />
          </div>
          <button type="submit">Send Comment</button>
        </form>
      </div>
    );
  }

}

export default App;
