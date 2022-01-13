import { LitElement, html, css } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import "./button.scss";

@customElement("m-btn")
export class MButton extends LitElement {
  @property({ type: String }) label!: string;


  render() {
    return html`
        <button class="btn-default">${this.label}</button> `;
  }
}
