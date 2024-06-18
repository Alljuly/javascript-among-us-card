<footer>
<p>&copy; <a href="https://github.com/Alljuly">Alljuly</a></p>
</footer>

class Footer extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });

        var build = this.buildComponent();

		var style = this.loadStyles();

		shadow.appendChild(build);

		shadow.appendChild(style);
        this.loadStyles(shadow)

    }

    loadStyles(shadow){
        const linkElem = document.createElement("header");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "./footer-module.css");
        shadow.appendChild(linkElem);
    }

}
