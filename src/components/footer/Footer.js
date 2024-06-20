class Footer extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		var build = this.buildComponent();
		shadow.appendChild(build);

		var style = this.loadStyles();
		shadow.appendChild(style);
	}

	loadStyles() {
		const linkElem = document.createElement("link");
		linkElem.setAttribute("rel", "stylesheet");
		linkElem.setAttribute("href", "./footer-module.css");
		return linkElem;
	}

	buildComponent() {
		const componentRoot = document.createElement("footer");
		const p = document.createElement("p");
		const a = document.createElement("a");

		a.setAttribute("href", this.getAttribute("href"));
		a.textContent = this.getAttribute("content");

		p.innerHTML = "&copy: ";

		p.appendChild(a);

		componentRoot.appendChild(p);

		return componentRoot;
	}
}

customElements.define("custom-footer", Footer);
