import React, { Component } from 'react'
import Note from './Note'
import Form from './Form'

class Body extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			notes: []
		}
		this.createNote = this.createNote.bind(this)
		this.deleteNote = this.deleteNote.bind(this)
	}

	createNote(data){
		this.state.notes.unshift(data)
		this.setState({
			notes: this.state.notes
		})
	}
	deleteNote(key){
		this.setState({
			notes: this.state.notes.filter(note => note.key != key)
		})
	}

	render(){

		return(
			<div className="container">
				<div className="row">

						<Form
							createNote={this.createNote}
						/>

						{
							this.state.notes.map(
								({title, content, key, date}) =>
									<Note
										key={key} 
										title={title}
										content={content}
										deleteNote={this.deleteNote}
										info={{
											title,
											content,
											key,
											date
										}}
									/>
							)
						}
				</div>
			</div>
		)
	}

}

export default Body