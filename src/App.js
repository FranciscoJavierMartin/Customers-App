import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  renderHome=()=>(<h1>Home</h1>);

  renderCustomerContainer=()=>(<h1>Customer container</h1>);

  renderCustomerListContainer=()=>(<h1>Customer list container</h1>);

  renderCustomerNewContainer=()=>(<h1>Customer new container</h1>);

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome}/>
          <Route exact path="/customers" component={this.renderCustomerContainer}/>
          <Route exact path="/customers/:dni" component={this.renderCustomerListContainer}/>
          <Route exact path="/customers/new" component={this.renderCustomerNewContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
