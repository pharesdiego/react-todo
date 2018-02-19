import React, { Component } from 'react'
import './index.css' 
class Button extends Component {

	render(){
		return(
			<div className="button-to">
				<p
					className="m-0"
					onClick={this.props.event}
				>
					{ this.props.text }
				</p>
				<div className="box-after" 
					style={{
						animationDelay: `${this.props.delay}s`
					}}
				>
				</div>
			</div>
		)
	}

}

export default Button
