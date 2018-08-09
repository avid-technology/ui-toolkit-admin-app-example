import React from 'react';

const settingsTable = ({userSettings}) => {

    function fontSize() {
        switch (userSettings.userMessageSize) {
            case ('0.5vw'):
                return 'Small';
            case ('1.0vw'):
                return 'Medium';
            case ('1.5vw'):
                return 'Big';
            default:
                return null;
        }
    }

    return (
        <div className="cux-main-table-custom">
            <h1 className="f3 lh-title tc pa2">Settings</h1>
            <div className="cux-table-custom shadow-1-ns">
                <div className="cux-table-heading">
                    <div className="cux-table-head" style={{width: '30%'}}>Option</div>
                    <div className="cux-table-head">Value</div>
                </div>
                <div className="cux-table-body">
                    <div className="cux-table-row">
                        <div className="cux-table-cell">Custom message</div>
                        <div className="cux-table-cell">{userSettings.userMessage}</div>
                    </div>
                    <div className="cux-table-row">
                        <div className="cux-table-cell">Picked Color</div>
                        <div className="cux-table-cell">{userSettings.userMessageColor}</div>
                    </div>
                    <div className="cux-table-row">
                        <div className="cux-table-cell">Font Size</div>
                        <div className="cux-table-cell">{fontSize()}</div>
                    </div>
                    <div className="cux-table-row">
                        <div className="cux-table-cell">Application mode</div>
                        <div className="cux-table-cell">{userSettings.applicationMode}</div>
                    </div>
                    <div className="cux-table-row">
                        <div className="cux-table-cell">Used Servers</div>
                        <div className="cux-table-cell">{userSettings.usServer ? 'United State ' : ''}
                            {userSettings.germanyServer ? 'Germany ' : ''} {userSettings.chinaServer ? 'China' : ''}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default settingsTable;
