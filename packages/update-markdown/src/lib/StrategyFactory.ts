import { UpdateStrategy, AbstractStrategyFactory } from './interface'
import SimpleUpdateStrategy from './SimpleUpdate'

class StrategyFactory extends AbstractStrategyFactory {
    public strategies = {
        simple: new SimpleUpdateStrategy(),
        // ... (可以添加更多的策略)
    }

    getStrategy(type: keyof typeof this.strategies): UpdateStrategy {
        return this.strategies[type]
    }
}

export default StrategyFactory
