class Fildset extends HTMLElement{
   
    constructor(){
      super()

      const shadow =  this.attachShadow({ mode: "open" });
      var build = this.buildComponent();
      var style = this.loadStyles();
		  shadow.appendChild(build);
		  shadow.appendChild(style);
      this.loadStyles(shadow)

    }

    loadStyles(shadow){
      const linkElem = document.createElement("footer");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("href", "./Fieldset-module.css");
      shadow.appendChild(linkElem);
    }

    buildComponent(){
      const componentRoot = document.createElement("div")
      componentRoot.classList.add(this.getAttribute("className"))

      const label = document.createElement("label")
      label.textContent = this.getAttribute("label-content" || "text content")

      const input = document.createElement("input")
      input.setAttribute("id", this.getAttribute("id") || ' ')
      input.setAttribute("type", this.getAttribute("type") || "text")
      input.setAttribute("placeholder", this.getAttribute("placeholder") || "placeholder")
      input.setAttribute("name", "label-content" || "Name")

      const isRequired = this.getAttribute("require") !== null

      if (isRequired) { 
        input.setAttribute("required", "")
      };

      componentRoot.appendChild(label)
      componentRoot.appendChild(input)

      return componentRoot
    }
} 

customElements.define('custom-fieldset', Fildset)