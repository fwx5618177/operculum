declare module '@update/markdown' {
    import { Main } from '../src/main'
    export type Replacements = Record<string, string>

    export interface Strategies {
        simple: UpdateStrategy
    }

    type StrategyFactoryStrategies = keyof Strategies

    export { Main }
}
