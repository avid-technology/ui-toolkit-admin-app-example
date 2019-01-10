/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import React from 'react';
import {connect} from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';
import {makeAction} from '../redux/actions/makeAction';
import CustomMessage from '../components/CustomMessage';
import ChangeColor from '../components/ChangeColor';
import ChangeFontSize from '../components/ChangeFontSize';
import ChangeApplicationMode from '../components/ApplicationMode';
import ChangeServerLocation from '../components/ChangeServerLocation';
import SettingsTable from '../components/SettingsTable';
import ProgressBar from '../components/ProgressBar';
import ResetAllSettings from '../components/ResetAllSettings';
import './style.css';

class MainView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="f2 lh-title tc">Welcome in Admin App Example: {AV.User.name}</h1>
                    <div className="containerBody shadow-3">
                        <CustomMessage changeSettings={this.props.changeAdminSettings} userSettings={this.props.userSettings}/>
                        <ChangeColor changeSettings={this.props.changeAdminSettings} userSettings={this.props.userSettings}/>
                        <ChangeFontSize changeSettings={this.props.changeAdminSettings} userSettings={this.props.userSettings}/>
                        <ChangeApplicationMode changeSettings={this.props.changeAdminSettings} userSettings={this.props.userSettings}/>
                        <ChangeServerLocation changeSettings={this.props.changeAdminSettings} userSettings={this.props.userSettings}/>
                        <br/>
                        <ProgressBar changeSettings={this.props.changeAdminSettings} userSettings={this.props.userSettings}/>
                        <br/>
                        <ResetAllSettings changeSettings={this.props.changeAdminSettings} userSettingsReset={this.props.userSettingsReset}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="containerBody shadow-3">
                        <SettingsTable userSettings={this.props.userSettings}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userSettingsReset: state.exampleReducer,
    userSettings: state.exampleReducer.userSettings,
    spinner: state.exampleReducer.spinner,
    failedFetch: state.exampleReducer.failedFetch,
});

const mapDispatchToProps = {
    changeAdminSettings: makeAction(actionTypes.ADMIN_SETTINGS_ADD),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainView);
