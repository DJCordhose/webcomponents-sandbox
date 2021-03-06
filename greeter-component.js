var proto = Object.create(HTMLElement.prototype);

// life cycle method, called when an instance of the component is created
proto.createdCallback = function () {
    console.log('createdCallback');
    this.greeting = this.getAttribute('greeting');
    this.render();
    this.update();
    this.addHandlers();
};

proto.render = function () {
    var t = document.querySelector('#greeter-template');
    var clone = document.importNode(t.content, true);
    this.createShadowRoot().appendChild(clone);
};

proto.update = function () {
    var oldValue = this.shadowRoot.getElementById("in").value;
    this.shadowRoot.getElementById('greeting').innerHTML = this.greeting;
    if (oldValue !== this.greeting) this.shadowRoot.getElementById('in').value = this.greeting;
};

proto.addHandlers = function () {
    this.shadowRoot.getElementById('clear').addEventListener('click', function () {
        this.reset();
    }.bind(this));
    this.shadowRoot.getElementById("in").addEventListener("keyup", function (event) {
        this.greeting = event.target.value;
        this.update();
    }.bind(this));
};

proto.reset = function () {
    this.greeting = "";
    this.update();
    this.shadowRoot.getElementById('in').focus();
};
document.registerElement('greeter-element', {prototype: proto});
