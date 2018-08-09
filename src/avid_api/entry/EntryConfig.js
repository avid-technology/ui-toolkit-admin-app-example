/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import appConfig from '../../package.json';
import EntryWrapper from './EntryWrapper';


export default {
    factory: (config) => {
        return new EntryWrapper(config);
    },
    config: {
        breakpoints: {
            0: 'narrow',
            250: 'small',
            705: 'medium',
            945: 'wide',
            1350: 'extrawide',
        },
        dockable: false,
        timeline: false,
        inspector: false,
        inspectorConfig: {
            playerEditModeOn: false,
        },
        isMultiInstance: true,
        color: 'rgb(232, 108, 49)',
        unrenderOnHide: false,
    },
    menuIcon: {
        group: 200,
        orderInGroup: 202,
        title: appConfig['identity']['appName'],
        icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1zcXVhcmUiPiAgICA8cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0Pjwvc3ZnPg==',
        gradient: ['#ba2f82', '#cf4c85'],
    },
};
