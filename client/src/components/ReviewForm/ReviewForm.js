import React, {Component} from 'react';
import axios from 'axios';

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
      <div>
        <h1>
          Under Construction
        </h1>
        <h2>Please leave a review for this Restaurant</h2>
        <br/>
        <div>
          <h6>Restaurant</h6>
          <input type='text' name='restaurant' value={restaurant} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>
        <div>
          <h6>Title</h6>
          <input type='text' name='title' value={title} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>
        <div>
          <h6>Description</h6>
          <input type='text' name='description' value={description} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>
        <div>
          <h6>Rating (1-5)</h6>
          <input type='option' name='rating' value={rating} onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} />
        </div>

        <a href='/'><button onClick={this.handleSubmit}>Submit Review</button></a>
      </div>
    )
  }
}

export default ReviewForm