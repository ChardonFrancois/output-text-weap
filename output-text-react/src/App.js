import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInput from './Components/FormInput/FormInput'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <FormInput />
      </div>
    )
  }
}
