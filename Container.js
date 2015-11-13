const template = `
        <style>
        .container {
            background-color: #FFF;
            border-radius: 5px;
            box-shadow: 0 0 5px #dadada;
            position: relative;
            min-height: 100px;
        }        </style>
        <div class="container">
        Content goes here:
            <content></content>
        </div>
        <div class="container">
            H1 Content goes here:
            <content select="h1"></content>
        </div>
        <input id="remove" type="button" value="Remove">
        <input id="hide" type="button" value="Hide">

    `;

class Container extends HTMLElement {

    // Fires when an instance of the element is created.
    createdCallback() {
        console.log('Created');
        this.createShadowRoot().innerHTML = template;
        this.hideButton = this.shadowRoot.getElementById("hide");
        this.removeButton = this.shadowRoot.getElementById("remove");
        this.hideButton.addEventListener('click', () => this.hide());
        this.removeButton.addEventListener('click', () => this.remove());
    }

    hide() {
        this.style.display = "none";

    }

    // Fires when an instance was inserted into the document.
    attachedCallback() {
        console.log('Attached');
    }

    detachedCallback() {
        console.log('Detached');
    }

    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('Attribute Changed', attrName, oldVal, newVal);
        const event = new Event('attrChanged');
        event.payload = {
            attrName, oldVal, newVal
        };
        this.dispatchEvent(event);
    }
}
document.registerElement('my-container', Container);
