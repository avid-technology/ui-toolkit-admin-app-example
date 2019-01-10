import React from 'react';

const resetAllSettings = ({changeSettings, userSettingsReset}) => {
    return (
        <div className="cux-toolbar" style={{display: 'flex', justifyContent: 'center'}}>
            <form onSubmit={(event) => {
                event.preventDefault();
                userSettingsReset.userSettings = {};
                changeSettings(userSettingsReset.userSettings);
            }}>
                <button style={{float: 'right'}} className="cux-btn" type="submit">Reset All Settings</button>
            </form>
        </div>
    );
};

export default resetAllSettings;
