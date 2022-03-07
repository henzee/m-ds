import { LitElement, html, css } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import style from "./header.scss";

@customElement("m-header")
export class MHeader extends LitElement {
  @property({ type: String }) label!: string;

  static styles = style;

  render() {
    return html`
        <div class="header">
          <nav class="secondary-navigation">
            <div class="wrapper">
              <div class="external-link">
                <a class="navigation-link">mirka.com</a>
              </div>
              <ul class="navigation-list">
                <li class="list-item">
                  <a class="navigation-link">Country</a>
                </li>
                <li class="list-item">
                  <a class="navigation-link">Language</a>
                </li>
                <li class="list-item">
                  <a class="navigation-link">Cart</a>
                </li>
                <li class="list-item">
                  <a class="navigation-link">My Account</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="menu">
            <div class="wrapper">
              <div class="left">
                <img width="180" height="40" src="https://mirkacom-ci-webapp.azurewebsites.net/mirkacom/img/mirka-logo.svg" alt="Mirka logo" />
                <nav>
                  <ul class="main-nav">
                    <li class="main-nav-item">Products</li>
                    <li class="main-nav-item">Know-how</li>
                    <li class="main-nav-item">Support</li>
                    <li class="main-nav-item">Company</li>
                  </ul>
                </nav>
              </div>
              <div class="global-search">
                <input class="global-search-field" placeholder="Search products or content" />
                <button class="global-search-button">
                  <i data-feather="search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>`;
  }
}
