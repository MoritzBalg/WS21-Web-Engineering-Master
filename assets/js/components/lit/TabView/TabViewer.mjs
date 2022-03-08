import {LitElement, html, css} from 'https://mkaul.github.io/lit/lib/lit.js';

function partMap(parts) { 
  return Object.entries(parts)
               .filter(([key, value]) => value)
               .map(([key, value]) => key).join(" ");
}

class Tabs extends LitElement {
  get tabs() {
    const slot = this.shadowRoot.querySelector('slot');
    return slot ? slot.assignedElements() : [];
  }

  selectTab(selected) {
    for (let tab of this.tabs)
      tab.selected = tab == selected;
    this.requestUpdate();
  }

  firstUpdated() {
    super.firstUpdated();
    this.tabs.find(tab => tab.selected) || this.selectTab(this.tabs[0])
  }

  render() {
    return html`
    <style>
    :host, slot {
      display: block;
    }

    span {
      display: inline-block;
    }
    </style>

    <nav part="tab-bar">
      ${this.tabs.map(tab => html`
        <span part=${partMap({tab: true, 'tab-selected': tab.selected})}
              @click=${ev => this.selectTab(tab)}>
          ${tab.title}
        </span>
      `)}
    </nav>

    <slot part="content" @slotchange=${ev => this.requestUpdate()}></slot>
    `;
  }
}

class Tab extends LitElement {
  static get properties() {
    return {
      title: {type: String, reflect: true},
      selected: {type: Boolean, reflect: true}
    }
  }

  render() {
    return html`
    <style>
    :host(:not([selected])) {
      display: none;
    }
    </style>
    
    <slot></slot>
    `;
  }
}

customElements.define('example-tab', Tab);
customElements.define('example-tabs', Tabs);

