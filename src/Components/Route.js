import React, {Component} from 'react';

class Routes extends Component {
    constructor(props){
        super(props);

        this.state = {
            toggleReGrade: false,
            reGradeInput: ''
        }
    }

    toggleEdit = () => {
        this.setState({
            toggleReGrade: !this.state.toggleReGrade
        })
    }

    handleInput = (val) => {
        this.setState({
            reGradeInput: val
        })
    }

    saveButton = () => {
        this.props.saveFn(this.props.id, {newGrade: this.state.reGradeInput})
        this.toggleEdit()
    }

    render(){
        let route = this.props.route
        return (
            <div className="routes">
                {this.state.toggleReGrade ? (
                    <div>
                        <input onChange={(e) => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.saveButton()}>Save</button>
                    </div>
                ) : (
                    <div className="route-containers">
                        <img 
                        src={route.img}
                        id="route-imgs"
                        />
                        <div className="route-info">
                            <p><b>Name:</b> {route.name}</p>
                            <p onDoubleClick={() => this.toggleEdit()}><b>Grade:</b> {route.grade} 
                            <br/>
                            double click to edit</p>
                        </div>
                        <button onClick={() => this.props.removeFn(this.props.id)}>Send!!</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Routes;