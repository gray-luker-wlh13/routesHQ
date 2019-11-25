import React, {Component} from 'react';

class Add extends Component {
    constructor(props){
        super(props);

        this.state = {
            img: '',
            name: '',
            grade: ''
        }
    }

    handleChange = (val) => {
        this.setState({
            img: val,
            name: val,
            grade: val
        })
    }

    createRoute = () => {
        this.props.addFn({
            img: this.props.routeList.img,
            name: this.props.routeList.name,
            grade: this.props.routeList.grade
        })
        this.setState({
            img: '',
            name: '',
            grade: ''
        })
    }

    render(){
        return (
            <div className="add">
                <form className="add-container">
                    <div>
                        Image: <input onChange={(e) => this.handleChange(e.target.value)}/>
                    </div>
                    <div>
                        Name: <input onChange={(e) => this.handleChange(e.target.value)}/>
                    </div>
                    <div>
                        Grade: <input onChange={(e) => this.handleChange(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={() => this.createRoute()}>Add Climb</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;