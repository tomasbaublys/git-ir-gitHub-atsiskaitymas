export default class Button {
    constructor(tab, onClick) {
        this.tab = tab;
        this.onClick = onClick;
    }

    createButtonElement() {
        const button = document.createElement("button");
        button.textContent = this.tab.name.toUpperCase();
        button.addEventListener("click", () => this.onClick(this.tab));
        return button;
    }
}
