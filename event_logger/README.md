# Event Driven System Logger

A background system monitoring utility built with Node.js using custom EventEmitters to log real-time system metrics (RAM usage) directly into a .txt file.

---

## Things I Learned

- _Custom EventEmitters:_ How to create a custom logger class extending Node.js built-in events module to emit custom message events.
- _Event Listeners (.on):_ Separated memory tracking logic from file-writing logic using `.on` event listeners to handle emitted logs.
- _Node.js os Module:_ Extracting real-time system hardware metrics like os.freemem() and os.totalmem() to calculate free RAM percentages.
- _Text File Logging:_ Appending continuous background logs into eventlog.txt using timestamps with fs.appendFileSync() and new Date().toISOString().
- _Timers (setInterval):_ Executing recurring monitoring cycles seamlessly in the background every 3 seconds.

---

## How to Run

```bash
# Navigate to the folder
cd EventLogger

# Start the event logger process
node logger.js
```
