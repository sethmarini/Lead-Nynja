import React, { Component } from 'react';
import profileApi from "../../util/profileApi";
class LandingPage extends Component{


saveProfile = () =>{
	profileApi.saveProfile({
		// to parse data from NYT object
	// firstName: String,
  // lastName: Date,
  // phoneNumber: Number,
	// age: Number,
	address: {
  	street:document.getElementById("inputAddress").value,
    //address2:document.getElementById("inputAddress2").value,
    city:document.getElementById("inputCity").value,
    state:document.getElementById("inputState").value,
        // type: String,
        // uppercase: true,
        // required: true
//        enum: statesArray
    // },
		zip:document.getElementById("inputZip").value
	}

    // propertyValue: Number,
    // loanAmount: Number,

});
}
render() {
	return (
  <div className="container">
    
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress2">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">State</label>
          <select id="inputState" className="form-control">
            <option value>Choose...</option>
              <option value="AL">AL</option>
            	<option value="AK">AK</option>
            	<option value="AR">AR</option>
            	<option value="AZ">AZ</option>
            	<option value="CA">CA</option>
            	<option value="CO">CO</option>
            	<option value="CT">CT</option>
            	<option value="DC">DC</option>
            	<option value="DE">DE</option>
            	<option value="FL">FL</option>
            	<option value="GA">GA</option>
            	<option value="HI">HI</option>
            	<option value="IA">IA</option>
            	<option value="ID">ID</option>
            	<option value="IL">IL</option>
            	<option value="IN">IN</option>
            	<option value="KS">KS</option>
            	<option value="KY">KY</option>
            	<option value="LA">LA</option>
            	<option value="MA">MA</option>
            	<option value="MD">MD</option>
            	<option value="ME">ME</option>
            	<option value="MI">MI</option>
            	<option value="MN">MN</option>
            	<option value="MO">MO</option>
            	<option value="MS">MS</option>
            	<option value="MT">MT</option>
            	<option value="NC">NC</option>
            	<option value="NE">NE</option>
            	<option value="NH">NH</option>
            	<option value="NJ">NJ</option>
            	<option value="NM">NM</option>
            	<option value="NV">NV</option>
            	<option value="NY">NY</option>
            	<option value="ND">ND</option>
            	<option value="OH">OH</option>
            	<option value="OK">OK</option>
            	<option value="OR">OR</option>
            	<option value="PA">PA</option>
            	<option value="RI">RI</option>
            	<option value="SC">SC</option>
            	<option value="SD">SD</option>
            	<option value="TN">TN</option>
            	<option value="TX">TX</option>
            	<option value="UT">UT</option>
            	<option value="VT">VT</option>
            	<option value="VA">VA</option>
            	<option value="WA">WA</option>
            	<option value="WI">WI</option>
            	<option value="WV">WV</option>
            	<option value="WY">WY</option>          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip"/>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck"/>
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" onClick = { this.saveProfile} className="btn btn-primary">Sign in</button>
    
  </div>
	) 
}
}
export default LandingPage;
