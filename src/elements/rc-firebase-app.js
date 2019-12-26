'use strict';
/*global window, firebase*/

import { LitElement } from 'lit-element';

class RcFirebaseApp extends LitElement {
    connectedCallback () {
        super.connectedCallback();

        const firebaseConfig = {
            apiKey: 'AIzaSyDerwhJnSIx8uWcH7CRcvmoWaa21ByZGik',
            authDomain: 'pocnext-a2ebe.firebaseapp.com',
            databaseURL: 'https://pocnext-a2ebe.firebaseio.com',
            projectId: 'pocnext-a2ebe',
            storageBucket: 'pocnext-a2ebe.appspot.com',
            messagingSenderId: '469529857514',
            appId: '1:469529857514:web:ce93e6472d149277237693',
            measurementId: 'G-XV3VVSVP76'
          };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        firebase.auth().signInAnonymously().catch(function(error) {
            console.warn(JSON.stringify(error, null, 2));
        });
    }
}

window.customElements.define('rc-firebase-app', RcFirebaseApp);
