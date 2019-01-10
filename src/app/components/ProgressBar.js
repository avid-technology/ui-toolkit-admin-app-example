import React from 'react';

const progressBar = ({userSettings}) => {
    let usedSettingsCounter = 0;

    function countUsedSettings() {
        if (userSettings.userMessage !== undefined) {
            usedSettingsCounter++;
        }
        if (userSettings.userMessageColor !== undefined) {
            usedSettingsCounter++;
        }
        if (userSettings.applicationMode !== undefined) {
            usedSettingsCounter++;
        }
        if (userSettings.userMessageSize !== undefined) {
            usedSettingsCounter++;
        }
        if (userSettings.usServer !== undefined && !userSettings.germanyServer !== undefined && !userSettings.chinaServer !== undefined) {
            usedSettingsCounter++;
        }
        return usedSettingsCounter;
    }

    return (
        <div className="cux-toolbar ">
            <div className="cux-progress-bar">
                <div className="cux-progress-bar-label">
                    Progress:
                </div>
                <div className="cux-bar">
                    <div className="cux-bar-loading" style={{width: `${countUsedSettings()/5*100}%`}} />
                </div>
            </div>
        </div>
    );
};

export default progressBar;
