/**
 * Copyright 2026 Mayita
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./bull-calendar.js";
import "./bull-roster.js";
import "./bull-events.js";

/**
 * `bull-pages`
 * 
 * @demo index.html
 * @element bull-pages
 */
export class BullPages extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "bull-pages";
  }

  constructor() {
    super();
    this.activePage = 'calendar';
   }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      activePage: { type: String, reflect: true },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      nav {
        display: flex;
        gap: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-4);
      }
      nav button {
        padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-sm);
        background-color: var(--ddd-theme-accent);
      }
      nav button:hover {
        background-color: var(--ddd-theme-primary);
        color: var(--ddd-theme-accent);
      }
      nav button.active {
        background-color: var(--ddd-theme-primary);
        color: var(--ddd-theme-accent);
        font-weight: bold;
      }
      h3 span {
        font-size: var(--bull-app-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
  return html`
    <div class="wrapper">
      <button 
        style="margin-bottom: var(--ddd-spacing-3);"
        @click="${() => {
          document.getElementById('demo').style.display = 'block';
          document.getElementById('pagesContainer').style.display = 'none';
        }}">
        Home
      </button>
      <nav>
        <button 
          class="${this.activePage === 'calendar' ? 'active' : ''}"
          @click="${() => this.activePage = 'calendar'}">
          Calendar
        </button>
        <button 
          class="${this.activePage === 'roster' ? 'active' : ''}"
          @click="${() => this.activePage = 'roster'}">
          Roster
        </button>
        <button
          class="${this.activePage === 'about' ? 'active' : ''}"
          @click="${() => this.activePage = 'about'}">
          About
        </button>
      </nav>

      ${this.activePage === 'calendar'
        ? html`<bull-calendar @event-clicked=${() => this.activePage = 'events'}></bull-calendar>`
        : ''}

      ${this.activePage === 'roster'
        ? html`<bull-roster></bull-roster>`
        : ''}

      ${this.activePage === 'about'
        ? html`<div style="padding: var(--ddd-spacing-4);">
            <h2>About the Bull Poker League</h2>
            <p>Welcome to the Bull Poker League, home of the Holy Cow High Rollers. We are a premier poker league featuring the best players and legendary bulls competing for glory and cash prizes.</p>
            <h3>Our Mission</h3>
            <p>To create an exciting and competitive poker environment where skill, strategy, and a bit of luck determine the champions.</p>
            <h3>Featured Players & Bulls</h3>
            <p>Our league showcases talented players competing alongside our iconic bull mascots. Check out our roster to learn more about each participant.</p>
          </div>`
        : ''}
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(BullPages.tag, BullPages);