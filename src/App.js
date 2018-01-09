import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game';
import Images from './images';
class App extends Component {
  state = {
    image: [
      {
        id: 1,
image : "https://static.nfl.com/static/site/img/logos/svg/teams/CAR.svg",
        clicked: false
      }, {
        id: 2,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/NYJ.svg",
        clicked: false
      }, {
        id: 3,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/KC.svg",
        clicked: false
      }, {
        id: 4,
image : "https://static.nfl.com/static/site/img/logos/svg/teams/NO.svg",
        clicked: false
      }, {
        id: 5,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/JAC.svg",
        clicked: false
      }, {
        id: 6,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/HOU.svg",
        clicked: false
      }, {
        id: 7,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/NE.svg",
        clicked: false
      }, {
        id: 8,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/PIT.svg",
        clicked: false
      }, {
        id: 9,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/CIN.svg",
        clicked: false
      }, {
        id: 10,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/DEN.svg",
        clicked: false
      }, {
        id: 11,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/DAL.svg",
        clicked: false
      }, {
        id: 12,
image : "https://nflcdns.nfl.com/static/site/img/logos/svg/teams/ATL.svg",
        clicked: false
      }, {
        id: 13,
image : "https://static.nfl.com/static/site/img/logos/svg/teams/ARI.svg",
        clicked: false
      }
    ],
    counter: 0,
    topScore: 0
}; 
  sortImages = id => {
    const imageOrder = this.state.image;
    imageOrder.forEach((image, index) => {
      if (index === id) {
        if (imageOrder[index].clicked === true) {
          return this.setState({
            image: imageOrder.sort(() => Math.random() - 0.5),
            topScore: this.state.counter,
            counter: 0
          })
        } else {
          imageOrder[index].clicked = true;
          return this.setState({
            image: imageOrder.sort(() => Math.random() - 0.5),
            counter: this.state.counter + 1
          })
        }
      }
    })
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo-left" alt="logo"/>
          <img src={logo} className="App-logo-right" alt="logo"/>
          <h2>React to the Right Image by Clickit</h2>
        </div>
        <h4 className="App-intro">
          See how many Images you can click without clicking the same one twice!
          <br />
          There is one that can not be clicked so be carful!
          <br/>
          SCORE = {this.state.counter}
          <br/>
          TOP SCORE = {this.state.topScore}
        </h4>
        <div>
          <Game>
            {this
              .state
              .image
              .map(image => (<Images
                key={image.id}
                sortImages={this.sortImages}
                id={image.id}
                src={image.image}
                clicked={image.clicked}/>))}
          </Game>
        </div>
      </div>
    );
  }
}
export default App;