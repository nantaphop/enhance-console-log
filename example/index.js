const enhanceConsoleLog = require('..')

// Default configuration
enhanceConsoleLog({
    dateFormat: 'YYYY-MM-DD HH:mm:ss.SSS',
    separator: '\t---',
    levelColor: {
        'debug': '#a0a0a0', 
        'log': '#dbdbdb', 
        'info': '#55a6e8', 
        'warn': '#f7b737',
        'error': '#b21111', 
    },
    // disabled some log level
    disabledLevel: {
        warn: true,
        log: process.env.NODE_ENV === 'production'
    }
})

console.log('Hello World')
console.log('Hello World', {a: 1})
console.log({a: 1})
console.log('string', 1, 2.5, new Date(), true)

console.debug('This is console.debug()')
console.log('This is console.log()')
console.info('This is console.info()')
console.warn('This is console.warn()')
console.error('This is console.error()')

const orderInfoLog = console.infoWithPrefix('order:111111')
const orderLog = console.logWithPrefix('order:111111')

orderInfoLog('created')
orderLog('trying to update')
orderInfoLog('updated')