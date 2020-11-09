import React, {Component} from 'react'
import {Form} from './RoomForm'
import './PopupFormFormat.css'

class PopUp extends Component {
    handleClick = () => {
     this.props.toggle();
    };
    
  render() {
    return (
     <div className="modal">
       <div className="modal_content">
       <span className="close" onClick={this.handleClick}>&times;    </span>
       <div className="form-container">
       <Form/>
       </div>
       </div>
      </div>
    );
   }
}

export default PopUp;
