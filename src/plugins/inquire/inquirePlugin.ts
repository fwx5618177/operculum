// src/plugins/inquirePlugin.ts

import inquirer from 'inquirer'
import { Context, PluginInterface } from '../../types/pluginInterface'
import { QuestionMap, questions } from './inquireOptions'

export class InquirePlugin implements PluginInterface {
    async execute(context: Context): Promise<void> {
        const answers = (await inquirer.prompt(questions)) as QuestionMap
        // 将 answers 合并到 context 中
        context = { ...context, answers }

        const { templatePath, useTemplate, userName, outputFormat, renameFile, fileName } = answers

        console.log('Inquire answers:', context)
    }
}
