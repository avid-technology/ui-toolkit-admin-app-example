/**
 * Copyright 2017 by Avid Technology, Inc.
 */
import {getLocalization} from 'cloudux-l10n';
import l10nData from '../l10n/lang.en.json';

export default class ApplicationContainer {


    constructor() {
        fetch('https://127.0.0.1:8080/apis/avid.acs.attributes;realm=global;version=3/attributes?name=tomek', {
            credentials: "same-origin"
        }).then((res) => {
            this.div = document.createElement('div');
            this.div.innerHTML = 'tomek';
        })
    }

    returnElement() {
        return this.div;
    }

}

async function getUser() {
    return await fetch('https://127.0.0.1:8080/apis/avid.acs.attributes;realm=global;version=3/attributes?name=tomek')
}