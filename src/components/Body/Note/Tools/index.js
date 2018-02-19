import React, { Component } from 'react'
import Button from './../../../Button'
import Info from './../Info'
class Tools extends Component {

	constructor(props){
		super(props)
		this.showInfo = this.showInfo.bind(this)
		this.deleteNote = this.deleteNote.bind(this)
		this.state = {
			viewInfo: false
		}
	}

	showInfo(){
		this.setState({
			viewInfo: !this.state.viewInfo
		})
	}
	deleteNote(){
		this.props.deleteNote(this.props.info.key)
	}

	render(){

		return(
			<div className="col-12">
				<div className="w-100 d-flex">
					<Button 
					text='Info'
					delay={1}
					event={this.showInfo}
					/>
					<Button
						text='Delete'
						delay={2}
						event={this.deleteNote}
					/>
					<Button
						text='Just Hide It'
						delay={3}
						event={this.props.changeHideState}
					/>
				</div>
				{
					this.state.viewInfo
					? 
						<Info 
							info={JSON.stringify(this.props.info, null, 2)}
						/>
					: null
				}
			</div>
		)

	}

}

export default Tools