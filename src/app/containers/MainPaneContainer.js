/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import React from 'react';
import {connect} from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';
import {makeAction} from '../redux/actions/makeAction';
import MainView from './MainView';

class PaneContainer extends React.Component {
    componentDidMount() {
        this.props.getAdminSettings();
    }

    render() {
        return (
            <MainView/>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    getAdminSettings: makeAction(actionTypes.ADMIN_SETTINGS_GET),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaneContainer);
