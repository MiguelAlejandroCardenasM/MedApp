import React from 'react';
import Option from './Option.js';

export default class AddOption extends React.Component{
  state = {
    error: undefined
  };
  // constructor(props){
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.state = {
  //     error: undefined
  //   };
  // }

  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
        error: error
    }));

    if(option){
      // this.props.handleAddOption(option);
      e.target.elements.option.value = '';
    }
  }
  render(){
    return (
      <div>
        <p>Add options components here!</p>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.handleAddOption}>
              <input type = "text" name = "option"/>
              <button className="button">Add Options</button>
        </form>
      </div>
    );
  }
}
