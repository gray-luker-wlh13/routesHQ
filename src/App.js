import React, {Component} from 'react';
import Head from './Components/Head';
import MyClimbs from './Components/MyClimbs';
import NewRoutes from './Components/NewRoutes';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      myRoutes: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/routes').then(res => {
      this.setState({
        myRoutes: res.data
      })
    })
    .catch(err => console.log(err));
  }

  addRoute = (body) => {
    axios.post('/api/routes', body).then(res => {
      this.setState({
        myRoutes: res.data
      })
    })
    .catch(err => console.log(err))
  }

  saveGrade = (id, body) => {
    axios.put(`/api/routes/${id}`, body).then(res => {
      this.setState({
        myRoutes: res.data
      })
    })
    .catch(err => console.log(err))
  }

  removeRoute = (id) => {
    axios.delete(`/api/routes/${id}`).then(res => {
      this.setState({
        myRoutes: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    console.log(this.state.myRoutes)
    return (
      <div className="App">
        <Head />
        <MyClimbs 
          myRoutes={this.state.myRoutes}
          saveFn={this.saveGrade}
          removeFn={this.removeRoute}
          />
        <NewRoutes />
      </div>
    );
  }
}

export default App;
