// src/types/pluginInterface.ts
import { ParsePlugin } from '../plugins/parsePlugin'
import { InquirePlugin } from '../plugins/inquirePlugin'

interface PluginMap {
    parse: ParsePlugin
    inquire: InquirePlugin
}

export type CommandName = keyof PluginMap

export type Plugins = {
    [K in CommandName]: PluginInterface
}

export interface PluginInterface {
    run(...options: any[]): void
}
