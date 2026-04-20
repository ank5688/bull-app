/**
 * Copyright 2026 Mayita
 * @license Apache-2.0, see LICENSE for full text.
 */

class BullEvents extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 16px;
        }
        #events {
          max-width: 1200px;
          margin: 0 auto;
        }
        .events-container {
          max-height: 400px;
          overflow-y: auto;
          border: 1px solid #ccc;
          padding: 8px;
        }
        .event-item {
          margin: 4px 0;
          padding: 8px;
          background-color: #f9f9f9;
          border-radius: 4px;
          cursor: pointer;
        }
        .event-item:hover {
          background-color: #e9e9e9;
        }
      </style>
      <div id="events"></div>
    `;
    this.loadEvents();
  }

  async loadEvents() {
    try {
      const response = await fetch('./bull-calendar-events-data.json');
      const events = await response.json();
      this.renderEvents(events);
    } catch (error) {
      console.error('Error loading events:', error);
      this.renderEvents([]);
    }
  }

  renderEvents(events) {
    const el = this.querySelector('#events');
    let html = '<h3>All Events</h3><div class="events-container">';
    events.forEach(event => {
      html += `<div class="event-item">${event.date}: ${event.type} vs ${event.opponent}</div>`;
    });
    html += '</div>';
    el.innerHTML = html;
  }
}

customElements.define('bull-events', BullEvents);