const enhanceConsoleLog = require('..')

enhanceConsoleLog({

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