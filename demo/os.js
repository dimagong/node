const os = require('os')

console.log('Operation sistem', os.platform())

console.log("Processor architecture", os.arch())

console.log("Info about processor", os.cpus())

console.log("Free memory", os.freemem())

console.log("All memory", os.totalmem())

console.log("Home directory", os.homedir())

console.log("How long is the system turned on ", os.uptime())