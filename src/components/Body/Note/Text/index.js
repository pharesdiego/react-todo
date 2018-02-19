import React, { Component } from 'react'


const Text = props => 
              <div className="col-12">
                <h4 className="word-wrap"> {props.title} </h4>
                <p className="word-wrap"> {props.content} </p>
              </div>

export default Text