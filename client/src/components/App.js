import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



import ServiceAuth from '../service/auth.service'



export default class App extends Component {
    constructor() {
      super()
        this.state = { signnedUser: undefined }
        this.serviceAuth = new ServiceAuth()
    }

  
    componentDidMount = () => {
      this.serviceAuth
          .signnedIn()
          .then(response => this.setStateUser(response.data))
          .catch(err => this.setStateUser(undefined))
    }

  
    setStateUser = user => this.setState({ signnedUser: user }, () => console.log('CURRENT APP STATE:', this.state))
    
  
  
  
  render() {
    return (
        <>
          <h1>Hola mundo</h1>
        
            <main>
                <Switch>
              
                </Switch>
            </main>
        </>

    )
  }
}
