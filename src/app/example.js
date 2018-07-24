module.exports = { html: '<div style="width:100%;height:100%;overflow:auto;"> \
<div>Toolbar</div> \
<div class="cux-toolbar"> \
    <button class="cux-btn" disabled>Button1</button> \
    <button class="cux-btn">Button2</button> \
    <button class="cux-btn cux-btn-prim">Button Primary</button> \
</div> \
<div>Loading Indicators</div> \
<div> \
    <span class="loading"></span> \
    <span class="loading_small"></span> \
</div> \
<div>Expand / Collapse</div> \
<div> \
    <div class="cux-collapse coll-icon coll-left"></div> \
    <div class="cux-collapse coll-icon coll-right"></div> \
    <div class="cux-collapse coll-icon coll-up"></div> \
    <div class="cux-collapse coll-icon coll-down"></div> \
</div> \
<div>Tooltip</div> \
<div> \
    <div class="cux-tooltip" style="width:200px;height:20px;">Hello from the tooltip</div> \
</div> \
<div>Notification</div> \
<div> \
    <div class="cux-notification"> \
        <div class="loading"></div> \
        <div>Logging out and saving data</div> \
        <div class="message">Please wait!</div> \
    </div> \
</div> \
<div>Dialog</div> \
<div> \
    <div style="width:250px;margin:20px;"> \
        <div class="cux-dialog"> \
            <div class="dialog-header">Save As</div> \
            <div style="padding: 10px;"> \
                <div class="dialog-message">Message:</div> \
            </div> \
            <div class="dialog-footer"> \
                <button class="cux-btn dialog-btn-cancel">Cancel</button> \
                <button class="cux-btn dialog-btn-prim" disabled>Save</button> \
            </div> \
        </div> \
    </div> \
</div> \
<div>Multi-select Dialog</div> \
<div> \
    <div style="width:250px;margin:20px;"> \
        <div class="cux-dialog"> \
            <div class="dialog-header">Add or remove</div> \
            <div style="padding: 10px;"> \
                <div> \
                    <label for="name" class="cux-textbox-label">Name:</label> \
                    <input id="name" class="dialog-search cux-textbox cux-textbox-value" style="width: 40%"> \
                    <button class="cux-btn dialog-btn-cancel dialog-btn-multi-select" style="display: inline-block">Deselect All</button> \
                </div> \
                <div class="dialog-multi-select-row "> \
                    <input id="checkone" class="cux-checkbox" type="checkbox" checked> \
                    <label for="checkone" style="display: inline-block">Check one</label> \
                </div> \
                <div class="dialog-multi-select-row "> \
                    <input id="checktwo" class="cux-checkbox" type="checkbox" checked disabled> \
                    <label for="checktwo" style="display: inline-block">Check two</label> \
                </div> \
                <div class="dialog-multi-select-row "> \
                    <div class="cux-collapse coll-icon coll-down" style="display: inline-block; margin: 0 10px;"></div> \
                    <input id="checkthree" class="cux-checkbox" type="checkbox"> \
                    <label for="checkthree" style="display: inline-block">Check three</label> \
                </div> \
                <div class="dialog-multi-select-row "> \
                    <input id="checkfour" class="cux-checkbox" type="checkbox" disabled> \
                    <label for="checkfour" style="display: inline-block">Check four</label> \
                </div> \
                <div class="dialog-multi-select-row "> \
                    <input id="checkfive" class="cux-radio-btn" type="radio" disabled> \
                    <label for="checkfive" style="display: inline-block">Check five</label> \
                </div> \
                <div class="dialog-multi-select-row "> \
                    <input id="checksix" class="cux-radio-btn" type="radio"> \
                    <label for="checksix" style="display: inline-block">Check six</label> \
                </div> \
                <div class="dialog-multi-select-row "></div> \
            </div> \
        </div> \
    </div> \
</div> \
<div>Right-click Menu</div> \
<ul class="cux-rclick-menu" style="width: 250px"> \
    <li>Upload file</li> \
    <li>Upload video</li> \
</ul>'
}