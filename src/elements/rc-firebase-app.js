'use strict';

import { LitElement } from 'lit-element';

class RcFirebaseApp extends LitElement {
    connectedCallback () {
        super.connectedCallback();

        const firebaseConfig = {
            apiKey: "AIzaSyBixohYGob4lZUXkoADgqSFldf7VhXc46A",
            authDomain: "remote-config-poc-322e8.firebaseapp.com",
            databaseURL: "https://remote-config-poc-322e8.firebaseio.com",
            projectId: "remote-config-poc-322e8",
            storageBucket: "remote-config-poc-322e8.appspot.com",
            messagingSenderId: "109371162123",
            appId: "1:109371162123:web:5204a3e98baf60e59ad10e",
            measurementId: "G-PG5XPGSWRF"
          };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        firebase.auth().signInAnonymously().catch(function(error) {
            console.warn(JSON.stringify(error, null, 2));
        });


        // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        //     console.warn(JSON.stringify(error, null, 2));
        // });

    }
}

window.customElements.define('rc-firebase-app', RcFirebaseApp);
