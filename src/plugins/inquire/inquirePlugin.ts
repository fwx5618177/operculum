import inquirer from 'inquirer'
import { Context, PluginInterface } from '../../types/pluginInterface'
import { QuestionMap, questions } from './inquireOptions'
import Main from '@update/markdown'

export class InquirePlugin implements PluginInterface {
    async execute(context: Context): Promise<void> {
        const answers = (await inquirer.prompt(questions)) as QuestionMap
        // 将 answers 合并到 context 中
        context = { ...context, answers }

        const { templatePath, useTemplate, userName, outputFormat, renameFile, fileName } = answers

        const test = `# My Resume

        ## Name
        
        {{name}}
        
        ## Skills
        
        {{skills}}
        `
        const updater = new Main(test, 'simple')

        const result = updater.execute({ name: 'test', skills: 'test' })

        console.log('result:', result)
    }
}
