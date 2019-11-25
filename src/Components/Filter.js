import React, {Component} from 'react';

class Filter extends Component {
    constructor(props){
        super(props);

        this.state = {
            filteredRoute: [],
            toggleFilter: false,
            userInput: ''
        }
    }

    handleInputChange = (val) => {
        this.setState({
            userInput: val
        })
    }

    filterToggle = () => {
        this.setState({
            toggleFilter: !this.state.toggleFilter
        })
    }

    render(){
        return(
            <div className="filter">
                <div className="filter-handles">
                <b>Filter: </b><input onChange={e => this.handleInputChange(e.target.value)}/>
                </div>
                <div className="filter-handles">
                    <button onClick={() => this.props.getFn()}>Filter</button>
                </div>
            </div>
        )
    }
}

export default Filter