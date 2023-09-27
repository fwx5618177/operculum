// src/types/pluginInterface.ts
import { ParsePlugin } from '../plugins/parsePlugin'
import { InputPlugin } from '../plugins/inputPlugin'

interface PluginMap {
    parse: ParsePlugin
    input: InputPlugin
}

export type CommandName = keyof PluginMap

export type Plugins = {
    [K in CommandName]: PluginInterface
}

export interface PluginInterface {
    run(...options: any[]): void
}
