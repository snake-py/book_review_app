import React, { Component } from 'react'
import ResultsList from '../elements/ResultsList'


export default class Results extends Component {
    render() {
        return (
            <div>
                you Searched 
                <ResultsList />
            </div>
        )
    }
}
