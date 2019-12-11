import React, {Component} from 'react';
import axios from 'axios';
import './ReviewForm.css'

class ReviewForm extends Component{
  constructor(){
    super();
    this.state={
      rating:null,
      title:'',
      description:'',
      userId: '',
      restaurant:''
    }
  }
  componentDidMount(){
    this.setState({userId:this.props.user})
  }
  render(){
    const { rating, title, description, restaurant} = this.state
    return(
      <div id='review-container'>
        <h2>Please leave a review</h2>
        <div>
          <h3>Restaurant</h3>
          <input type='text' name='restaurant' value={restaurant} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>
        <div>
          <h3>Title</h3>
          <input type='text' name='title' value={title} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>
        <div>
          <h3>Description</h3>
          <textarea name='description' id='description' value={description} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>
        <div>
          <h3>Rating</h3>
          <input type='radio' name='rating' value={rating}/> 1
          <input type='radio' name='rating' value={rating}/> 2
          <input type='radio' name='rating' value={rating}/> 3
          <input type='radio' name='rating' value={rating}/> 4
          <input type='radio' name='rating' value={rating}/> 5
        </div>

        <a href='/' id='review-confirmation'><button onClick={this.handleSubmit}>Submit Review</button></a>
        <a href='/' id='review-confirmation'><button onClick={this.handleSubmit}>Upload Pictures</button></a>
      </div>
    )
  }
}

export default ReviewForm