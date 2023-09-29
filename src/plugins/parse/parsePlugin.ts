// src/plugins/parsePlugin.ts
import fs from 'fs'
import path from 'path'
import { Context, PluginInterface } from '../../types/pluginInterface'

export class ParsePlugin implements PluginInterface {
    execute(context: Context, options: { templatePath: string; output?: string }): void {
        const { templatePath, output } = options

        const content = fs.readFileSync(path.resolve(templatePath), 'utf-8')
        console.log('Parsing the resume template...')

        // TODO: Add your template parsing logic here
        const parsedContent = content // This should be replaced with actual parsed content

        if (output) {
            fs.writeFileSync(path.resolve(output), parsedContent, 'utf-8')
            console.log(`Parsed resume has been saved to ${output}`)
        } else {
            console.log('Parsed Resume Content:', parsedContent)
        }
    }
}
