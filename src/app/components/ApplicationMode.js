import React from 'react';

const applicationMode = ({changeSettings, userSettings}) => {
    return (
        <div className="cux-toolbar tc">
            <form onSubmit={(event) => {
                event.preventDefault();
                userSettings.applicationMode = event.target[0].value;
                changeSettings(userSettings);
            }}>
                <div className="cux-drop-down-header">
                    <label htmlFor="date" className="cux-textbox-label">Application mode:</label>
                    <select id="date" className="cux-drop-down-toggle">
                        <option selected={userSettings.applicationMode === 'Off'} value="Off" className="cux-drop-down-item">Off</option>
                        <option selected={userSettings.applicationMode === 'On'} value="On" className="cux-drop-down-item">On</option>
                        <option selected={userSettings.applicationMode === 'Test'} value="Test" className="cux-drop-down-item">Test</option>
                    </select>
                    <button style={{float: 'right'}} className="cux-btn" type="submit">Set mode</button>
                </div>
            </form>
        </div>
    );
};

export default applicationMode;
