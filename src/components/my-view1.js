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

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        .feature-text {
          text-align: center;
          padding: 0.5rem;
          background-color:green;
          color: #fff;
        }
      `
    ];
  }

  static get properties() {
    return {
      showFeature: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.showFeature = false;
  }

  render() {
    return html`
      <section>
        <h2>Lanzamiento Parcial</h2>
        <p>Remote Config permite hacer un lanzamiento parcial para un porcentaje de usuarios aleatorio.
          De esta forma, en vez abrir una nueva feature a al 100% de los mismos, se abre poco a poco
          para ver el grado de aceptación del mismo.
        </p>
        <p>Para este ejemplo, el texto de abajo sólo se mostrará al <b>50% de los usuarios</b>.</p>
        <div class="firebase-config">
          <p><b>La configuración que se ha usado de Remote Config es:</b><br/>
          Parámetro: showFeature (valor por defecto: false):<br/>
          Condición: Usuario de Percentil Aleatorio (Valor: 50%)</p>
        </div>
      </section>
      <section>
        ${this._renderFeature()}
      </section>
    `;
  }

  _renderFeature() {
    let result = html``;

    if (this.showFeature) {
      result = html`<p class="feature-text">Se muestra la nueva funcionalidad</p>`;
    }

    return result;
  }
}

window.customElements.define('my-view1', MyView1);
