import React, { Component } from 'react';

// assets
import logo from './../assets/images/logo.svg';

// style
import './App.css';

// components
import Button from './Components/Button/Button';
import Audio from './Components/Audio/Audio';

// data
import data from './data.json';

// audio
// import boom from './../assets/sounds/boom.wav';
// import clap from './../assets/sounds/boom.wav';
// import hihat from './../assets/sounds/boom.wav';
// import boom from './../assets/sounds/boom.wav';
// import boom from './../assets/sounds/boom.wav';
// import boom from './../assets/sounds/boom.wav';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        window.addEventListener('keydown', this.playSound);
        window.addEventListener('keyup', this.removeTransition);
    }

    playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const keys = document.querySelectorAll('.key');
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if(audio.play() !== 'undefined') {
            audio.currentTime = 0;  //rewind to the start
            audio.play().then(() => {
                console.log('You play ' + audio.src);
                key.classList.add('playing');
            }).catch((err) => {
                console.log(err)
            });
        }
    }

    removeTransition(e){
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.remove('playing');
    }
    
    render() {
        let buttons = data.map((x, index) => {
            return (
                <Button {...x} key={index} />
            );
        });

        let audios = data.map((x, index) => {
            let {datakey, type} = x,
                path = process.env.PUBLIC_URL + '/sounds/';

            return (
                <Audio 
                    datakey={datakey}
                    src={path + type + '.wav'}
                    key={index}
                    />
                );
        });

        return ( 
            <div className="App" >
                <div className="App-header" >
                    <img 
                        src={ logo }
                        className="App-logo"
                        alt="logo" />
                    <h2> Welcome to React </h2>  
                </div> 
                <p className="App-intro" >
                    To get started, edit <code> src / App.js </code> and save to reload. 
                </p>

                <div className="keys">
                    {buttons}                
                </div>

                {audios}

            </div>
        );
    }
}

export default App;