import React, { Component } from 'react';
import { Button } from './Button';
import PopUp from './TimeslotPopupForm';

class Timeslot extends Component {
  state = {
    seen: false
    };

   togglePop = () => {
    this.setState({
     seen: !this.state.seen
    });
   };
  
  render(){
    let addModalClose = () => this.setState({addModalShow:false})
    return (
      <div>
        <div className="products">
          <Button onClick={this.togglePop}
          type="button" 
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium">
            Create New Timeslot
          </Button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    )
  }
}
export default Timeslot;