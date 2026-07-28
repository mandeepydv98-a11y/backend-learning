const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')   // now events are in class EventEmitter

class Logger extends EventEmitter {
    log(message){
        this.emit('message',{message})
    }
}


const logger = new Logger()
const logFile = "./eventlog.txt"

const logToFile = (event)=>{
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`
    fs.appendFileSync(logFile , logMessage)
}

logger.on('message', logToFile)

setInterval(() => {
    const freeMemory = (os.freemem()/os.totalmem()) * 100
    logger.log(`Free Memory: ${freeMemory.toFixed(2)} %`)
}, 3000);