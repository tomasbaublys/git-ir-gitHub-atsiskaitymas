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
    
        // Header container for title & close button
        const header = document.createElement("div");
        header.classList.add("tab-header");
    
        const title = document.createElement("h1");
        title.textContent = this.name;
    
        const closeButton = document.createElement("button");
        closeButton.classList.add("close-btn");
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", () => {
            tabDiv.classList.remove("active");
            tabDiv.remove();
        });
    
        // Append title and close button to header
        header.appendChild(title);
        header.appendChild(closeButton);
    
        const image = document.createElement("img");
        image.src = this.source;
        image.alt = this.name;
    
        const text = document.createElement("p");
        text.textContent = this.content.join(" ");
    
        // Append header to modal
        tabDiv.appendChild(header);
        tabDiv.appendChild(image);
        tabDiv.appendChild(text);
    
        return tabDiv;
    }
}