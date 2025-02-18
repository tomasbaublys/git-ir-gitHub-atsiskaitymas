import Button from "./Button.js";

export default class TabManager {
    constructor(tabs, contentContainer, buttonContainer) {
        this.tabs = tabs;
        this.contentContainer = contentContainer;
        this.buttonContainer = buttonContainer;
        this.activeTab = null;
    }

    initialize() {
        this.tabs.forEach(tab => {
            const button = new Button(tab, this.openTab.bind(this));
            this.buttonContainer.appendChild(button.createButtonElement());
        });
    }

    openTab(tab) {
        if (this.activeTab) {
            this.contentContainer.innerHTML = "";
        }
        this.activeTab = tab;
        this.contentContainer.appendChild(tab.createTabElement());
    }
}
