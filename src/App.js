import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderCustomerContainer=()=>(<h1>Customer container</h1>);

  renderCustomerListContainer=()=>(<h1>Customer list container</h1>);

  renderCustomerNewContainer=()=>(<h1>Customer new container</h1>);

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={CustomersContainer}/>
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route path="/customers/:dni" component={this.renderCustomerListContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
