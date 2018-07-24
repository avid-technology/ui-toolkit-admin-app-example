/**
 * Copyright 2017 by Avid Technology, Inc.
 */
import '../css/cloudux.min.css'
import {html} from './example';

export default class ApplicationContainer {
    constructor() {
        this.div = document.createElement('div');
        this.div.innerHTML = html;
        this.div.style.width = '100%';
        this.div.style.height = '100%';
    }

    returnElement() {
        return this.div;
    }
}
