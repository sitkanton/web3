class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
   
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    margin: 16px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                }
                .card:hover {
                    transform: scale(1.02);
                }
                .header {
                    font-weight: bold;
                    font-size: 1.5em;
                    margin-bottom: 10px;
                }
                .content {
                    font-size: 1em;
                    color: #333;
                }
            </style>
            <div class="card">
                <div class="header">
                    <slot name="header"></slot>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('card-component', CardComponent);
