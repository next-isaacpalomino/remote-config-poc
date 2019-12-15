/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView4 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  static get properties() {
    return {
      data: {type: Object}
    };
  }

  constructor() {
    super();
    this.data = {};
  }

  render() {
    return html`
      <section>
        <h2>Paso complejo de datos</h2>
        <p>Remote Config permite, además de pasar valores primitivos, poder enviar estructuras más complejas como Objetos.<br/>
      En este ejemplo se muestran los valores de un objeto configurado en <b>Remote Config</b></p>
      </section>
      <section>
        ${this._showData()}
      </section>
    `;
  }

  _showData() {
    return html`
      <ul>
      ${Object.getOwnPropertyNames(this.data).map(key => html`<li>${key}: ${this.data[key]}</li>`)}
      </ul>
    `;
  }
}

window.customElements.define('my-view4', MyView4);
