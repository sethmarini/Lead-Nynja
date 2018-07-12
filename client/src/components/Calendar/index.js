import React from 'react';
import Navigation from '../Navigation'

const CalendarPage = () =>
  <div>
    <div className="row">
        <div className="col-md-1">
        <Navigation />
        </div>
        <div className="col-md-11">
            <div className="container-fluid">
            {/* <LeadCalendar /> */}
              Calendar goes here
            </div>
        </div>
    </div>    
  </div>
export default CalendarPage;

