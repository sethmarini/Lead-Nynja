import React from 'react';
import LeadChart from './Chart'
import Navigation from '../Navigation'

const AnalyticsPage = () =>
    <div>
    <div className="row">
        <div className="col-md-1">
        <Navigation />
        </div>
        <div className="col-md-11">
            <div className="container-fluid">
            <LeadChart />
            </div>
        </div>
    </div>    
    </div>

export default AnalyticsPage;