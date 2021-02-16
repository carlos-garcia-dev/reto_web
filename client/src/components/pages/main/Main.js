import React, {Component} from 'react'
import { Container } from 'react-bootstrap'


export default class Main extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined,
            publications: undefined
        }
    }


    render() {
    return(
        <Container>
                
            <h1 className="page-title">Main</h1>

        </Container>
      )
    }
}
