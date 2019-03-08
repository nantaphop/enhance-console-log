const moment = require('moment')
const chalk = require('chalk')

const DEFAULT_LEVEL_COLOR = {
    'debug': '#a0a0a0', 
    'log': '#dbdbdb', 
    'info': '#55a6e8', 
    'warn': '#f7b737',
    'error': '#b21111', 
}

const DEFAULT_DISABLED_LEVEL = {}

const getDate = config => chalk.blue(moment().format(config.dateFormat || 'YYYY-MM-DD HH:mm:ss.SSS'))
const getSeparator = config => config.separator || '\t---'
const getLevel = (config, level) => config.levelColor 
                                    ? chalk.hex([config.levelColor[level]])(level.toUpperCase())
                                    : chalk.hex([DEFAULT_LEVEL_COLOR[level]])(level.toUpperCase())

module.exports = function enhanceConsoleLog(config = {}){
    const disabledLevel = config.disabledLevel || DEFAULT_DISABLED_LEVEL
    const enhanceLevel = ['info', 'debug', 'error', 'log', 'warn']
    enhanceLevel.forEach(level => {
        const originalLog = console[level]
        console[level] = function(){   
            let prefix = [getDate(config), getLevel(config, level), getSeparator(config)].join(' ')
            !disabledLevel[level] && originalLog.apply(console, [prefix, ...arguments])
        }
    })
}