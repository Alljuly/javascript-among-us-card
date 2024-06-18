/*
Atributos que esse componente recebe:
 type, name, id, placeholder, className
*/

/** Corrigir desgin do form
 * 
          <div class="datadate">
            <label
              >Ano de nascimento:
              <input
                type="number"
                name="date"
                id="date"
                min="0"
                placeholder="Ex: 2005"
                required
            /></label>
            <label
              >Peso:
              <input
                type="number"
                name="peso"
                id="weight"
                placeholder="Ex.: 65"
              />
            </label>
            <label>
              Altura:
              <input
                type="number"
                name="altura"
                id="height"
                placeholder="Ex:. 1.76"
                required
              />
            </label>
            <label
              >Tipo sanguineo:
              <input
                type="text"
                name="blood"
                id="blood"
                placeholder="Ex.: O-"
                required
              />
            </label>
          </div>
 * 
 */

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

      label.appendChild(input)
      componentRoot.appendChild(label)

      return componentRoot
    }
} 

customElements.define('custom-fieldset', Fildset)