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

        // Detect if source is a video (.mp4) or an image
        let mediaElement;
        if (this.source.endsWith(".mp4")) {
            mediaElement = document.createElement("video");
            mediaElement.src = this.source;
            mediaElement.controls = true;
            mediaElement.autoplay = false;
            mediaElement.classList.add("tab-video"); // Add a CSS class for styling
        } else {
            mediaElement = document.createElement("img");
            mediaElement.src = this.source;
            mediaElement.alt = this.name;
            mediaElement.classList.add("tab-image"); // Add a CSS class for styling
        }

        const text = document.createElement("p");
        text.textContent = this.content.join(" ");

        // Append elements to modal
        tabDiv.appendChild(header);
        tabDiv.appendChild(mediaElement);
        tabDiv.appendChild(text);

        return tabDiv;
    }
}