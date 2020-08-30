import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './TwitterHunter.module.css';
import axios from 'axios';
import api from '../Api/index'
import ReactTable from 'react-table'



class TwitterHunter extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      tweet: [],
      isLoading: false,
  }

  } 
  componentWillMount() {
    console.log('Component will mount!')
 }
  componentDidMount = async () => {
    console.log("reached componentdidmount")
    this.setState({ isLoading: true })

    await api.getStreamData().then(tweets => {
     
        this.setState({
            tweet:tweets.data.data,
            isLoading: false,
        })
        
    })
}

render() {
  const { tweet, isLoading } = this.state
  console.log("reached render") 

  return (
    
    <div>
                {
					tweet.map((data, i) => {
						return (
							<div key={i}>
								<div>
									
                  <img src={data.avatar} alt={data.author} />
                  <a href={data.url}>
									{data.url}
									</a>
                  <div>
                    <p>{data.body}</p>
                  </div>
									
									
								</div>
							</div>
						);
					})
				}
            </div>
          
  )
}
}

export default TwitterHunter;
