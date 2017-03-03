import React, {Component} from 'react';

class Audio extends Component {
	render(){
		return(
			<audio data-key={this.props.datakey} src={this.props.src}></audio>
			);
	}
}

export default Audio;