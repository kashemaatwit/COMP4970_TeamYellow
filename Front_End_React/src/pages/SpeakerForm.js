import React from 'react'
import './FormFormat.css'

const normalizeInput = (value, previousValue) => {
  if (!value) return value;
  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;
  
  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 4) return currentValue;
    if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
  }
};

class Form extends React.Component {
  constructor() {
    super();
    
    this.state = { cellphone: "", dayphone: "" };
    this.handleChangeCell = this.handleChangeCell.bind(this);
    this.handleChangeDayphone = this.handleChangeDayphone.bind(this);
  }

  handleChangeCell = ({ target: { value } }) => {   
    this.setState(prevState=> ({ cellphone: normalizeInput(value, prevState.cellphone) }));
  };

  handleChangeDayphone = ({target: {value} }) => {
    this.setState(prevState=> ({ dayphone: normalizeInput(value, prevState.dayphone) }));
  }

  render() {
    return (
      <div className="form-content-right">
        <form className="form">
          <h1>Create New Speaker</h1>
          <div className="form-inputs">
            <label htmlFor="speakerName" className="form-label">
              Speaker Name:
            </label>
            <input type="text" name="speakerName" className="form-input" placeholder="Enter a speaker name" value={this.state.speakerName} onChange={this.handleChange}></input>    
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email: 
            </label>
            <input type="email" name="email" className="form-input" placeholder="Enter an email address" value={this.state.email} onChange={this.handleChange}></input>   
          </div>
          <div className="form-inputs">
            <label htmlFor="cellphone" className="form-label">
              Cellphone: 
            </label>
            <input type="tel" name="cellphone" className="form-input" placeholder="Enter a cellphone number" value={this.state.cellphone} onChange={this.handleChangeCell}></input>
          </div>
          <div className="form-inputs">
            <label htmlFor="dayphone" className="form-label">
              Dayphone:
            </label>
            <input type="tel" name="dayphone" className="form-input" placeholder="Enter a dayphone number" value={this.state.dayphone} onChange={this.handleChangeDayphone}></input>
          </div>
          <button className='form-input-btn' type='submit'>
            Add New Speaker
          </button>
          <button className='form-input-btn' type='submit'>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
export default Form;