export default class Tab {
    constructor(id, name, source, content) {
        this.id = id;
        this.name = name;
        this.source = source;
        this.content = content;
    }

    createTabElement() {
        const tabDiv = document.createElement("div");
        tabDiv.classList.add("tabDiv", "active");

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-btn");
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", () => {
            tabDiv.classList.remove("active");
            tabDiv.remove();
        });

        const title = document.createElement("h1");
        title.textContent = this.name;

        const image = document.createElement("img");
        image.src = this.source;
        image.alt = this.name;

        const text = document.createElement("p");
        text.textContent = this.content.join(" ");

        tabDiv.appendChild(closeButton);
        tabDiv.appendChild(title);
        tabDiv.appendChild(image);
        tabDiv.appendChild(text);

        return tabDiv;
    }
}