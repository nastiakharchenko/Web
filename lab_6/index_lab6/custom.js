
class Gallery extends HTMLElement {
    constructor() {
      super();
      // элемент создан
    }
}

class MyPreloader extends HTMLElement
{
    connectedCallback()
    {
        
    }
}
customElements.define("my-preloader", MyPreloader);