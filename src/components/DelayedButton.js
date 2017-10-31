import React, { Component } from 'react';

class DelayedButton extends Component{
  constructor(){
    super();
  }

  handleOnClick(e) {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }


  render(){
    return(
      <button onClick={this.handleOnClick.bind(this)}>

      </button>
    )
  }
}

DelayedButton.defaultProps = {

}

DelayedButton.propTypes = {

}

export default DelayedButton;
