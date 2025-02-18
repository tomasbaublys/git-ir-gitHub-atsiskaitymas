# Metaverse Project

## Overview
The **Metaverse Project** is a web-based project that showcases an interactive user interface with a **tab-based navigation system**. The project is designed using **modern JavaScript (ES6+), CSS, and HTML**, following best coding practices.

** This project is JSON-based** – all tab content is stored in `data/data.json` and loaded dynamically.

---

## Setup & Installation

### **Clone the Repository**
```sh
git clone <your-repository-url>
cd project-folder
```

### **Install Dependencies**
```sh
npm install
```

### **Start JSON Server (Required for Dynamic Data)**
Since the project loads content from `data.json`, you need to run a JSON server.

#### **Option 1: Using `json-server` (Recommended)**
1. Install `json-server` globally if you haven't already:
   ```sh
   npm install -g json-server
   ```
2. Start the server:
   ```sh
   json-server --watch data/data.json --port 3000
   ```
3. Open: **`http://localhost:3000/tabs`** to see JSON data.

## How to Use?
- Click on the **navigation buttons** to open different tabs.
- Click the **close button (✖)** to return to the main view.
- The project dynamically loads tab content from **data.json**.