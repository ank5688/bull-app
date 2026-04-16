/**
 * Copyright 2026 Mayita
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import eventsData from "./bull-calendar-events-data.json";

/**
 * `bull-app`
 * 
 * @demo index.html
 * @element bull-calendar
 */
export class BullCalendar extends LitElement {

  static properties = {
    title: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }

    #calendar {
      max-width: 900px;
      margin: 0 auto;
    }
  `;

  render() {
    return html`
      <div id="calendar"></div>
    `;
  }

  firstUpdated() {
    const calendarEl = this.renderRoot.querySelector("#calendar");

    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      height: "auto",
      events: eventsData
    });

    calendar.render();
  }
}

customElements.define("bull-calendar", BullCalendar);