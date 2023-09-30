import { Replacements, UpdateStrategy } from './interface'

class SimpleUpdateStrategy implements UpdateStrategy {
    update(template: string, replacements: Replacements): string {
        let content = template

        for (const key in replacements) {
            const value = replacements[key]
            const regex = new RegExp(`{{${key}}}`, 'g')
            content = content.replace(regex, value)
        }

        return content
    }
}

export default SimpleUpdateStrategy
