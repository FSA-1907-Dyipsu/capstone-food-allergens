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
          <input type='text' name='description' value={description} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>
        <div>
          <h3>Rating (1-5)</h3>
          <input type='option' name='rating' value={rating} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>

        <a href='/' id='review-confirmation'><button onClick={this.handleSubmit}>Submit Review</button></a>
      </div>
    )
  }
}

export default ReviewForm