// src/main.ts
import { InputPlugin } from './plugins/inputPlugin'
import { ParsePlugin } from './plugins/parsePlugin'
import { CommandName, Plugins } from './types/pluginInterface'

export default class Main {
    private plugins: Plugins

    constructor() {
        // 注册所有插件
        this.plugins = {
            parse: new ParsePlugin(),
            input: new InputPlugin(),
        }
    }

    execute(command: CommandName, ...args: unknown[]) {
        console.log('Reading the params...', ...args)

        const plugin = this.plugins[command]
        if (plugin) {
            plugin.run(...args)
        } else {
            console.error(`Command ${command} not found`)
        }
    }
}
