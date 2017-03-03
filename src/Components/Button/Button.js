import React, {Component} from 'react';

class Button extends Component {
	render(){
		return(
			<div data-key={this.props.datakey} className="key">
				<kbd>{this.props.kbd}</kbd>
				<span className="sound">{this.props.type}</span>
			</div>
			);
	}
}

export default Button;