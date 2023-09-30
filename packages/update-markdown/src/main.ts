import StrategyFactory from './lib/StrategyFactory'
import { UpdateStrategy } from './lib/interface'

class Main {
    private strategy: UpdateStrategy

    constructor(private template: string, type: keyof typeof StrategyFactory.prototype.strategies) {
        const factory = new StrategyFactory()
        this.strategy = factory.getStrategy(type)
    }

    execute(replacements: Record<string, string>): string {
        return this.strategy.update(this.template, replacements)
    }
}

export default Main
