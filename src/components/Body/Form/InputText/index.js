import React, { Component } from 'react'
import './index.css'
const InputText = props => 
              <input type="text" 
                className= { props.CSSstyle }
                name = { props.name }
                value={ props.value }
                onChange={ props.handleChange }
                placeholder = { props.holder }
              />

export default InputText
