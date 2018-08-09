import React from 'react';

const changeServerLocation = ({changeSettings, userSettings}) => {
    return (
        <div style={{width: '250px', margin: 'auto'}}>
            <form onSubmit={(event) => {
                event.preventDefault();
                userSettings.usServer = event.target[0].checked;
                userSettings.germanyServer = event.target[1].checked;
                userSettings.chinaServer = event.target[2].checked;
                changeSettings(userSettings);
            }}>
                <div className="cux-dialog">
                    <div className="cux-dialogBox-header">Use Servers</div>
                    <div className="dialog-multi-select-row ">
                        <input type="checkbox" className="cux-checkbox" value="US" defaultChecked={userSettings.usServer}/>
                        <label htmlFor="checkone">United State</label>
                    </div>
                    <div className="dialog-multi-select-row ">
                        <input type="checkbox" className="cux-checkbox" value="Germany" defaultChecked={userSettings.germanyServer}/>
                        <label htmlFor="checkone">Germany</label>
                    </div>
                    <div className="dialog-multi-select-row ">
                        <input type="checkbox" className="cux-checkbox" value="China" defaultChecked={userSettings.chinaServer}/>
                        <label htmlFor="checkone">China</label>
                    </div>
                    <div className="cux-dialogBox-footer">
                        <button className="cux-btn" style={{'background-color': '#464754'}} type="submit">Set Servers</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default changeServerLocation;
