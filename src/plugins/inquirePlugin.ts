// src/plugins/inquirePlugin.ts

import inquirer from 'inquirer'
import { PluginInterface } from '../types/pluginInterface'
import { QuestionMap, questions } from './inquireOptions'

export class InquirePlugin implements PluginInterface {
    async run(options: any): Promise<void> {
        const answers: QuestionMap = await inquirer.prompt(questions)
        console.log(answers)
        const { templatePath, wantToSpecifyOutput, outputPath } = answers

        // options.templatePath = answers?.templatePath
        // options.outputPath = answers.outputPath || null
    }
}
