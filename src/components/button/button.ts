import { LitElement, html, css } from "lit";
import { customElement, query, property } from "lit/decorators.js";

@customElement("m-btn")
export class MButton extends LitElement {
  @property({ type: String }) label!: string;

    static styles = css`
    .btn-default {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 0;
        line-height: 1.5rem;
        background: var(--color-brand);
        color: #101820;
        border: none;
        padding: 0.75rem 3rem;
        border-radius: 0.5rem;
        cursor: pointer;
        outline: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
    }`

  render() {
    return html`
        <button class="btn-default">${this.label}</button> `;
  }
}
