/**
 * Copyright 2026 Mayita
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./bull-calendar.js";
import "./bull-roster.js";

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
        ? html`<bull-calendar></bull-calendar>`
        : ''}

      ${this.activePage === 'roster'
        ? html`<bull-roster></bull-roster>`
        : ''}
      ${this.activePage === 'about'
  ? html`
    <div style="background: rgba(61, 33, 18, 0.95); border-radius: 1rem; padding: var(--ddd-spacing-4); color: #f1f0cc;">
      <h2>About the Bull Poker League</h2>
      <p>Welcome to the Bull Poker League, home of the Holy Cow High Rollers!</p>
      
      <h3>Our Mission</h3>
      <p>The Bull Poker League is dedicated to bringing together skilled poker players for competitive tournaments and social gaming events. We celebrate strategy, skill, and the spirit of friendly competition.</p>
      
      <h3>What We Offer</h3>
      <ul>
        <li><strong>Regular Tournaments</strong> - Monthly competitions with varying stakes and formats</li>
        <li><strong>Player Development</strong> - Learn from experienced players and improve your game</li>
        <li><strong>Community</strong> - Meet fellow poker enthusiasts and build lasting connections</li>
        <li><strong>Professional Events</strong> - Organized games with fair play standards</li>
      </ul>
      
      <h3>Contact Us</h3>
      <p>Have questions? Want to join the league? Reach out to us at <a href="mailto:info@bullpokerleague.com" style="color: #a71d31;">info@bullpokerleague.com</a></p>
    </div>
  `
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