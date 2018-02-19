import React, { Component } from 'react'
import Tools from './Tools'
import Text from './Text'
import './index.css'
class Note extends Component {

	constructor(props){
		super(props)
		this.state = {
			hide: false
		}
		this.changeHideState = this.changeHideState.bind(this)
	}

	changeHideState(){
		this.setState({
			hide: !this.state.hide
		})
	}


	render(){
		return (
			<div className="mb-4 col-12 p-0 soft-shadow bg-soft-gray">


				{
					this.state.hide
					?
						<div
							className="box-hidden p-3"
							onClick={this.changeHideState}
						>
							<p className="mb-0 color-primary-blue text-gradient">
								THE NOTE WITH THE KEY "{this.props.info.key}" IS BEEN HIDDEN
							</p>
						</div>
					:
						<div className="container-fluid color-white p-3">
							<div className="row no-gutters text">
								<Text
									title={this.props.title}
									content={this.props.content}
								/>
							</div>
							<div className="row no-gutters tools">
								<Tools
									info={this.props.info}
									deleteNote={this.props.deleteNote}
									changeHideState={this.changeHideState}
								/>
							</div>
						</div>
				}

			</div>
		)
	}

}

export default Note