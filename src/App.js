import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfile';
import profile from './assets/profile.png'

class App extends Component {
  state = {
    displayBio: false
  }

  toggleDisplayBio = () => {
    this.setState({
      displayBio: !this.state.displayBio
    })
  }

  render() {
    return (
      <div>
        <img src={profile} alt="profileimage" className="profile"/>
        <h1>Meu Portifolio</h1>
        {
          this.state.displayBio ? (
            <div>
              <p>Ola meu nome é Alexandre</p>
              <p>Analista desenvolvedor PL na Linx</p>
              <button onClick={this.toggleDisplayBio}>Ver menos</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Ver mais</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <SocialProfiles />
      </div>
    )
  }
}

export default App;