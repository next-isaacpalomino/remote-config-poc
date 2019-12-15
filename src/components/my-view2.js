/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html,css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});

// These are the elements needed by this element.
import './counter-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView2 extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      // This is the data from the store.
      _clicks: { type: Number },
      _value: { type: Number },
      language: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        .spanish-shop, .non-spanish-shop {
          text-align:center;
        }
        .spanish-shop img, .non-spanish-shop img {
          width: 300px;
        }
      `
    ];
  }

  constructor() {
    super();
    // this.showSpanishFlag = false;
  }

  render() {
    return html`
      <section>
        <h2>Idioma</h2>
        <p>Remote Config permite aplicar valores en función del idioma predefinido del usuario.
        Asímismo, se podrían adaptar textos, banners, features, etc, a usuarios que usen un idioma en concreto
        <br><br>
        <p>En el ejemplo, se muestran diferentes textos dependiendo de si el usuario tiene configurado el español como idioma o no.</p>
        ${this._renderSpanish()}
      </section>
    `;
  }

  _renderSpanish() {
    let result;

    if (this.language === 'spanish') {
      result = html`
        <div class="spanish-shop">
          <p><a href="#">Entra a nuestra tienda exclusiva para España</a></p>
          <img src="/images/logos/spanish_flag.jpg"></img>
        </div>`;
    } else if (this.language === 'other') {
      result = html`
        <div class="non-spanish-shop">
          <p><a href="#">Enter in our exclusive Shop</a></p>
          <img src="/images/logos/europe_flag.png"></img>
        </div>
        `;
    }

    return result;
  }
}

window.customElements.define('my-view2', MyView2);
