import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

class HomePage extends Component{
  
  constructor(props){
    super(props);
    

  } 
  componentWillMount() {
    console.log('Component will mount!')
 }
  componentDidMount = async () => {
    console.log("reached componentdidmount")
   
}

render() {
 
  console.log("reached render") 

  return (
    
    <div>
             <h1>abc</h1>
            </div>
          
  )
}
}


export default HomePage;
