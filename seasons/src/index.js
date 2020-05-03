import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {lat : null, errMessage:''};

  constructor(props) {
    super(props);

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat : position.coords.latitude});
      },
      err => {
        this.setState({errMessage:err.message});
      }
    );


  }

  renderContent(){
    if (this.state.lat && !this.state.errMessage) {
      return <div><SeasonDisplay lat={this.state.lat} /></div>;
    }else if (!this.state.lat && this.state.errMessage) {
      return <div>Err : {this.state.errMessage}</div>;
    }else {
      return <Spinner />;
    }
  };

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  };
}

ReactDOM.render(<App/>,document.querySelector('#root'));
