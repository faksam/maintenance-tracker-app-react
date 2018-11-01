import React from 'react';

import AuthForms from '../components/auth/AuthForms';

import creatRequest from '../../images/create-request.png';
import awaitApproval from '../../images/await-approval.png';
import trackProgress from '../../images/track-progress.png';
import getNotified from '../../images/get-notified.png';

const LandingPage = (props) => {
    const { history } = props;
    return (<div className="main-container">
        <div className="row">
            <h1 className="center header-logo">M - T - A</h1>
        </div>
        <div className="container">
            <div className="row center">
                <div className="col col-1-2">
                    <div className="row wall center">
                    </div>
                    <h3>M-T-A (Maintenance - Tracker - App) is an online maintenance service assistant that allows you to create
                    a maintenance request and track the progress of your request until it is resolved and completely
done.</h3>
                </div>
                <div className="col col-1-2 float-right">
                    <AuthForms history={history} />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <h3 className="center">HOW IT WORKS</h3>
                <hr />
            </div>
            <div className="row center">
                <div className="col col-1-4">
                    <div className="row">
                        <img className="description-img" src={creatRequest} />
                    </div>
                    <div className="row">
                        <h3>CREATE A REQUEST</h3>
                    </div>
                </div>
                <div className="col col-1-4">
                    <div className="row">
                        <img className="description-img" src={awaitApproval} />
                    </div>
                    <div className="row">
                        <h3>AWAIT APPROVAL</h3>
                    </div>
                </div>
                <div className="col col-1-4">
                    <div className="row">
                        <img className="description-img" src={trackProgress} />
                    </div>
                    <div className="row">
                        <h3>TRACK PROGRESS</h3>
                    </div>
                </div>
                <div className="col col-1-4">
                    <div className="row">
                        <img className="description-img" src={getNotified} />
                    </div>
                    <div className="row">
                        <h3>GET NOTIFIED</h3>
                    </div>
                </div>
            </div>
            <div className="row center">
                <h3>
                    With M-T-A there are no worries of leaving your office to look for the maitenance guy or waiting for days to know the progress
                    of your maitenance request.
</h3>
            </div>
            <br />
        </div>

        <div className="footer">
            <div className="row">
                <p>
                    © 2018 Copyright M-T-A by
<a target="_blank" href="http://www.fakunlesamuel.com">FakSam</a>
                </p>
            </div>
        </div>
    </div>
    );
};

export default LandingPage;
