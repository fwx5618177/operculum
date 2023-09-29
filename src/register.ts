import { InquirePlugin, ParsePlugin } from './plugins'

export const plugins = {
    inquire: new InquirePlugin(),
    parse: new ParsePlugin(),
}

export type PluginMap = keyof typeof plugins
