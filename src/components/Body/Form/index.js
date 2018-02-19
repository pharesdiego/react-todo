import React, { Component } from 'react'
import InputText from './InputText'
import './index.css'

class Form extends Component {

	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			title: '',
			content: ''
		}
    this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

  handleSubmit(){
    this.props.createNote({
      title: this.state.title,
      content: this.state.content,
      key: parseInt(Math.random() * 10000),
      date: new Date().toString()
    })
    this.setState({
      title:'',
      content:''
    })
  }


	render(){
		return (
			<div className="col-12 mb-4 px-0 py-3 bg-hard-gray">
        <div className="container container-fluid">
          <div className="row no-gutters">

            <div className="col-12">

              <div className="w-100 d-flex">
                <p className="input-label size-48 color-white d-inline">
                  Title
                </p>
                <InputText
                  name = "title"
                  value = { this.state.title }
                  handleChange={ this.handleChange }
                  holder = 'Insert title'
                  CSSstyle = 'input-text input-reset color-white transparent w-100 size-32 p-3'
                />
              </div>

              <div className="box-after"></div>
            </div>

            <div className="col-12">

              <div>
                <p className="input-label size-48 color-white d-inline mb-0">
                  Content
                </p>
                <InputText
                  name = "content"
                  value= { this.state.content }
                  handleChange={ this.handleChange }
                  holder = 'Note content'
                  CSSstyle = 'input-text input-reset color-white transparent w-100 size-24 p-3'
                />
              </div>

              <div
                className="box-after"
                style={{
                  animationDelay: '2s'
                }}
              >
              </div>
            </div>

            <div className="col-md-3 col-sm-12 mt-3">
              <div
                className="submit color-white d-flex justify-content-center align-items-center"
                onClick={ this.handleSubmit }
              >
                Create
              </div>
            </div>
          </div>
        </div>
			</div>
		)
	}
}

export default Form

/*
<InputText
  name = "title"
  value = { this.state.title }
  handleChange={ this.handleChange }
  holder = 'Insert title'
/>
<InputText
  name = "content"
  value= { this.state.content }
  handleChange={ this.handleChange }
  holder = 'Note content'
/>
*/