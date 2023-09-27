// src/plugins/inputPlugin.ts

// import inquirer from 'inquirer'
import { PluginInterface } from '../types/pluginInterface'

export class InputPlugin implements PluginInterface {
    async run(options: any): Promise<void> {
        const questions = [
            {
                type: 'input',
                name: 'templatePath',
                message: 'Please enter the path of the resume template:',
                validate: (input: string) => {
                    if (input.trim() === '') return 'The path cannot be empty!'
                    return true
                },
            },
            {
                type: 'confirm',
                name: 'wantToSpecifyOutput',
                message: 'Do you want to specify an output path?',
                default: false,
            },
            {
                type: 'input',
                name: 'outputPath',
                message: 'Please enter the output path:',
                when: (answers: any) => answers.wantToSpecifyOutput,
                validate: (input: string) => {
                    if (input.trim() === '') return 'The path cannot be empty!'
                    return true
                },
            },
        ]

        // const answers = await inquirer.prompt(questions)
        // options.templatePath = answers.templatePath
        // options.outputPath = answers.outputPath || null
    }
}
