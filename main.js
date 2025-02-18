import Tab from "./modules/Tab.js";
import TabManager from "./modules/TabManager.js";

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("./data/data.json");
    const data = await response.json();

    const tabs = data.tabs.map(tabData => new Tab(tabData.id, tabData.name, tabData.source, tabData.content));

    const contentContainer = document.querySelector("#tab-content"); // Now selects tab content div
    const buttonContainer = document.querySelector("#buttons-container"); // Now selects buttons div

    const tabManager = new TabManager(tabs, contentContainer, buttonContainer);
    tabManager.initialize();
});
