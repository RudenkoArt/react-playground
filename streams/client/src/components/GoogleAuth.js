import React from 'react';
import { gapi } from 'gapi-script';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          clientId:
            '101456610586-tr280sfb39voguhmmc05gmn3bfgeg05f.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
