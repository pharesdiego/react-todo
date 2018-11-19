import React, { Component } from 'react'
import './index.css'
class Header extends Component {

	render(){
		return (

			<div className="jumbotron jumbotron-fluid bg-soft-gray soft-shadow">
				<div className="container">
					<div className="row">
						<div className="offset-1">
							<h1 className="title text-gradient"> To-dox </h1>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Header
