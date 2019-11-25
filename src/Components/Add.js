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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createRoute = () => {
        this.props.addFn({
            img: this.state.img,
            name: this.state.name,
            grade: this.state.grade
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
                        Image: <input 
                            name='img'
                            value={this.state.img}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div>
                        Name: <input 
                            name='name'
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div>
                        Grade: <input 
                            name='grade'
                            value={this.state.grade}
                            onChange={(e) => this.handleChange(e)}/>
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