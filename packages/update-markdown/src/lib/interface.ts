export type Replacements = {
    [key: string]: string
}

export interface UpdateStrategy {
    update(template: string, replacements: Replacements): string
}

export abstract class AbstractStrategyFactory {
    abstract strategies: { [key: string]: UpdateStrategy }
    abstract getStrategy(type: keyof typeof this.strategies): UpdateStrategy
}

export type StrategyFactoryStrategies = InstanceType<typeof AbstractStrategyFactory>['strategies']
export type StrategyFactoryStrategiesKey = keyof StrategyFactoryStrategies
