

'use strict';

import { LitElement } from 'lit-element';

class RcRemoteConfig extends LitElement {
    connectedCallback () {
        super.connectedCallback();

        const remoteConfig = firebase.remoteConfig();
        remoteConfig.settings = {
          minimumFetchIntervalMillis: 1800,
        };

        remoteConfig.defaultConfig = ({
          showFeature: false,
          language: '',
          inTheMorning: false,
          platform: 'no specified'
        });

      remoteConfig.fetchAndActivate().then(() => {
        const showFeature = remoteConfig.getBoolean('showFeature');
        const language = remoteConfig.getString('language');
        const inTheMorning = remoteConfig.getBoolean('inTheMorning');
        const platform = remoteConfig.getString('platform');
        const values = {
          showFeature: showFeature,
          language: language,
          inTheMorning: inTheMorning,
          platform: platform
        };

        // window.alert(JSON.stringify(values, null, 2));

        console.log(JSON.stringify(values, null, 2));

        this.dispatchEvent(new CustomEvent('remote-config-retrieved', {
          bubbles: true,
          composed: true,
          detail: values
        }));
      }, (error) => {
          console.error(error);
      });
    }
}

window.customElements.define('rc-remote-config', RcRemoteConfig);


