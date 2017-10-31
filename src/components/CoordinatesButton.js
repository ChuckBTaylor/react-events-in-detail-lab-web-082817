import React from 'react';

class CoordinateButtons extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      xCoord: null,
      yCoord: null
    }
  }

  handleOnClick(ev){
    this.setState({
      xCoord: ev.screenX,
      yCoord: ev.screenY
    })
    const x = ev.screenX
    const y = ev.screenY
    this.props.onReceiveCoordinates([x,y])

  }

  render(){
    return(
      <button onClick={this.handleOnClick.bind(this)}>

      </button>
    )
  }
}

CoordinateButtons.defaultProps = {

}

CoordinateButtons.propTypes = {

}

export default CoordinateButtons;
