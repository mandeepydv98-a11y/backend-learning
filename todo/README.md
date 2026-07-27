# CLI Todo App

A simple command-line Todo application built with Node.js to practice core backend concepts and local file handling.

---

## Things I Learned

- _Node.js Core Modules:_ Hands-on experience with the built-in fs (File System) module to read and write files synchronously.
- _JSON Data Persistence:_ How to serialize JS objects using JSON.stringify() and parse raw file buffers back into code using JSON.parse().
- _Error Handling & Edge Cases:_ Handling file-not-found scenarios gracefully using try...catch blocks to prevent runtime crashes.
- _CLI Arguments Handling:_ Parsing process execution inputs via process.argv to trigger specific backend logic.

---

## How to Run

```bash
# Add a new task
node todo.js add "My task"

# List all tasks
node todo.js list

# Remove a task by its task number (starts from 1)
node todo.js remove 1
```
