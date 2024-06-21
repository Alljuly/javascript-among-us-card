class Header extends HTMLElement{

    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });

        var build = this.buildComponent();

		var style = this.loadStyles();

		shadow.appendChild(build);

		shadow.appendChild(style);

    }

    loadStyles(){
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "./header-module.css");
        return linkElem
    }

    buildComponent(){
        const componentRoot = document.createElement("header")
        const title = document.createElement("h1")
        const span = document.createElement("span")

        //Colocar atributo para mudar tamanho da fonte
        title.textContent = this.getAttribute("title")
        span.textContent = this.getAttribute("spanTitle" || " ")
        
        if(span.textContent){
            title.appendChild(span)
        }
        
        componentRoot.appendChild(title)


        return componentRoot
    }
}

customElements.define("header-component", Header);