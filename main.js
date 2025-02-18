
import Tab from "./modules/Tab.js";
import TabManager from "./modules/TabManager.js";

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("./data/data.json");
    const data = await response.json();

    const tabs = data.tabs.map(tabData => new Tab(tabData.id, tabData.name, tabData.source, tabData.content));

    const contentContainer = document.querySelector("#content");
    const buttonContainer = document.querySelector(".btnCenter");

    const tabManager = new TabManager(tabs, contentContainer, buttonContainer);
    tabManager.initialize();
});
