import React, { Component } from 'react'
import './../css/heroImg.css';
export default class HeroImg extends Component {
    render() {
        return (
            <div className='heroImg'>
                <div className='overlay'></div>
                <div className='container h-100'>
                    <div className='header-text'>
                        <h1>{/* {this.props.pageName} */}courses</h1>
                    </div>

                </div>
            </div>
        )
    }
}
