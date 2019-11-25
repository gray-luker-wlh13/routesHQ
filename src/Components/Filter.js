import React, {Component} from 'react';

class Filter extends Component {
    constructor(){
        super();

        this.state = {
            displayMenu: false
        }
    }

    showDropdown = (event) => {
        event.preventDefault();
        this.setState({displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropDown)
        })
    }

    hideDropDown = () => {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropDown)
        })
    }

    render(){
        return(
            <div className='filter-drop'>
                <div className='button' onClick={this.showDropdown}>
                    <div>Filter</div>
                </div>
                {this.state.displayMenu ? (
                    <ul>
                    <li onClick={() => this.props.setFilterNum(0)}>V0</li>
                    <li onClick={() => this.props.setFilterNum(1)}>V1</li>
                    <li onClick={() => this.props.setFilterNum(2)}>V2</li>
                    <li onClick={() => this.props.setFilterNum(3)}>V3</li>
                    <li onClick={() => this.props.setFilterNum(4)}>V4</li>
                    <li onClick={() => this.props.setFilterNum(5)}>V5</li>
                    <li onClick={() => this.props.setFilterNum(6)}>V6</li>
                    <li onClick={() => this.props.setFilterNum(7)}>V7</li>
                    <li onClick={() => this.props.setFilterNum(8)}>V8</li>
                    <li onClick={() => this.props.setFilterNum(9)}>V9</li>
                    <li onClick={() => this.props.setFilterNum(10)}>V10</li>
                    <li onClick={() => this.props.setFilterNum(11)}>V11</li>
                    <li onClick={() => this.props.setFilterNum(12)}>V12</li>
                    <li onClick={() => this.props.setFilterNum(13)}>V13</li>
                    <li onClick={() => this.props.setFilterNum(14)}>V14</li>
                    <li onClick={() => this.props.setFilterNum(15)}>V15</li>
                    <li onClick={() => this.props.setFilterNum(16)}>V16</li>
                </ul>
                ): (
                    null
                )}
                
            </div>
        )
    }
}

export default Filter;