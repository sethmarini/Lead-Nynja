import React, { Component } from 'react';
import Navigation from '../Navigation';
import withAuthorization from '../Session/withAuthorization';
import LeadTable from './LeadTable';

class HomePage extends Component {

  render() {

    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <Navigation />
          </div>
          <div className="col-md-11">
              <div className="container-fluid">
              <LeadTable />
              </div>
          </div>
        </div>    
      </div>
    );
  }
}
// Authuser
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);