# Custom Web Server (Nginx Concept)

A lightweight static file web server built from scratch using pure Node.js core modules (http, fs, and path) to understand the underlying mechanics of how web servers like Nginx process and serve web assets.

---

## Things I Learned

- _Web Server Mechanics:_ How Nginx internally intercepts HTTP requests, locates static files, and streams them back to the client.
- _MIME Types Handling:_ Mapping file extensions (.html, .css, .png, .js) to proper Content-Type headers so browsers parse files correctly.
- _Dynamic Path Resolution:_ Using path.join() and __dirname to safely map request URLs (/) to entry files (e.g., index.html).
- _HTTP Status Codes & Fallbacks:_ Implementing custom 404 error handling for missing resources (ENOENT) using res.writeHead() and res.end().

---

## How to Run

```bash
# Navigate to the folder
cd nginx_server

# Start the Node.js server
node server.js
```
