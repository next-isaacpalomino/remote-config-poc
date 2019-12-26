/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// We are lazy loading its reducer.
import shop from '../reducers/shop.js';
store.addReducers({
  shop
});

// These are the elements needed by this element.
import './shop-products.js';
import './shop-cart.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class MyView3 extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      already: {type: Boolean}
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
      .feature-text {
        text-align: center;
        padding: 0.5rem;
        background-color:blue;
        color: #fff;
      }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h2>Fecha/Hora</h2>
        <p>Remote Config permite activar una propiedad en una fecha y hora determinada.
          Esto es muy útil cuando se quieren mostrar campañas por ejemplo.
        </p>
        <div class="firebase-config">
          <p><b>La configuración que se ha usado de Remote Config es:</b><br/>
          Parámetro: beforeMidnight (valor por defecto: other)<br/>
          Condición: Fecha/Hora (Valor: Después del 31 dic. 2019 23:50:00 Europe/Madrid</p>
        </div>
      </section>
      <section>
        ${this._renderFeature()}
      </section>
    `;
  }

  _renderFeature() {
    let result = html``;

    if (this.already) {
      result = html`<p class="feature-text">Este texto se muestra a partir de una hora configurada en <b>Remote Config</b></p>`;
    }

    return result;
  }

}

window.customElements.define('my-view3', MyView3);
