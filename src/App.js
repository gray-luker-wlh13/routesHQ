import React, {Component} from 'react';
import Head from './Components/Head';
import MyClimbs from './Components/MyClimbs';
import NewRoutes from './Components/NewRoutes';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Head />
        <MyClimbs />
        <NewRoutes />
      </div>
    );
  }
}

export default App;
