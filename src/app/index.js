/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import axios from 'axios';

export default class ApplicationContainer {

    constructor() {
        this.div = document.createElement('div');
        axios.get('https://127.0.0.1:8080/apis/avid.acs.attributes;realm=global;version=3/attributes?name=tomek')
            .then((res) => {
            this.div.innerHTML = JSON.stringify(res);
        });
    }

    returnElement() {
        return this.div;
    }
}