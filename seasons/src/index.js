import React from 'react';
import { createRoot } from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message='Please accept location request' />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

// Exercise 1
// class UserForm extends React.Component {
//   render() {
//     return (
//       <form>
//         <label>Enter a username:</label>
//         <input />
//       </form>
//     );
//   }
// }

// Exercise 2
// class Clock extends React.Component {
//   state = { time: this.getCurrentTime() };

//   getCurrentTime() {
//     return new Date().toLocaleTimeString();
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ time: this.getCurrentTime() });
//     }, 1000);
//   }

//   render() {
//     return <div className='time'>The time is: {this.state.time}</div>;
//   }
// }

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
