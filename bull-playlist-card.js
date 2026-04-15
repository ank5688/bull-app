/**
 * Copyright 2026 Mayita
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `bull-playlist-card`
 *
 * @demo index.html
 * @element bull-playlist-card
 */
export class BullPlaylistCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "bull-playlist-card";
  }

  constructor() {
    super();
    this.src = "";
  }

  static get properties() {
    return {
      ...super.properties,
      src: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
      }
      img {
        width: 100%;
        height: 450px;
        object-fit: cover;
        display: block;
      }
    `];
  }

  render() {
    return html`<img src="${this.src}" alt="">`;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(BullPlaylistCard.tag, BullPlaylistCard);
