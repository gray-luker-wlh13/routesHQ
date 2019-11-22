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

    render(){
        return (
            <div className="add">
                <form>
                    <div>
                        Image: <input />
                    </div>
                    <div>
                        Name: <input />
                    </div>
                    <div>
                        Grade: <input />
                    </div>
                    <div>
                        <button>Add Climb</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;