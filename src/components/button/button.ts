import { LitElement, html, css } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import style from "./button.scss";

@customElement("m-btn")
export class MButton extends LitElement {
  @property({ type: String }) label!: string;

  static styles = style;

  render() {
    return html`
        <button class="btn-default btn-secondary">${this.label}</button> `;
  }
}
