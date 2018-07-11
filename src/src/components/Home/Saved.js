// use index.html file to make components file
import React, { Component } from 'react';
import profileApi from '../../util/profileApi';
class Saved extends Component {
  state = {
    profiles:[]
  }
  componentDidMount(){
    this.getSavedProfiles();
  }
  // this is to get all the articles from the DB
  getSavedProfiles = () => {
    profileApi.getProfiles().then((res) => {
      this.setState({ profiles: res.data });
    });
  };
// this is to delete articles from the DB
  deleteProfile = (id) => {
    profileApi.deleteProfile(id)
      .then(this.getSavedProfiles());
  };
  createProfileRows = () => {
    return this.state.profiles.map(profile => (
     <tr key= {profile._id}>
       <td>{profile.firstName}</td>
       <td>{profile.lastName}</td>
       <td>{profile.street}</td>
       <td>{profile.city}</td>
       <td>{profile.state}</td>
       <td>{profile.zip}</td>
       <td>{profile.propertyValue}</td>
       <td>{profile.loanAmount}</td>
       <td>{profile.phone}</td>
       <td>{profile.email}</td>
       <td><i className="fa fa-trash" onClick={() => this.deleteProfile(profile._id)}></i></td>
     </tr>
    ));
  };
    render() {
      return (
        <div className="saved">
          <div className="row">
          <div className="col-sm-12">
            <br />
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa fa-table"></i>Saved Profiles</strong>
                </h3>
              </div>
               <div className="panel-body" id="well-section"> 

<table className="table">
<thead>
  <tr>
    <th>First Name</th>
    <th>Last Name</th> 
    <th>Street</th>
    <th>City</th>
    <th>State</th>
    <th>Zip</th>
    <th>Property Value</th>
    <th>Loan Amount</th>
    <th>Phone</th>
    <th>Email</th>
    <th></th>
  </tr>
  </thead>
  <tbody>
              {
                this.createProfileRows()
              }
              </tbody>
              </table>
              </div> 
            </div>
          </div>
        </div>
          
        </div>
    
      );
    }
  }
  
  export default Saved;