import React, {Component} from 'react';
import Head from './Components/Head';
import MyClimbs from './Components/MyClimbs';
import NewRoute from './Components/NewRoute';
import Filter from './Components/Filter';
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

  getRoute = (id) => {
    console.log(this.state.myRoutes, id)
    axios.get(`/api/route?grade=${this.state.myRoutes[id].grade}`).then(res => {
      this.setState({
        myRoutes: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    let routeList = this.state.myRoutes.map((e, i) => {
      return (
        <Filter key={i}/>
      )
  })
    return (
      <div className="App">
        <Head />
        <MyClimbs 
          myRoutes={this.state.myRoutes}
          saveFn={this.saveGrade}
          removeFn={this.removeRoute}
          />
          <Filter
            key={routeList} 
            myRoutes={this.state.myRoutes}
            getFn={this.getRoute}
          />
        <NewRoute addFn={this.addRoute}
          myRoutes={this.state.myRoutes}
        />
        <footer id="footer">
          <div id="footer-container">Go send some Sick Routes!!</div>
        </footer>
      </div>
    );
  }
}

export default App;
