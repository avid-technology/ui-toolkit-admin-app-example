import React from 'react';

const changeColor = ({changeSettings, userSettings}) => {

    return (
        <div className="cux-toolbar ">
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log(event.target[0].value);

                userSettings.userMessageColor = event.target[0].value;
                changeSettings(userSettings);
            }}>
                <label htmlFor="name" className="cux-textbox-label">Set custom color:</label>
                <input type="color" className="w-40 cux-btn" defaultValue={userSettings.userMessageColor}/>
                <button style={{float: 'right'}} className="cux-btn" type="submit">Set color</button>
            </form>

        </div>
    );
};

export default changeColor;
